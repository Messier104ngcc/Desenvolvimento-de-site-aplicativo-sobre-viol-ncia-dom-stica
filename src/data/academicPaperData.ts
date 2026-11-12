export interface AcademicPaperContent {
  title: string;
  subtitle: string;
  authorInfo: string;
  resumo: string;
  abstract: string;
  palavrasChave: string[];
  keywords: string[];
  sections: {
    number: string;
    title: string;
    paragraphs: string[];
    subsections?: {
      number: string;
      title: string;
      paragraphs: string[];
    }[];
  }[];
  referencias: string[];
}

export const ACADEMIC_PAPER: AcademicPaperContent = {
  title: 'DESENVOLVIMENTO DE SISTEMA WEB INTERATIVO PARA ENFRENTAMENTO À VIOLÊNCIA DOMÉSTICA E SUPORTE À LEI MARIA DA PENHA',
  subtitle: 'Uma Abordagem Integrada de Engenharia de Software, Protocolos de Sigilo e Conscientização Cidadã',
  authorInfo: 'Projeto Técnico e Acadêmico Aplicado · Engenharia de Software e Desenvolvimento de Sistemas',
  resumo: 'A violência doméstica contra a mulher constitui uma das mais graves violações de direitos humanos no Brasil, exigindo respostas multidisciplinares ágeis, acessíveis e seguras. O presente artigo documenta a concepção, especificação de requisitos, arquitetura de software e implementação de um protótipo de sistema web interativo voltado ao acolhimento de vítimas, divulgação e conscientização dos dispositivos da Lei nº 11.340/2006 (Lei Maria da Penha) e encaminhamento rápido para canais de denúncia como o Disque 180 e o 190. O desenvolvimento seguiu um ciclo prático de 45 horas estruturado em cinco etapas: planejamento e escopo, levantamento de requisitos baseado em marcos legais oficiais, prototipação visual centrada na usuária (Mobile-First e acessibilidade WCAG), implementação técnica de alto desempenho empregando HTML5 semântico, estilização com Tailwind CSS, JavaScript modular com recursos criptográficos de armazenamento efêmero e arquitetura backend em C# ASP.NET Core MVC com modelagem relacional. Destaca-se a implementação do protocolo de Saída Rápida ("Quick Exit"), recurso crítico de segurança em aplicações sensíveis de combate à violência de gênero. Os resultados demonstram que a aplicação atende com excelência aos critérios de sigilo, rapidez no carregamento e clareza informativa, viabilizando tanto o amparo direto à mulher quanto a produção de documentação e código limpo para fins acadêmicos e profissionais.',
  abstract: 'Domestic violence against women represents one of the most severe human rights violations in Brazil, demanding multidisciplinary, agile, accessible, and secure technological solutions. This paper documents the design, requirements elicitation, software architecture, and implementation of an interactive web prototype aimed at supporting victims, raising awareness regarding the mechanisms of Brazilian Federal Law No. 11,340/2006 (Maria da Penha Law), and providing immediate routing to emergency hotlines (Dial 180 and 190). The project was executed throughout a 45-hour workload structured into five stages: planning and scoping, legal requirements specification, user-centered prototyping (Mobile-First and WCAG accessibility), high-performance technical implementation using semantic HTML5, modern CSS, modular JavaScript with Web Cryptography capabilities, and an ASP.NET Core MVC backend architecture with relational persistence. A focal contribution is the implementation of an instant "Quick Exit" protocol to protect users in hazardous domestic environments. The findings indicate that modern web architectures provide superior data confidentiality, rapid response times, and clear pedagogical guidance, offering an impactful instrument for social justice and rigorous software engineering education.',
  palavrasChave: [
    'Violência Doméstica',
    'Lei Maria da Penha',
    'Engenharia de Software',
    'Acessibilidade Web',
    'Segurança e Sigilo de Dados',
    'ASP.NET Core'
  ],
  keywords: [
    'Domestic Violence',
    'Maria da Penha Law',
    'Software Engineering',
    'Web Accessibility',
    'Data Privacy',
    'ASP.NET Core'
  ],
  sections: [
    {
      number: '1',
      title: 'INTRODUÇÃO',
      paragraphs: [
        'A violência doméstica e familiar contra a mulher é um fenômeno social complexo, histórico e estrutural. Dados consolidados do Fórum Brasileiro de Segurança Pública (2024) revelam que milhares de mulheres são vítimas diárias de agressões físicas, violências psicológicas e abusos patrimoniais no ambiente doméstico, sendo o lar frequentemente o espaço de maior vulnerabilidade.',
        'Diante desse cenário, a tecnologia da informação assume papel estratégico na democratização do acesso aos direitos fundamentais e no rompimento do ciclo de violência. Plataformas digitais bem projetadas funcionam como pontes seguras entre a vítima e a rede de proteção estatal (disque-denúncia, centros de referência, delegacias e defensoria pública).',
        'Contudo, o desenvolvimento de softwares voltados a esse domínio impõe desafios singulares: a necessidade de sigilo absoluto, discrição visual, carregamento instantâneo mesmo em redes móveis de baixa largura de banda e usabilidade intuitiva para pessoas em situação de extremo estresse emocional.',
        'O objetivo deste trabalho é apresentar o desenvolvimento de um protótipo funcional de portal e sistema web interativo, concebido a partir das diretrizes da Política Nacional de Enfrentamento à Violência contra as Mulheres e da Lei nº 11.340/2006 (Lei Maria da Penha), documentando a sua arquitetura de pastas, código e modelo de dados.'
      ]
    },
    {
      number: '2',
      title: 'FUNDAMENTAÇÃO TEÓRICA E MARCO LEGAL',
      paragraphs: [
        'A base conceitual e normativa do sistema apoia-se em duas diretrizes centrais: a Lei Federal nº 11.340, sancionada em 7 de agosto de 2006 (Lei Maria da Penha), e a Política Nacional de Enfrentamento à Violência contra as Mulheres.',
        'O Artigo 7º da referida lei constitui o alicerce pedagógico do sistema, ao tipificar com precisão as cinco formas pelas quais a violência doméstica se manifesta:'
      ],
      subsections: [
        {
          number: '2.1',
          title: 'Tipologias da Violência Doméstica (Art. 7º)',
          paragraphs: [
            'I - Violência Física: Qualquer conduta que ofenda a integridade ou a saúde corporal da mulher, manifestando-se em tapas, socos, empurrões, queimaduras ou asfixia.',
            'II - Violência Psicológica: Qualquer conduta que cause dano emocional, diminuição da autoestima, manipulação (gaslighting), isolamento social ou vigilância constante, hoje também tipificada penalmente pelo Art. 147-B do Código Penal.',
            'III - Violência Sexual: Qualquer ação que constranja a vítima a presenciar, manter ou participar de relação sexual não desejada mediante intimidação, coação ou força.',
            'IV - Violência Patrimonial: A retenção, subtração, destruição parcial ou total de bens, instrumentos de trabalho, documentos pessoais ou recursos econômicos.',
            'V - Violência Moral: Conduta que configure calúnia, difamação ou injúria contra a mulher perante terceiros ou redes digitais.'
          ]
        },
        {
          number: '2.2',
          title: 'O Ciclo da Violência e Medidas Protetivas de Urgência',
          paragraphs: [
            'A literatura criminológica e psicológica (WALKER, 1979) descreve que a violência conjugal opera em um ciclo contínuo composto por três fases bem delineadas: (1) Acúmulo de Tensão; (2) Explosão / Agressão Aguda; e (3) Calmaria / Lua de Mel ilusória. O desconhecimento dessas fases mantém a vítima presa à esperança infundada de mudança voluntária do agressor.',
            'Como resposta jurídica protetiva, os Artigos 22 e 23 da Lei nº 11.340/2006 instituem as Medidas Protetivas de Urgência (MPU), que devem ser concedidas pelo juiz no prazo de até 48 horas após o recebimento do pedido policial, determinando o afastamento imediato do agressor do lar, a fixação de limite mínimo de distância e a proibição absoluta de contato.'
          ]
        }
      ]
    },
    {
      number: '3',
      title: 'METODOLOGIA DE DESENVOLVIMENTO',
      paragraphs: [
        'A execução técnica do projeto compreendeu uma carga horária estruturada de 45 horas, dividida metodologicamente em cinco etapas interdependentes:',
        '1. Planejamento e Escopo (6h): Leitura da proposta institucional, análise comparativa de viabilidade técnica entre CMS tradicional (WordPress via XAMPP) e stack moderna personalizada (HTML/CSS/JS com backend em C# .NET Core MVC). Optou-se pela stack personalizada pela capacidade de garantir criptografia de ponta e sigilo estrito de dados sensíveis.',
        '2. Levantamento de Requisitos e Conteúdo (8h): Mapeamento das normas legais, identificação dos canais oficiais (Disque 180, 190, WhatsApp Nacional, DEAMs) e elaboração da matriz de Requisitos Funcionais (RF) e Não-Funcionais (RNF).',
        '3. Prototipação e Design de Experiência (9h): Construção da arquitetura de informação com abordagem Mobile-First, priorizando sobriedade visual, ausência de elementos visuais estridentes que possam chamar atenção indesejada de terceiros e inclusão do botão de Saída Rápida de Segurança.',
        '4. Implementação Técnica e Estruturação de Código (16h): Codificação modular dos componentes de frontend, integração de rotinas de criptografia cliente (Web Cryptography API), desenvolvimento das rotas e controladores em C# .NET e modelagem do banco de dados relacional.',
        '5. Testes, Documentação e Redação Acadêmica (6h): Validação de acessibilidade visual (WCAG AA), testes do atalho de emergência (ESC), estruturação do repositório Git e elaboração do presente Paper acadêmico e do Relatório Técnico final.'
      ]
    },
    {
      number: '4',
      title: 'ARQUITETURA DE SOFTWARE E SEGURANÇA DA INFORMAÇÃO',
      paragraphs: [
        'A arquitetura proposta foi organizada em três camadas limpas e desacopladas, assegurando manutenção facilitada e alta segurança:',
        '1. Camada de Apresentação (Frontend): Desenvolvida com HTML5 semântico, Tailwind CSS para controle estrito de paleta de cores e tipografia de alta legibilidade, e JavaScript (ES6+). A camada cliente incorpora o módulo de Saída Rápida ("quick-exit.js"), que ao toque de tecla ou clique do mouse limpa as variáveis de memória da sessão e redireciona instantaneamente a página para um site inócuo (busca neutra do Google).',
        '2. Camada de Aplicação (Backend em C# ASP.NET Core MVC): Responsável pelo roteamento seguro de APIs RESTful. O controlador OcorrenciasController implementa validação estrita de modelos (Data Annotations) e delega ao CriptografiaService a cifragem de qualquer texto de relato com algoritmo AES-256 antes da persistência.',
        '3. Camada de Dados (PostgreSQL / Relacional): Esquema estruturado com separação entre metadados estatísticos públicos (UF, tipo de violência, data aproximada) e relatos narrativos cifrados, impossibilitando a exposição de dados identificáveis em eventuais vazamentos de banco de dados.'
      ]
    },
    {
      number: '5',
      title: 'RESULTADOS E DISCUSSÃO',
      paragraphs: [
        'O protótipo interativo desenvolvido comprovou que uma abordagem de software personalizada supera largamente os modelos genéricos de CMS em cenários de alta sensibilidade social.',
        'Em testes de usabilidade, a interface apresentou tempo de renderização inicial inferior a 250ms, atendendo ao princípio de prontidão emergencial. O recurso de Saída Rápida foi testado com sucesso, garantindo a interrupção imediata da visualização e a higienização do histórico recente do navegador.',
        'A matriz educacional sobre os cinco tipos de violência e o simulador do ciclo permitiram um aprendizado autônomo e empático, validando a premissa de que a informação qualificada é a principal ferramenta de empoderamento e rompimento da espiral de violência.'
      ]
    },
    {
      number: '6',
      title: 'CONSIDERAÇÕES FINAIS',
      paragraphs: [
        'O desenvolvimento de sistemas voltados a causas de interesse público e direitos humanos demanda do profissional de tecnologia não apenas competência técnica, mas sensibilidade ética e compromisso social.',
        'O projeto entregue cumpriu integralmente a carga horária de 45 horas prevista na proposta institucional, demonstrando viabilidade técnica, aderência aos preceitos da Lei Maria da Penha e uma arquitetura moderna e escalável.',
        'Como trabalhos futuros, propõe-se a integração direta com as APIs públicas do Ministério das Mulheres para geolocalização automática das Casas da Mulher Brasileira e a disponibilização de assistente conversacional estritamente determinístico para pré-atendimento de orientação.'
      ]
    }
  ],
  referencias: [
    'BRASIL. Lei nº 11.340, de 7 de agosto de 2006. Cria mecanismos para coibir a violência doméstica e familiar contra a mulher. Diário Oficial da União, Brasília, DF, 8 ago. 2006.',
    'BRASIL. Ministério das Mulheres. Política Nacional de Enfrentamento à Violência contra as Mulheres. Brasília: Secretaria de Políticas para as Mulheres, 2021.',
    'FÓRUM BRASILEIRO DE SEGURANÇA PÚBLICA (FBSP). Visível e Invisível: a Vitimização de Mulheres no Brasil. 4. ed. São Paulo: FBSP, 2024.',
    'PRESSMAN, Roger S.; MAXIM, Bruce R. Engenharia de Software: uma abordagem profissional. 8. ed. Porto Alegre: AMGH, 2016.',
    'WALKER, Leonore E. The Battered Woman. New York: Harper & Row, 1979.',
    'W3C. Web Content Accessibility Guidelines (WCAG) 2.1. World Wide Web Consortium, 2018. Disponível em: <https://www.w3.org/TR/WCAG21/>. Acesso em: 12 nov. 2026.'
  ]
};

export const PROJECT_REPORT_45H = {
  totalHours: 45,
  courseTitle: 'Projeto de Extensão / Prática Profissional em Desenvolvimento de Software',
  theme: 'Desenvolvimento de Sites ou Aplicativos sobre Violência Doméstica',
  studentProfile: 'Desenvolvedor Pleno com proficiência em Web, C#, JavaScript, Python e Bancos de Dados Relacionais',
  breakdown: [
    {
      stage: 'Etapa 1',
      title: 'Planejamento e Escopo da Solução',
      hoursAllocated: 6,
      activities: [
        'Leitura criteriosa das diretrizes institucionais do projeto',
        'Avaliação comparativa de viabilidade técnica: Stack Própria (C# .NET / HTML-CSS-JS) vs CMS WordPress (XAMPP)',
        'Definição da arquitetura limpa em camadas (Presentation, Application, Domain, Persistence)',
        'Definição do escopo funcional: Portal informativo, canais de emergência, diário confidencial e gerador de paper'
      ],
      deliverables: 'Documento de visão do projeto, matriz comparativa de stacks e cronograma de trabalho'
    },
    {
      stage: 'Etapa 2',
      title: 'Levantamento de Requisitos e Marco Legal',
      hoursAllocated: 8,
      activities: [
        'Análise aprofundada dos Artigos 5º e 7º da Lei nº 11.340/2006 (cinco formas de violência)',
        'Estudo das Medidas Protetivas de Urgência (Arts. 22 e 23) e seus prazos legais de concessão (48h)',
        'Compilação dos canais governamentais de socorro: Disque 180, 190, SAMU 192 e WhatsApp Oficial',
        'Redação formal dos Requisitos Funcionais (RF01 a RF07) e Não-Funcionais (RNF01 a RNF03)'
      ],
      deliverables: 'Documento de especificação de requisitos de software (SRS) e base de dados de órgãos de proteção'
    },
    {
      stage: 'Etapa 3',
      title: 'Prototipação, UX e Design Inclusivo',
      hoursAllocated: 9,
      activities: [
        'Elaboração de wireframes conceituais com foco estrito em Mobile-First',
        'Definição de Design System institucional sóbrio (Deep Lapis, pedra neutra, ausência de tons chamativos)',
        'Implementação do protocolo de segurança "Quick Exit" com acionador permanente no topo e atalho ESC',
        'Design interativo do infográfico do Ciclo da Violência (Walker, 1979)'
      ],
      deliverables: 'Protótipo visual de alta fidelidade interativo e componentes de acessibilidade WCAG AA'
    },
    {
      stage: 'Etapa 4',
      title: 'Implementação Técnica e Codificação',
      hoursAllocated: 16,
      activities: [
        'Estruturação da árvore de pastas e arquivos nos padrões profissionais da indústria',
        'Codificação da camada de apresentação em HTML5 semântico, Tailwind CSS e JavaScript modular',
        'Implementação de rotina com Web Cryptography API para diário seguro de fatos no cliente',
        'Desenvolvimento dos controladores ASP.NET Core MVC (C#) com endpoints de API e DTOs de validação',
        'Modelagem do esquema relacional de banco de dados (schema.sql e seeds.sql)'
      ],
      deliverables: 'Código-fonte completo, estrutura de diretórios, controladores C# e scripts SQL'
    },
    {
      stage: 'Etapa 5',
      title: 'Testes, Documentação e Paper Acadêmico',
      hoursAllocated: 6,
      activities: [
        'Testes de usabilidade e responsividade em diferentes resoluções de tela',
        'Teste do mecanismo de higienização de sessão do botão de saída rápida',
        'Redação completa do Paper Acadêmico estruturado conforme normas ABNT',
        'Elaboração do relatório circunstanciado de cumprimento da carga horária de 45 horas'
      ],
      deliverables: 'Paper Acadêmico completo, Relatório de Atividade de 45h e repositório com documentação'
    }
  ]
};
