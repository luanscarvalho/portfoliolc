export const biography = 'Com 24 anos, é parte da nova geração de líderes que desafiam o óbvio. Há 5 anos constrói uma trajetória que conecta o universo acadêmico e empreendedorismo, com atuação prática em pesquisa, negócios de impacto e no ecossistema de inovação.';
export const purpose = 'Integrar ciência, inovação, empreendedorismo e impacto, para transformar conhecimento e oportunidades em soluções alinhadas à sustentabilidade social, ambiental e econômica.';
export const statement = 'Em minhas falas, busco traduzir temas complexos em experiências possíveis, que provocam ação, não apenas inspiração.';
export const journey = [
  'Iniciou na rede Enactus, focado em desenvolver Negócios de Impacto, atuou com marketing, como diretor de projetos, coordenação de equipe de mentores em edições do “Enacthon” (Hackathon nacional), alumni mentor, staff do ENEB e jurado na premiação nacional da Enactus Brasil.',
  'Graduando de Ciências Biológicas, atuou em linhas de pesquisas na área de biotecnologia, desenvolvendo projetos de inovação e extensão na área.',
  'Atua no ecossistema de inovação e startups a mais de 4 anos, foi voluntário do Sururu Valley e é presente em reuniões e eventos promovidos pelos atores locais.',
  'Sócio e cofundador da Rede Pulsar, Negócio de Impacto que promove orientação para jovens com uma metodologia inovadora, elaborou palestras e oficinas, alcançou o Startup NE (Sebrae e Fapeal, acelerada pela Neo e MOA Ventures), impulsionado pelo programa Mentoring Team da SECTI - AL e incubado pela UFAL em parceria com IEL e Sebrae.',
];
export const themes = [
  { name: 'OFICINAS', items: ['Pitch', 'Ideação', 'ODS', 'Inteligência Artificial (LLM)', 'Canvas Modelo C (Impacto)', 'Planejamento de carreira para jovens', 'Educação ambiental e científica'] },
  { name: 'PALESTRAS', items: ['Empreendedorismo científico', 'Negócios de Impacto e Startups', 'Carreira em Inovação + Ciência', 'Habilidades para jovens'] },
  { name: 'MENTORIAS', items: ['Pitch', 'Ideação', 'MVP', 'Inovação', 'Impacto'] },
];
export const feedbacks = [
  'aprendizado e pratica juntos',
  'Gostei da explicação e da dinâmica que foi proposta.',
  'Queremos agradecer ao luan pela recepção e condução, você foi essencial para o desenvolvimento da nossa ideia',
  'Foi bastante interativo e os temas abordados bem atuais',
  'Aconteceu muita troca e idealização de projetos sustentáveis para uma economia e futuro promissos, sempre com responsabilidade socioambiental',
  'Gostei muito da apresentação, dos conhecimentos trocados e da dinâmica',
  'Uma apresentação muito interessante e que ampliou minha visão sobre os meus próximos passos na minha carreira',
];
export const awards = [
  { title: '1º Lugar “Ideathon Maceió”', organization: 'Sebrae e MVPlay', year: '2023', image: 'ideathon' },
  { title: 'Vencedor Etapa Estadual “Liga Jovem”', organization: 'Sebrae e Ideias de Futuro', year: '2024', image: 'liga-jovem' },
  { title: 'Top 5 - Jovens Talentos', organization: 'Enactus Brasil', year: '2022', image: 'jovens-talentos' },
  { title: 'Finalista “Desafio Inovação”', organization: 'Liinc e DProteção', year: '2024', image: 'desafio-inovacao' },
  { title: 'Vencedor “Tudo Começa com uma Ideia”', organization: 'Trakto Show e CJE', year: '2024', image: 'trakto' },
  { title: 'Vencedor Nacional do Hackathon Alimentação em Foco', organization: 'Fundação Cargill e Enactus Brasil', year: '2025', image: 'cargill' },
  { title: 'Vencedor Nacional do Prêmio Geração 360°', organization: 'Orizon Social e Enactus Brasil', year: '2025', image: 'orizon' },
  { title: '1º lugar Desafio Logistica Reversa', organization: 'Circuito Alagoano de Inovação', year: '2026', image: 'logistica' },
] as const;

export const recognitionTexts: Record<string, string[]> = {
  ideathon: [
    'Alunos da Ufal vencem competição com proposta para revitalização do Centro',
    'Manuela Soares - jornalista • 25/04/2023 11h11 - Atualizado em 02/05/2024 15h08',
    'Quando os alunos da Universidade Federal de Alagoas unem forças, é certeza de sucesso! Uma equipe formada 100% por alunos da Ufal venceu o Ideathon 2023, um evento realizado pelo Sebrae em parceria com a MVPlay e empreendedores de diferentes estados.',
    'A competição em Alagoas reuniu estudantes de várias instituições de ensino superior durante três dias deste mês de abril e propôs um desafio: criar soluções inovadoras para o problema de esvaziamento urbano do Centro de Maceió.',
    'Apenas dez grupos chegaram à etapa final e a equipe Bumba – a cidade é sua conquistou o primeiro lugar. Com reforços multidisciplinares, a Bumba é formada pelas alunas de Arquitetura e Urbanismo Eduarda Lima e Esther Fireman, os estudantes de Ciência da Computação Irene Fireman e Jackson Barbosa, e o graduando de Ciências Biológicas Luan Carvalho.',
    'A proposta vencedora que une gamificação, memória e valorização do patrimônio',
  ],
  'jovens-talentos': [
    'Confira o depoimento do Luan Carvalho (UFAL - Maceió/AL) sobre o programa:',
    '“Ter participado do programa foi muito importante para o meu aprendizado sobre liderança, planejamento pessoal e profissional. Com isso, durante as minhas atividades enquanto diretor de projetos do time, pude colocar em prática para as minhas membros alguns métodos que foram passados e nesse processo entender como funcionava a minha interação com a equipe - sendo líder pela primeira vez. Além disso, passei a ver a minha carreira de uma forma mais planejada, traçando atividades, metas e objetivos para alcançar melhor os resultados que eu desejo. Por fim, a aplicação das ferramentas e os direcionamentos proporcionados foram essenciais para uma visão mais ampla e estratégica sobre gestão pessoal, profissional e de uma equipe. Deixo aqui meu agradecimento, acho muito importante a Enactus Brasil se preocupar com o desenvolvimento dos integrantes da rede, pois é um ganho para todos!”',
  ],
};

export function portfolioHead(title: string, description: string) {
  return { meta: [
    { title }, { name: 'description', content: description },
    { property: 'og:title', content: title }, { property: 'og:description', content: description },
    { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' },
  ] };
}