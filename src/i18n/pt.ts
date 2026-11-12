// Portuguese text. src/i18n/en.ts must have exactly the same keys.

export const pt = {
  meta: {
    htmlLang: 'pt-PT',
    ogLocale: 'pt_PT',
    homeTitle: 'Fernandes & Saraiva | Advogados em Vila Nova de Gaia, Porto',
    homeDescription:
      'Sociedade de advogados em Vila Nova de Gaia, Porto, desde 2008. Direito criminal, insolvências, societário, laboral, família, nacionalidade e imigração, imobiliário, sucessões e civil.',
    privacyTitle: 'Política de Privacidade | Fernandes & Saraiva',
    privacyDescription: 'Como a Fernandes & Saraiva, Sociedade de Advogados R.L., trata os dados pessoais enviados através deste site.',
    ogImageAlt: 'Logótipo F&S - Fernandes & Saraiva, Sociedade de Advogados',
  },

  skipLink: 'Saltar para o conteúdo',

  nav: {
    ariaLabel: 'Navegação principal',
    links: {
      services: 'Áreas',
      about: 'Quem Somos',
      team: 'Advogados',
      booking: 'Marcar consulta',
      contact: 'Contactos',
    },
    menu: 'Menu',
    close: 'Fechar',
    callAria: (phone: string) => `Ligar para ${phone}`,
    // Link to the other language, written in that language
    switchLabel: 'English',
    switchShort: 'EN',
    switchAria: 'Ver o site em inglês (English)',
  },

  hero: {
    eyebrow: 'Sociedade de Advogados R.L.',
    lead: 'Advogados em Vila Nova de Gaia desde 2008. Um diálogo franco e sério com cada cliente.',
    call: 'Ligar',
    book: 'Marcar consulta',
  },

  services: {
    title: 'Áreas de Atividade',
    subtitle: 'Em que podemos ajudar?',
    items: [
      'Criminal e Contraordenacional',
      'Insolvências',
      'Societário e Comercial',
      'Laboral',
      'Família e Menores',
      'Nacionalidade e Imigração',
      'Contratos e Imobiliário',
      'Sucessões e Partilhas',
      'Civil e Execuções',
    ],
    ctaBefore: 'Não encontra o seu caso?',
    ctaLink: 'Ligue-nos',
    ctaAfter: 'e explicamos-lhe como podemos ajudar.',
  },

  about: {
    title: 'Quem Somos',
    subtitle: 'Uma sociedade de advogados próxima de quem precisa de ajuda.',
    photoAlt: 'Palácio da Justiça do Porto',
    facts: [
      { value: '2008', label: 'Ano de fundação' },
      { value: '25 anos', label: 'De advocacia dos sócios' },
      { value: 'Gaia', label: 'Escritório no centro da cidade' },
    ],
    paragraphs: [
      'A Fernandes & Saraiva é uma sociedade de advogados constituída em 2008, com escritório no centro de Vila Nova de Gaia. Os advogados fundadores exercem advocacia a tempo inteiro há 25 anos.',
      'Num estilo muito próprio, caracterizam o seu desempenho pelo pleno respeito das normas e princípios éticos da profissão, com retidão de atuação e um diálogo franco e sério com o cliente.',
      'A nossa equipa está disponível para todas as questões em que a sua competência possa servir os interesses do cliente.',
    ],
  },

  team: {
    title: 'Advogados',
    subtitle: 'Os sócios fundadores, com 25 anos de experiência.',
    photoAlt: (name: string) => `Fotografia de ${name}`,
    members: [
      {
        role: 'Sócia fundadora',
        bio: 'Nascida em 1972, na cidade de Oliveira de Azeméis, Aveiro, Portugal. Concluiu a licenciatura em Direito em 1995, tendo concluído o seu estágio de advocacia no final do ano de 1997. Em 2008 constituiu a sociedade de advogados Fernandes e Saraiva, da qual é sócia fundadora, exercendo funções de advogada há 25 anos.',
      },
      {
        role: 'Sócio fundador',
        bio: 'Nascido em 1972, natural de Águas Santas, concelho da Maia, Portugal. Concluiu a licenciatura em Direito em 1995, tendo concluído o seu estágio de advocacia no final do ano de 1997. Em 2008 constituiu a sociedade de advogados Fernandes e Saraiva, da qual é sócio fundador, exercendo funções de advogado há 25 anos.',
      },
    ],
  },

  booking: {
    title: 'Marcar consulta',
    subtitle: 'Escolha o dia e a hora que lhe dão mais jeito.',
    loading: 'A carregar o calendário…',
    openCalendar: 'Abrir o calendário de marcações',
    emptyBefore: 'Para marcar uma consulta, ligue para',
    emptyOr: 'ou',
    emptyLink: 'envie-nos uma mensagem',
    helpBefore: 'Prefere marcar por telefone? Ligue para',
    helpAfter: ', de segunda a sexta, das 10h00 às 19h00.',
  },

  contact: {
    title: 'Contactos',
    subtitle: 'Ligue, escreva-nos ou visite-nos no escritório.',
    phone: 'Telefone',
    call: 'Ligar',
    email: 'Email',
    sendEmail: 'Enviar email',
    hours: 'Horário',
    hoursLines: ['Segunda a sexta', '10h00 às 19h00'],
    address: 'Morada',
    addressLines: ['Avenida da República, n.º 872', '7.º andar, Sala 7.2', '4430-190 Vila Nova de Gaia'],
    openMaps: 'Abrir no Google Maps',
    mapTitle: 'Mapa com a localização do escritório Fernandes & Saraiva',
    mapLang: 'pt-PT',
  },

  form: {
    title: 'Enviar mensagem',
    intro: 'Escreva-nos e respondemos com a maior brevidade possível.',
    subject: 'Nova mensagem do site Fernandes & Saraiva',
    language: 'Português',
    name: 'Nome',
    email: 'Email',
    phone: 'Telefone',
    area: 'Assunto',
    optional: '(opcional)',
    chooseArea: 'Escolha uma área',
    otherArea: 'Outro assunto',
    message: 'Mensagem',
    consentBefore: 'Aceito que os meus dados sejam usados para responder a esta mensagem, de acordo com a',
    consentLink: 'política de privacidade',
    consentValue: 'Sim',
    submit: 'Enviar mensagem',
    sending: 'A enviar…',
    errors: {
      name: 'Escreva o seu nome.',
      email: 'Escreva um email válido, por exemplo nome@gmail.com.',
      message: 'Escreva a sua mensagem.',
      consent: 'Para enviar, aceite a política de privacidade.',
    },
    success: 'Obrigado! A sua mensagem foi enviada. Entraremos em contacto consigo brevemente.',
    failed: (phone: string) => `Não foi possível enviar a mensagem. Tente novamente ou ligue ${phone}.`,
    notConfigured: (email: string, phone: string) =>
      `O formulário ainda não está configurado. Envie um email para ${email} ou ligue ${phone}.`,
    fallbackBefore: 'Envie-nos um email para',
    fallbackOr: 'ou ligue para',
  },

  partner: {
    label: 'Parceiro',
    text: 'A Fernandes & Saraiva é parceira da RH Estratégico, uma empresa dedicada a impulsionar a alta performance empresarial através do alinhamento de políticas e práticas de gestão de pessoas e governança corporativa. Juntas, procuramos oferecer soluções objetivas e focadas nas reais necessidades dos clientes.',
    linkLabel: 'Visitar RH Estratégico',
    newWindow: '(abre numa nova janela)',
  },

  footer: {
    firmType: 'Sociedade de Advogados R.L.',
    privacy: 'Privacidade',
    rights: 'Todos os direitos reservados.',
  },

  privacy: {
    heading: 'Política de Privacidade',
    updated: 'Última atualização: novembro de 2026',
    back: 'Voltar ao início',
    // Paragraphs may contain simple HTML links; {email} is replaced with the firm's email link
    sections: [
      {
        title: 'Quem é responsável pelos seus dados',
        paragraphs: [
          'Fernandes & Saraiva, Sociedade de Advogados R.L., com escritório na Avenida da República, n.º 872, 7.º andar, Sala 7.2, 4430-190 Vila Nova de Gaia. Email: {email}.',
        ],
      },
      {
        title: 'Que dados recolhemos',
        paragraphs: [
          'Apenas os dados que nos envia através do formulário de contacto ou da marcação de consulta: nome, email, telefone (se o indicar), o assunto e o conteúdo da sua mensagem, e o dia e a hora da consulta escolhidos.',
        ],
      },
      {
        title: 'Para que os usamos',
        paragraphs: [
          'Para responder à sua mensagem, marcar e gerir a consulta que pediu e entrar em contacto consigo a esse respeito. Não usamos os seus dados para publicidade nem os vendemos a terceiros.',
        ],
      },
      {
        title: 'Com que fundamento',
        paragraphs: [
          'O seu consentimento, dado ao enviar o formulário, e as diligências pré-contratuais que nos pede, nos termos do artigo 6.º, n.º 1, alíneas a) e b), do Regulamento Geral sobre a Proteção de Dados (RGPD).',
        ],
      },
      {
        title: 'Serviços que nos ajudam',
        paragraphs: [
          '<strong>Web3Forms</strong> entrega as mensagens do formulário no nosso email; <strong>Cal.com</strong> gere as marcações de consultas; <strong>Google Maps</strong> mostra o mapa com a localização do escritório. Estes serviços tratam os dados apenas para prestar o respetivo serviço.',
        ],
      },
      {
        title: 'Durante quanto tempo os guardamos',
        paragraphs: [
          'Durante o tempo necessário para responder ao seu pedido e, se vier a ser nosso cliente, pelo período exigido pelas obrigações legais e deontológicas da profissão.',
        ],
      },
      {
        title: 'Os seus direitos',
        paragraphs: [
          'Pode, a qualquer momento, pedir o acesso, a retificação ou o apagamento dos seus dados, opor-se ao seu tratamento, pedir a sua portabilidade ou retirar o consentimento, escrevendo para {email}. Tem também o direito de apresentar queixa à Comissão Nacional de Proteção de Dados (<a href="https://www.cnpd.pt" target="_blank" rel="noopener">www.cnpd.pt</a>).',
        ],
      },
    ],
  },
};

export type Dictionary = typeof pt;
