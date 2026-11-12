import type { ImageMetadata } from 'astro';
import fotoAna from '../assets/images/foto_ana.jpg';
import fotoManuel from '../assets/images/foto_manuel.jpeg';

export const navLinks = [
  { href: '#about', label: 'Quem Somos' },
  { href: '#services', label: 'Áreas de Atividade' },
  { href: '#team', label: 'Equipa' },
  { href: '#partners', label: 'Parceiros' },
  { href: '#contact', label: 'Contactos' },
];

export const aboutParagraphs = [
  'A Fernandes Saraiva é uma sociedade de advogados que foi constituída em 2008, que fixou o seu escritório no centro de Vila Nova de Gaia. Os advogados fundadores exercem advocacia a tempo inteiro há precisamente 25 anos.',
  'Num estilo muito próprio, caracterizam o seu desempenho pelo pleno respeito das normas e princípios éticos da profissão, ostentando com orgulho a retidão de atuação e o diálogo franco e sério com o cliente.',
  'A Fernandes & Saraiva R.L, representada pela sua equipa está disponível, para todas as questões ou necessidades cuja competência possa servir os interesses do cliente.',
];

export const services: { icon: string; title: string }[] = [
  { icon: 'fa-gavel', title: 'Criminal e Contraordenacional' },
  { icon: 'fa-chart-line', title: 'Insolvências' },
  { icon: 'fa-handshake', title: 'Societário e Comercial' },
  { icon: 'fa-users', title: 'Laboral' },
  { icon: 'fa-heart', title: 'Família e Menores' },
  { icon: 'fa-globe', title: 'Nacionalidade e Imigração' },
  { icon: 'fa-home', title: 'Contratos e Imobiliário' },
  { icon: 'fa-scroll', title: 'Sucessões e Partilhas' },
  { icon: 'fa-file-contract', title: 'Civil e Execuções' },
];

export const team: { name: string; photo: ImageMetadata; bio: string }[] = [
  {
    name: 'Ana Fernandes',
    photo: fotoAna,
    bio: 'Nascida em 1972, na cidade de Oliveira de Azeméis, Aveiro, Portugal. Concluiu a licenciatura em Direito em 1995, tendo concluído o seu estágio de advocacia no final do ano de 1997. Em 2008 constituiu a sociedade de advogados Fernandes e Saraiva, da qual é sócia fundadora, exercendo funções de advogada há 25 anos.',
  },
  {
    name: 'Manuel Saraiva',
    photo: fotoManuel,
    bio: 'Nascido em 1972, natural de Águas Santas, concelho da Maia, Portugal. Concluiu a licenciatura em Direito em 1995, tendo concluído o seu estágio de advocacia no final do ano de 1997. Em 2008 constituiu a sociedade de advogados Fernandes e Saraiva, da qual é sócio fundador, exercendo funções de advogado há 25 anos.',
  },
];

export const partner = {
  text: 'A Fernandes e Saraiva é parceira da RH Estratégico, uma empresa dedicada a impulsionar a alta performance empresarial através do alinhamento de políticas e práticas de gestão de pessoas e governança corporativa. Juntas, procuramos oferecer soluções objetivas e focadas nas reais necessidades dos clientes. Contamos com profissionais altamente competentes e experientes em diversas áreas, comprometidos com resultados de excelência e total respeito aos valores éticos.',
  url: 'https://rhestrategicoconsultoria.com.br/',
  linkLabel: 'Visitar RH Estratégico',
};

export const contact = {
  addressLines: ['Avenida da República, n.º 872, 7º andar, Sala 7.2', '4430-190 Vila Nova de Gaia'],
  email: 'geral@fernandesesaraiva.pt',
  phone: '(+351) 223 705 127',
  hoursLines: ['De Segunda a Sexta', 'das 10h às 19h'],
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3005.1712455626903!2d-8.609295222699446!3d41.13078751187047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2464da94b4ea1b%3A0x81376592b56c2515!2sFernandes%20%26%20Saraiva%20Advogados!5e0!3m2!1spt-PT!2spt!4v1709228577334!5m2!1spt-PT!2spt',
};
