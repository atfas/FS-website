import type { ImageMetadata } from 'astro';
import fotoAna from '../assets/images/foto_ana.jpg';
import fotoManuel from '../assets/images/foto_manuel.jpeg';

export const navLinks = [
  { href: '#about', label: 'Quem Somos' },
  { href: '#services', label: 'Áreas' },
  { href: '#team', label: 'Advogados' },
  { href: '#contact', label: 'Contactos' },
];

export const hero = {
  eyebrow: 'Sociedade de Advogados R.L.',
  title: 'Fernandes & Saraiva',
  lead: 'Advogados em Vila Nova de Gaia desde 2008. Um diálogo franco e sério com cada cliente.',
};

export const aboutParagraphs = [
  'A Fernandes & Saraiva é uma sociedade de advogados constituída em 2008, com escritório no centro de Vila Nova de Gaia. Os advogados fundadores exercem advocacia a tempo inteiro há 25 anos.',
  'Num estilo muito próprio, caracterizam o seu desempenho pelo pleno respeito das normas e princípios éticos da profissão, com retidão de atuação e um diálogo franco e sério com o cliente.',
  'A nossa equipa está disponível para todas as questões em que a sua competência possa servir os interesses do cliente.',
];

export const facts = [
  { value: '2008', label: 'Ano de fundação' },
  { value: '25 anos', label: 'De advocacia dos sócios' },
  { value: 'Gaia', label: 'Escritório no centro da cidade' },
];

export const services: { icon: string; title: string }[] = [
  { icon: 'fa-gavel', title: 'Criminal e Contraordenacional' },
  { icon: 'fa-chart-line', title: 'Insolvências' },
  { icon: 'fa-handshake', title: 'Societário e Comercial' },
  { icon: 'fa-briefcase', title: 'Laboral' },
  { icon: 'fa-heart', title: 'Família e Menores' },
  { icon: 'fa-globe', title: 'Nacionalidade e Imigração' },
  { icon: 'fa-house', title: 'Contratos e Imobiliário' },
  { icon: 'fa-scroll', title: 'Sucessões e Partilhas' },
  { icon: 'fa-file-contract', title: 'Civil e Execuções' },
];

export const team: { name: string; role: string; photo: ImageMetadata; bio: string }[] = [
  {
    name: 'Ana Fernandes',
    role: 'Sócia fundadora',
    photo: fotoAna,
    bio: 'Nascida em 1972, na cidade de Oliveira de Azeméis, Aveiro, Portugal. Concluiu a licenciatura em Direito em 1995, tendo concluído o seu estágio de advocacia no final do ano de 1997. Em 2008 constituiu a sociedade de advogados Fernandes e Saraiva, da qual é sócia fundadora, exercendo funções de advogada há 25 anos.',
  },
  {
    name: 'Manuel Saraiva',
    role: 'Sócio fundador',
    photo: fotoManuel,
    bio: 'Nascido em 1972, natural de Águas Santas, concelho da Maia, Portugal. Concluiu a licenciatura em Direito em 1995, tendo concluído o seu estágio de advocacia no final do ano de 1997. Em 2008 constituiu a sociedade de advogados Fernandes e Saraiva, da qual é sócio fundador, exercendo funções de advogado há 25 anos.',
  },
];

export const partner = {
  name: 'RH Estratégico',
  text: 'A Fernandes & Saraiva é parceira da RH Estratégico, uma empresa dedicada a impulsionar a alta performance empresarial através do alinhamento de políticas e práticas de gestão de pessoas e governança corporativa. Juntas, procuramos oferecer soluções objetivas e focadas nas reais necessidades dos clientes.',
  url: 'https://rhestrategicoconsultoria.com.br/',
  linkLabel: 'Visitar RH Estratégico',
};

export const contact = {
  addressLines: ['Avenida da República, n.º 872', '7.º andar, Sala 7.2', '4430-190 Vila Nova de Gaia'],
  email: 'geral@fernandesesaraiva.pt',
  phone: '223 705 127',
  phoneHref: 'tel:+351223705127',
  hoursLines: ['Segunda a sexta', '10h00 às 19h00'],
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Fernandes+%26+Saraiva+Advogados+Vila+Nova+de+Gaia',
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3005.1712455626903!2d-8.609295222699446!3d41.13078751187047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2464da94b4ea1b%3A0x81376592b56c2515!2sFernandes%20%26%20Saraiva%20Advogados!5e0!3m2!1spt-PT!2spt!4v1709228577334!5m2!1spt-PT!2spt',
};
