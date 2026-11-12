// Generates every icon and share image from the original F&S artwork.
// Run with: npm run icons
//
// Source: brand/logo-fs.png (navy letters on a transparent background).
// The letters are only cropped and recoloured, never redrawn.

import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';

const SOURCE = 'brand/logo-fs.png';
const NAVY = '#1f3a5f';
const WHITE = '#ffffff';

// Trim the transparent space around the letters
const { info: trimInfo } = await sharp(SOURCE).trim().toBuffer({ resolveWithObject: true });
const letterBox = {
  left: -trimInfo.trimOffsetLeft,
  top: -trimInfo.trimOffsetTop,
  width: trimInfo.width,
  height: trimInfo.height,
};

/** The F&S letters in one colour, scaled to the given width. */
async function letters(color, width) {
  const mask = await sharp(SOURCE)
    .extract(letterBox)
    .extractChannel(3)
    .resize({ width })
    .raw()
    .toBuffer({ resolveWithObject: true });
  const { width: w, height: h } = mask.info;
  const solid = await sharp({ create: { width: w, height: h, channels: 3, background: color } }).raw().toBuffer();
  const buffer = await sharp(solid, { raw: { width: w, height: h, channels: 3 } })
    .joinChannel(mask.data, { raw: { width: w, height: h, channels: 1 } })
    .png()
    .toBuffer();
  return { buffer, width: w, height: h };
}

/** White letters on a navy square. `rounded` gives the Apple-style corners. */
async function icon(size, { rounded = true } = {}) {
  const radius = rounded ? Math.round(size * 0.225) : 0;
  const background = Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}"><rect width="${size}" height="${size}" rx="${radius}" fill="${NAVY}"/></svg>`,
  );
  const l = await letters(WHITE, Math.round(size * 0.72));
  return sharp(background)
    .composite([{ input: l.buffer, left: Math.round((size - l.width) / 2), top: Math.round((size - l.height) / 2) }])
    .png();
}

/** 1200×630 card shown when the link is shared on WhatsApp, Facebook, etc. */
async function shareImage() {
  const W = 1200;
  const H = 630;
  const iconSize = 240;
  const font = "'Helvetica Neue', Helvetica, Arial, sans-serif";
  const svg = Buffer.from(`
    <svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
      <rect width="${W}" height="${H}" fill="#f5f5f7"/>
      <text x="420" y="270" font-family="${font}" font-size="68" font-weight="bold" fill="#1d1d1f">Fernandes &amp; Saraiva</text>
      <text x="420" y="330" font-family="${font}" font-size="36" fill="#515154">Sociedade de Advogados</text>
      <text x="420" y="420" font-family="${font}" font-size="32" font-weight="bold" fill="${NAVY}">Vila Nova de Gaia · 223 705 127</text>
    </svg>`);
  const iconBuffer = await (await icon(iconSize)).toBuffer();
  return sharp(svg).composite([{ input: iconBuffer, left: 120, top: Math.round((H - iconSize) / 2) }]).png();
}

await mkdir('public', { recursive: true });
await mkdir('src/assets/images', { recursive: true });

await (await icon(64)).toFile('public/favicon.png'); // browser tab
await (await icon(512)).toFile('public/icon-512.png'); // Google Business Profile, Android
await (await icon(180, { rounded: false })).toFile('public/apple-touch-icon.png'); // iPhone adds its own corners
await (await icon(256)).toFile('src/assets/images/logo-icon.png'); // navbar (optimised by Astro)
await (await shareImage()).toFile('public/og-image.png');

console.log('Icons generated from', SOURCE);
