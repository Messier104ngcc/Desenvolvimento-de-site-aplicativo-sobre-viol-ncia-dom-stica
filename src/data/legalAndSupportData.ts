import { ViolenceType, SupportChannel, ProtectiveMeasure } from '../types';

export const VIOLENCE_TYPES: ViolenceType[] = [
  {
    id: 'fisica',
    name: 'Violência Física',
    article: 'Art. 7º, I da Lei 11.340/2006',
    iconName: 'ShieldAlert',
    summary: 'Qualquer conduta que ofenda a integridade ou a saúde corporal da mulher.',
    description: 'Manifesta-se através de agressões físicas diretas ou indiretas com emprego da força corporal ou de objetos cortantes, contundentes ou substâncias.',
    warningSigns: [
      'Empurrões, sacudidas, tapas, socos e chutes',
      'Puxões de cabelo, mordidas e beliscões',
      'Arremesso de objetos em direção à vítima',
      'Apertar o pescoço (estrangulamento/sufocamento)',
      'Queimaduras, cortes ou lesões corporais intencionais',
      'Impedimento de buscar auxílio médico ou farmacêutico'
    ],
    legalText: 'Entendida como qualquer conduta que ofenda sua integridade ou saúde corporal.',
    actionGuidance: 'Em situação iminente ou em curso, ligue 190 imediatamente. Se a agressão já ocorreu, procure uma UPA/Hospital para atendimento e preservação de prontuário, e registre o Boletim de Ocorrência na DEAM para realização do Exame de Corpo de Delito.'
  },
  {
    id: 'psicologica',
    name: 'Violência Psicológica',
    article: 'Art. 7º, II da Lei 11.340/2006 (e Art. 147-B do Código Penal)',
    iconName: 'Brain',
    summary: 'Conduta que cause dano emocional, diminuição da autoestima ou controle de comportamentos.',
    description: 'Muitas vezes silenciosa e gradual, corrói a saúde mental da vítima através de manipulação, humilhações públicas ou privadas, gaslighting e isolamento social.',
    warningSigns: [
      'Ameaças explícitas ou veladas contra a vítima ou seus filhos',
      'Humilhações, ofensas verbais reiteradas e ridicularizações',
      'Manipulação psicológica (fazer a vítima duvidar da própria sanidade mental)',
      'Isolamento forçado de familiares, amigos e trabalho',
      'Vigilância excessiva de mensagens, redes sociais e deslocamentos',
      'Proibição de estudar, trabalhar ou exercer a própria fé'
    ],
    legalText: 'Qualquer conduta que lhe cause dano emocional e diminuição da autoestima ou que lhe prejudique e perturbe o pleno desenvolvimento ou que vise a degradar ou a controlar suas ações, comportamentos, crenças e decisões.',
    actionGuidance: 'A violência psicológica é crime autônomo (Lei 14.188/2021). Guarde mensagens de texto, áudios e e-mails como provas documentais. O Disque 180 orienta e encaminha para serviços municipais de apoio psicológico e jurídico gratuito.'
  },
  {
    id: 'sexual',
    name: 'Violência Sexual',
    article: 'Art. 7º, III da Lei 11.340/2006',
    iconName: 'HeartCrack',
    summary: 'Conduta que constranja a presenciar, a manter ou a participar de relação sexual não desejada.',
    description: 'Não se restringe ao ato consumado por desconhecidos; ocorre frequentemente dentro do casamento, noivado ou namoro quando não há consentimento livre e espontâneo.',
    warningSigns: [
      'Obrigar a manter relações sexuais quando a mulher não deseja',
      'Forçar práticas sexuais que causem dor ou desconforto não consentido',
      'Impedir o uso de métodos contraceptivos (preservativo, pílula)',
      'Forçar a gravidez ou forçar o abortamento',
      'Comercializar ou coagir a mulher a anuir com a utilização de sua sexualidade',
      'Exigir que assista pornografia ou práticas contra a sua vontade'
    ],
    legalText: 'Entendida como qualquer conduta que a constranja a presenciar, a manter ou a participar de relação sexual não desejada, mediante intimidação, ameaça, coação ou uso da força.',
    actionGuidance: 'A mulher tem direito a atendimento médico de emergência prioritário pelo SUS (profilaxia para ISTs/HIV e anticoncepção de emergência em até 72h). Não tome banho e guarde as roupas usadas para perícia criminal.'
  },
  {
    id: 'patrimonial',
    name: 'Violência Patrimonial',
    article: 'Art. 7º, IV da Lei 11.340/2006',
    iconName: 'Coins',
    summary: 'Retenção, subtração ou destruição de bens, instrumentos de trabalho e recursos econômicos.',
    description: 'Visa subjugar a mulher economicamente, retirando dela a autonomia financeira para que permaneça dependente e incapacitada de deixar o relacionamento abusivo.',
    warningSigns: [
      'Reter cartões bancários, salários, aposentadoria ou documentos pessoais',
      'Destruir objetos pessoais, fotos, celulares, roupas ou ferramentas de trabalho',
      'Contrair dívidas deliberadas no nome da mulher sem a sua autorização',
      'Controlar todo o dinheiro familiar e exigir prestação de contas minuciosa',
      'Ocultar patrimônio conjugal para fraudar partilha de bens',
      'Recusar-se a pagar pensão alimentícia fixada judicialmente'
    ],
    legalText: 'Entendida como qualquer conduta que configure retenção, subtração, destruição parcial ou total de seus objetos, instrumentos de trabalho, documentos pessoais, bens, valores e direitos ou recursos econômicos.',
    actionGuidance: 'Fotografe comprovantes, extratos e danos patrimoniais. As Medidas Protetivas de Urgência da Lei Maria da Penha podem determinar o bloqueio de contas e a restituição imediata de bens indevidamente subtraídos.'
  },
  {
    id: 'moral',
    name: 'Violência Moral',
    article: 'Art. 7º, V da Lei 11.340/2006',
    iconName: 'MessageSquareX',
    summary: 'Conduta que configure calúnia, difamação ou injúria contra a mulher.',
    description: 'Ataques direcionados à honra, dignidade, reputação moral e imagem perante a comunidade, parentes, vizinhos e redes sociais.',
    warningSigns: [
      'Calúnia: afirmar falsamente que a mulher praticou um crime',
      'Difamação: espalhar fatos ofensivos à sua reputação para terceiros ou online',
      'Injúria: proferir xingamentos e palavras que atinjam sua dignidade ou decoro',
      'Vazamento não consentido de fotos íntimas ou chantagem (revenge porn)',
      'Desqualificar publicamente a mulher como mãe, profissional ou esposa'
    ],
    legalText: 'Entendida como qualquer conduta que configure calúnia, difamação ou injúria.',
    actionGuidance: 'Faça capturas de tela (prints) completas com data, hora e número do remetente. Pode ser solicitada a ata notarial em cartório para preservação de provas digitais antes de registrar a queixa-crime.'
  }
];

export const CYCLE_STAGES = [
  {
    phase: 1,
    title: 'Fase 1: Acúmulo de Tensão',
    subtitle: 'Irritabilidade crescente e pequenos atritos',
    color: 'border-amber-400 bg-amber-50/50',
    description: 'O agressor demonstra irritabilidade por motivos banais, crises de ciúmes, acessos de raiva, destruição de objetos e ameaças veladas. A mulher tenta acalmar o ambiente, assume a culpa e sente constante medo de contrariá-lo.',
    victimFeelings: 'Sensação de "pisar em ovos", ansiedade generalizada, hipervigilância e tentativa desesperada de evitar um conflito.'
  },
  {
    phase: 2,
    title: 'Fase 2: Explosão da Violência',
    subtitle: 'O ato agudo de agressão',
    color: 'border-rose-500 bg-rose-50/50',
    description: 'A tensão acumulada atinge o ápice e se descarrega em agressões verbais graves, destruição de pertences, espancamento, coação psicológica extrema ou abuso sexual. O agressor perde o autocontrole e comete o ato violento.',
    victimFeelings: 'Pânico, paralisia, choque, desamparo físico e psicológico, dor e risco iminente de morte.'
  },
  {
    phase: 3,
    title: 'Fase 3: Aparente Calmaria (Lua de Mel)',
    subtitle: 'Arrependimento ilusório e promessas de mudança',
    color: 'border-emerald-500 bg-emerald-50/50',
    description: 'O agressor demonstra arrependimento efusivo, chora, pede perdão de joelhos, faz juras de amor eterno e presentes, prometendo que nunca mais repetirá o ato. A vítima acredita na mudança genuína e retira denúncias ou desiste da separação.',
    victimFeelings: 'Alívio temporário, esperança restaurada, culpa dividida e sensação de que o relacionamento voltou ao início apaixonado.'
  }
];

export const SUPPORT_CHANNELS: SupportChannel[] = [
  {
    id: 'disque-180',
    name: 'Central de Atendimento à Mulher - Disque 180',
    category: 'Nacional',
    phone: '180',
    hours: '24 horas por dia, 7 dias por semana (inclusive feriados)',
    description: 'Serviço público gratuito, anônimo e confidencial do Governo Federal. Registra denúncias, fornece orientações legais e psicológicas e encaminha para serviços da rede especializada.',
    actionUrl: 'tel:180',
    isEmergency: false
  },
  {
    id: 'pm-190',
    name: 'Polícia Militar - 190',
    category: 'Seguranca',
    phone: '190',
    hours: '24 horas por dia (Emergência imediata)',
    description: 'Para situações de flagrante delito, agressão em andamento ou risco iminente à integridade física. Aciona viaturas policiais para intervenção imediata no local.',
    actionUrl: 'tel:190',
    isEmergency: true
  },
  {
    id: 'whatsapp-mulher',
    name: 'WhatsApp Oficial Disque 180',
    category: 'Nacional',
    phone: '(61) 9610-0180',
    hours: '24 horas com atendimento humano e IA acolhedora',
    description: 'Canal oficial do Ministério das Mulheres no WhatsApp. Permite denúncia silenciosa através de mensagens de texto, envio de fotos e localização sem necessidade de falar em voz alta.',
    actionUrl: 'https://wa.me/556196100180',
    isEmergency: false
  },
  {
    id: 'samu-192',
    name: 'SAMU - Serviço de Atendimento Móvel de Urgência',
    category: 'Seguranca',
    phone: '192',
    hours: '24 horas para socorro médico',
    description: 'Acione em casos de ferimentos graves, cortes, traumatismos, intoxicações ou risco de vida após episódio violento.',
    actionUrl: 'tel:192',
    isEmergency: true
  },
  {
    id: 'defensoria-nudem',
    name: 'Defensoria Pública - Núcleo Especializado (NUDEM)',
    category: 'Juridico',
    phone: '129 (ou unidade estadual)',
    hours: 'Dias úteis (atendimento judiciário gratuito)',
    description: 'Assistência jurídica integral e gratuita para mulheres que não têm condições financeiras de contratar advogados. Peticiona medidas protetivas, divórcio, guarda e alimentos.',
    isEmergency: false
  },
  {
    id: 'deam-brasil',
    name: 'Delegacias Especializadas de Atendimento à Mulher (DEAM)',
    category: 'Seguranca',
    phone: 'Consulte unidade local',
    hours: 'Plantões 24h nas capitais e grandes municípios',
    description: 'Unidades da Polícia Civil especializadas no atendimento humanizado a mulheres vítimas de violência de gênero, registro de B.O. e requisição de medidas protetivas perante o Judiciário.',
    isEmergency: false
  }
];

export const PROTECTIVE_MEASURES: ProtectiveMeasure[] = [
  {
    id: 'mp-1',
    title: 'Afastamento Imediato do Lar ou Domicílio',
    article: 'Art. 22, II da Lei 11.340/2006',
    target: 'Agressor',
    deadlineHours: 48,
    description: 'Obriga o agressor a sair imediatamente do lar comum, impedindo que permaneça na mesma residência da ofendida e de seus dependentes.',
    practicalExample: 'A polícia acompanha o agressor para que ele retire apenas seus pertences pessoais básicos e entregue as chaves do imóvel.'
  },
  {
    id: 'mp-2',
    title: 'Proibição de Contato e Aproximação',
    article: 'Art. 22, III da Lei 11.340/2006',
    target: 'Agressor',
    deadlineHours: 48,
    description: 'Fixa limite mínimo de distância (ex: 300 metros) entre o agressor e a vítima, seus familiares e testemunhas, e veda qualquer contato telefônico, por mensagens ou redes sociais.',
    practicalExample: 'O agressor fica proibido de enviar WhatsApp, ligar de números anônimos ou aproximar-se da escola dos filhos ou do trabalho da vítima.'
  },
  {
    id: 'mp-3',
    title: 'Suspensão de Posse ou Restrição do Porte de Armas',
    article: 'Art. 22, I da Lei 11.340/2006',
    target: 'Agressor',
    deadlineHours: 48,
    description: 'Determina a apreensão imediata de qualquer arma de fogo registrada ou na posse do agressor, com notificação ao órgão competente (Polícia Federal ou Exército).',
    practicalExample: 'Mesmo agentes de segurança pública (policiais, seguranças) têm o porte suspenso cautelarmente fora do exercício estrito de serviço.'
  },
  {
    id: 'mp-4',
    title: 'Restituição de Bens Subtraídos Indevidamente',
    article: 'Art. 24, I da Lei 11.340/2006',
    target: 'Ofendida',
    deadlineHours: 48,
    description: 'Garante à mulher o reaver de seus documentos de identidade, carteiras de trabalho, cartões bancários, aparelhos celulares e instrumentos profissionais retidos pelo agressor.',
    practicalExample: 'Oficial de justiça acompanha a retirada de notebooks e ferramentas de trabalho retidos na empresa familiar.'
  },
  {
    id: 'mp-5',
    title: 'Alimentos Provisionais ou Provisórios',
    article: 'Art. 22, V da Lei 11.340/2006',
    target: 'Agressor',
    deadlineHours: 48,
    description: 'Fixação de valor financeiro emergencial que o agressor deve pagar de pronto para o sustento dos filhos e da vítima desamparada.',
    practicalExample: 'Determinação de desconto em folha de pagamento ou depósito mensal para garantia de alimentação e moradia digna.'
  }
];

export const BRAZILIAN_STATES = [
  { uf: 'AC', name: 'Acre', capital: 'Rio Branco', deamUrl: 'https://delegaciavirtual.sinesp.gov.br/' },
  { uf: 'AL', name: 'Alagoas', capital: 'Maceió', deamUrl: 'https://delegaciavirtual.sinesp.gov.br/' },
  { uf: 'AP', name: 'Amapá', capital: 'Macapá', deamUrl: 'https://delegaciavirtual.sinesp.gov.br/' },
  { uf: 'AM', name: 'Amazonas', capital: 'Manaus', deamUrl: 'https://delegaciavirtual.sinesp.gov.br/' },
  { uf: 'BA', name: 'Bahia', capital: 'Salvador', deamUrl: 'https://delegaciavirtual.sinesp.gov.br/' },
  { uf: 'CE', name: 'Ceará', capital: 'Fortaleza', deamUrl: 'https://delegaciavirtual.sinesp.gov.br/' },
  { uf: 'DF', name: 'Distrito Federal', capital: 'Brasília', deamUrl: 'https://delegaciavirtual.sinesp.gov.br/' },
  { uf: 'ES', name: 'Espírito Santo', capital: 'Vitória', deamUrl: 'https://delegaciavirtual.sinesp.gov.br/' },
  { uf: 'GO', name: 'Goiás', capital: 'Goiânia', deamUrl: 'https://delegaciavirtual.sinesp.gov.br/' },
  { uf: 'MA', name: 'Maranhão', capital: 'São Luís', deamUrl: 'https://delegaciavirtual.sinesp.gov.br/' },
  { uf: 'MT', name: 'Mato Grosso', capital: 'Cuiabá', deamUrl: 'https://delegaciavirtual.sinesp.gov.br/' },
  { uf: 'MS', name: 'Mato Grosso do Sul', capital: 'Campo Grande', deamUrl: 'https://delegaciavirtual.sinesp.gov.br/' },
  { uf: 'MG', name: 'Minas Gerais', capital: 'Belo Horizonte', deamUrl: 'https://delegaciavirtual.sinesp.gov.br/' },
  { uf: 'PA', name: 'Pará', capital: 'Belém', deamUrl: 'https://delegaciavirtual.sinesp.gov.br/' },
  { uf: 'PB', name: 'Paraíba', capital: 'João Pessoa', deamUrl: 'https://delegaciavirtual.sinesp.gov.br/' },
  { uf: 'PR', name: 'Paraná', capital: 'Curitiba', deamUrl: 'https://delegaciavirtual.sinesp.gov.br/' },
  { uf: 'PE', name: 'Pernambuco', capital: 'Recife', deamUrl: 'https://delegaciavirtual.sinesp.gov.br/' },
  { uf: 'PI', name: 'Piauí', capital: 'Teresina', deamUrl: 'https://delegaciavirtual.sinesp.gov.br/' },
  { uf: 'RJ', name: 'Rio de Janeiro', capital: 'Rio de Janeiro', deamUrl: 'https://delegaciavirtual.sinesp.gov.br/' },
  { uf: 'RN', name: 'Rio Grande do Norte', capital: 'Natal', deamUrl: 'https://delegaciavirtual.sinesp.gov.br/' },
  { uf: 'RS', name: 'Rio Grande do Sul', capital: 'Porto Alegre', deamUrl: 'https://delegaciavirtual.sinesp.gov.br/' },
  { uf: 'RO', name: 'Rondônia', capital: 'Porto Velho', deamUrl: 'https://delegaciavirtual.sinesp.gov.br/' },
  { uf: 'RR', name: 'Roraima', capital: 'Boa Vista', deamUrl: 'https://delegaciavirtual.sinesp.gov.br/' },
  { uf: 'SC', name: 'Santa Catarina', capital: 'Florianópolis', deamUrl: 'https://delegaciavirtual.sinesp.gov.br/' },
  { uf: 'SP', name: 'São Paulo', capital: 'São Paulo', deamUrl: 'https://delegaciavirtual.sinesp.gov.br/' },
  { uf: 'SE', name: 'Sergipe', capital: 'Aracaju', deamUrl: 'https://delegaciavirtual.sinesp.gov.br/' },
  { uf: 'TO', name: 'Tocantins', capital: 'Palmas', deamUrl: 'https://delegaciavirtual.sinesp.gov.br/' }
];
