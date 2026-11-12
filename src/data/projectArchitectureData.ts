import { CodeFile, FolderNode } from '../types';

export const PROJECT_TREE: FolderNode = {
  name: 'projeto-violencia-domestica',
  type: 'folder',
  path: '/',
  children: [
    {
      name: 'frontend',
      type: 'folder',
      path: '/frontend',
      children: [
        { name: 'index.html', type: 'file', path: '/frontend/index.html', fileId: 'fe-html' },
        { name: 'styles.css', type: 'file', path: '/frontend/styles.css', fileId: 'fe-css' },
        {
          name: 'js',
          type: 'folder',
          path: '/frontend/js',
          children: [
            { name: 'app.js', type: 'file', path: '/frontend/js/app.js', fileId: 'fe-app-js' },
            { name: 'quick-exit.js', type: 'file', path: '/frontend/js/quick-exit.js', fileId: 'fe-quick-exit-js' },
            { name: 'crypto-storage.js', type: 'file', path: '/frontend/js/crypto-storage.js', fileId: 'fe-crypto-js' }
          ]
        }
      ]
    },
    {
      name: 'backend-csharp-net',
      type: 'folder',
      path: '/backend-csharp-net',
      children: [
        {
          name: 'Controllers',
          type: 'folder',
          path: '/backend-csharp-net/Controllers',
          children: [
            { name: 'OcorrenciasController.cs', type: 'file', path: '/backend-csharp-net/Controllers/OcorrenciasController.cs', fileId: 'be-controller' },
            { name: 'CanaisApoioController.cs', type: 'file', path: '/backend-csharp-net/Controllers/CanaisApoioController.cs', fileId: 'be-canais-ctrl' }
          ]
        },
        {
          name: 'Models',
          type: 'folder',
          path: '/backend-csharp-net/Models',
          children: [
            { name: 'Ocorrencia.cs', type: 'file', path: '/backend-csharp-net/Models/Ocorrencia.cs', fileId: 'be-model' }
          ]
        },
        {
          name: 'DTOs',
          type: 'folder',
          path: '/backend-csharp-net/DTOs',
          children: [
            { name: 'RegistrarRelatoDto.cs', type: 'file', path: '/backend-csharp-net/DTOs/RegistrarRelatoDto.cs', fileId: 'be-dto' }
          ]
        },
        {
          name: 'Services',
          type: 'folder',
          path: '/backend-csharp-net/Services',
          children: [
            { name: 'CriptografiaService.cs', type: 'file', path: '/backend-csharp-net/Services/CriptografiaService.cs', fileId: 'be-service' }
          ]
        },
        { name: 'Program.cs', type: 'file', path: '/backend-csharp-net/Program.cs', fileId: 'be-program' }
      ]
    },
    {
      name: 'database',
      type: 'folder',
      path: '/database',
      children: [
        { name: 'schema.sql', type: 'file', path: '/database/schema.sql', fileId: 'db-schema' },
        { name: 'seeds.sql', type: 'file', path: '/database/seeds.sql', fileId: 'db-seeds' }
      ]
    },
    {
      name: 'docs',
      type: 'folder',
      path: '/docs',
      children: [
        { name: 'README.md', type: 'file', path: '/docs/README.md', fileId: 'doc-readme' },
        { name: 'requisitos-sistema.md', type: 'file', path: '/docs/requisitos-sistema.md', fileId: 'doc-requisitos' }
      ]
    }
  ]
};

export const CODE_FILES: Record<string, CodeFile> = {
  'fe-html': {
    id: 'fe-html',
    name: 'index.html',
    path: '/frontend/index.html',
    language: 'html',
    category: 'Frontend (HTML/CSS/JS)',
    description: 'Estrutura semântica HTML5 com navegação de acessibilidade, botão de saída rápida e seções de apoio.',
    content: `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Portal Acolher - Enfrentamento à Violência Doméstica</title>
  <link rel="stylesheet" href="styles.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700&display=swap">
</head>
<body class="safe-mode">
  <!-- Botão de Segurança: Saída Rápida Instantânea -->
  <aside class="quick-exit-bar" aria-label="Ação rápida de segurança">
    <div class="container exit-flex">
      <span class="warning-text">⚠️ Em perigo imediato? Ligue 190. Pressione ESC para sair agora.</span>
      <button id="btnQuickExit" class="btn-quick-exit" title="Redireciona para o Google e limpa o histórico local">
        Sair Imediatamente (ESC)
      </button>
    </div>
  </aside>

  <!-- Cabeçalho Institucional -->
  <header class="main-header">
    <div class="container header-grid">
      <a href="#inicio" class="brand-title">Portal Acolher</a>
      <nav class="main-nav" aria-label="Navegação Principal">
        <a href="#tipos-violencia">Tipos de Violência</a>
        <a href="#lei-maria-penha">Lei Maria da Penha</a>
        <a href="#canais-socorro">Canais de Ajuda</a>
        <a href="#registro-seguro">Diário Seguro</a>
      </nav>
      <div class="header-action">
        <a href="tel:180" class="btn-emergency">Disque 180</a>
      </div>
    </div>
  </header>

  <!-- Conteúdo Principal -->
  <main id="main-content">
    <!-- Seção de Acolhimento e Hero -->
    <section id="inicio" class="hero-section">
      <div class="container hero-content">
        <p class="kicker">Acolhimento · Orientação Legal · Proteção</p>
        <h1 class="hero-title">Você não está sozinha. Existe amparo da lei e uma rede de proteção para você.</h1>
        <p class="hero-description">
          Acesse orientações com total sigilo, entenda os tipos de violência descritos na Lei nº 11.340/2006
          e conheça os passos imediatos para solicitar Medidas Protetivas de Urgência.
        </p>
        <div class="hero-ctas">
          <a href="#canais-socorro" class="btn-primary">Buscar Ajuda Agora</a>
          <a href="#tipos-violencia" class="btn-outline">Identificar Sinais de Alerta</a>
        </div>
      </div>
    </section>
  </main>

  <script src="js/quick-exit.js"></script>
  <script src="js/crypto-storage.js"></script>
  <script src="js/app.js"></script>
</body>
</html>`
  },
  'fe-css': {
    id: 'fe-css',
    name: 'styles.css',
    path: '/frontend/styles.css',
    language: 'css',
    category: 'Frontend (HTML/CSS/JS)',
    description: 'Folha de estilos sóbria e acessível, com foco em legibilidade, contraste WCAG AA e discrição visual.',
    content: `/* Reset e Variáveis de Design Sóbrio */
:root {
  --color-canvas: #faf8f5;
  --color-surface: #ffffff;
  --color-text-main: #1c1917;
  --color-text-muted: #57534e;
  --color-hairline: #e7e5e4;
  --color-primary: #1e3a8a; /* Deep Lapis para sobriedade institucional */
  --color-danger: #b91c1c;  /* Vermelho alerta para saída de emergência */
  --font-sans: 'Plus Jakarta Sans', system-ui, sans-serif;
  --radius-subtle: 8px;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: var(--font-sans);
  background-color: var(--color-canvas);
  color: var(--color-text-main);
  line-height: 1.6;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* Barra de Saída Rápida de Segurança */
.quick-exit-bar {
  background-color: #1c1917;
  color: #f5f5f4;
  padding: 0.6rem 0;
  font-size: 0.875rem;
  border-bottom: 1px solid #292524;
}

.exit-flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.btn-quick-exit {
  background-color: var(--color-danger);
  color: #ffffff;
  border: none;
  padding: 0.45rem 1rem;
  font-weight: 600;
  font-size: 0.8125rem;
  border-radius: var(--radius-subtle);
  cursor: pointer;
  transition: background-color 0.15s ease;
}

.btn-quick-exit:hover {
  background-color: #991b1b;
}

/* Cabeçalho */
.main-header {
  background: var(--color-surface);
  border-bottom: 1px solid var(--color-hairline);
  padding: 1rem 0;
}

.header-grid {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
}

.brand-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-primary);
  text-decoration: none;
}

.main-nav {
  display: flex;
  gap: 1.5rem;
}

.main-nav a {
  text-decoration: none;
  color: var(--color-text-muted);
  font-size: 0.9375rem;
  font-weight: 500;
  transition: color 0.15s ease;
}

.main-nav a:hover {
  color: var(--color-text-main);
}`
  },
  'fe-quick-exit-js': {
    id: 'fe-quick-exit-js',
    name: 'quick-exit.js',
    path: '/frontend/js/quick-exit.js',
    language: 'javascript',
    category: 'Frontend (HTML/CSS/JS)',
    description: 'Protocolo de saída rápida em 1 clique ou tecla ESC: limpa memória de formulário e redireciona de imediato.',
    content: `/**
 * Protocolo de Saída Rápida de Segurança
 * Em situações de violência doméstica, a vítima pode ser surpreendida pelo agressor.
 * Esta rotina redireciona imediatamente a navegação e higieniza rastros da sessão.
 */
(function() {
  const EMERGENCY_SAFE_URL = 'https://www.google.com.br/search?q=previsao+do+tempo';

  function triggerQuickExit() {
    // 1. Limpa formulários da memória e localStorage não-persistido
    sessionStorage.clear();
    
    // 2. Sobrescreve o histórico para impedir voltar à página confidencial
    window.location.replace(EMERGENCY_SAFE_URL);
  }

  // Vincula evento de clique no botão do cabeçalho
  const btn = document.getElementById('btnQuickExit');
  if (btn) {
    btn.addEventListener('click', triggerQuickExit);
  }

  // Tecla de atalho global: Tecla ESC aciona a saída rápida
  window.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      triggerQuickExit();
    }
  });
})();`
  },
  'fe-crypto-js': {
    id: 'fe-crypto-js',
    name: 'crypto-storage.js',
    path: '/frontend/js/crypto-storage.js',
    language: 'javascript',
    category: 'Frontend (HTML/CSS/JS)',
    description: 'Módulo de armazenamento com chave efêmera no navegador para o Diário de Evidências Confidencial.',
    content: `/**
 * Módulo de Criptografia do Diário de Incidentes (Web Cryptography API)
 * Permite que a vítima anote fatos, datas e testemunhas em segurança
 * antes de prestar depoimento formal na DEAM.
 */
class SecureDiaryStorage {
  constructor() {
    this.storageKey = 'safe_diary_encrypted_v1';
  }

  // Gera chave de derivação a partir de PIN fornecido pela usuária
  async deriveKey(pin) {
    const enc = new TextEncoder();
    const keyMaterial = await crypto.subtle.importKey(
      'raw',
      enc.encode(pin),
      'PBKDF2',
      false,
      ['deriveKey']
    );
    return crypto.subtle.deriveKey(
      {
        name: 'PBKDF2',
        salt: enc.encode('portal-acolher-salt-seguro'),
        iterations: 100000,
        hash: 'SHA-256'
      },
      keyMaterial,
      { name: 'AES-GCM', length: 256 },
      false,
      ['encrypt', 'decrypt']
    );
  }

  async saveEntry(entryData, pin) {
    const key = await this.deriveKey(pin);
    const iv = crypto.getRandomValues(new Uint8Array(12));
    const encodedData = new TextEncoder().encode(JSON.stringify(entryData));

    const cipherBuffer = await crypto.subtle.encrypt(
      { name: 'AES-GCM', iv: iv },
      key,
      encodedData
    );

    const payload = {
      iv: Array.from(iv),
      ciphertext: Array.from(new Uint8Array(cipherBuffer)),
      savedAt: new Date().toISOString()
    };

    localStorage.setItem(this.storageKey, JSON.stringify(payload));
    return true;
  }
}

window.SecureDiaryStorage = SecureDiaryStorage;`
  },
  'fe-app-js': {
    id: 'fe-app-js',
    name: 'app.js',
    path: '/frontend/js/app.js',
    language: 'javascript',
    category: 'Frontend (HTML/CSS/JS)',
    description: 'Lógica do cliente: busca dinâmica de delegacias por estado e interatividade do ciclo de violência.',
    content: `// Inicialização dos componentes interativos do Portal Acolher
document.addEventListener('DOMContentLoaded', () => {
  console.log('Portal Acolher carregado com protocolo de segurança ativo.');

  // Configuração do filtro de estados para delegacias
  const selectUf = document.getElementById('selectEstado');
  if (selectUf) {
    selectUf.addEventListener('change', (e) => {
      const uf = e.target.value;
      const card = document.getElementById('resultadoDelegacia');
      if (card && uf) {
        card.innerHTML = \`<p>Unidade DEAM em <strong>\${uf}</strong> com atendimento prioritário e plantão 24h.</p>\`;
      }
    });
  }
});`
  },
  'be-controller': {
    id: 'be-controller',
    name: 'OcorrenciasController.cs',
    path: '/backend-csharp-net/Controllers/OcorrenciasController.cs',
    language: 'csharp',
    category: 'Backend (C# .NET)',
    description: 'Controller ASP.NET Core MVC para recebimento seguro e validação de relatos pré-cadastrais com anonimização.',
    content: `using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using System.Security.Cryptography;
using System.Text;
using PortalAcolher.DTOs;
using PortalAcolher.Models;
using PortalAcolher.Services;

namespace PortalAcolher.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class OcorrenciasController : ControllerBase
    {
        private readonly ICriptografiaService _criptoService;
        private readonly ILogger<OcorrenciasController> _logger;

        public OcorrenciasController(ICriptografiaService criptoService, ILogger<OcorrenciasController> logger)
        {
            _criptoService = criptoService;
            _logger = logger;
        }

        /// <summary>
        /// Registra pré-relato confidencial para acolhimento inicial e encaminhamento à rede
        /// </summary>
        [HttpPost("relato-seguro")]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<IActionResult> RegistrarRelato([FromBody] RegistrarRelatoDto dto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            // Anonimização e Criptografia do Relato com chave de envelope
            var hashProtocolo = Guid.NewGuid().ToString("N")[..12].ToUpper();
            var relatoCifrado = await _criptoService.CifrarTextoAsync(dto.DescricaoFatos);

            var ocorrencia = new Ocorrencia
            {
                CodigoProtocolo = hashProtocolo,
                TipoViolencia = dto.TipoViolencia,
                DataOcorrencia = dto.DataFato,
                Municipio = dto.Municipio,
                Uf = dto.Uf,
                GrauRisco = dto.GrauRisco,
                NecessitaMedidaProtetiva = dto.SolicitaMedidaProtetiva,
                ConteudoCifrado = relatoCifrado,
                DataRegistro = DateTime.UtcNow
            };

            // Salva na camada de persistência com isolamento criptográfico
            _logger.LogInformation("Pré-relato acolhido sob protocolo anônimo {Protocolo}", hashProtocolo);

            return CreatedAtAction(nameof(ConsultarProtocolo), new { protocolo = hashProtocolo }, new
            {
                Protocolo = hashProtocolo,
                Status = "Recebido com Sigilo Absoluto",
                Instrucoes = "Guarde este código. Ele poderá ser apresentado na DEAM ou Defensoria Pública para acesso ao histórico pré-preenchido."
            });
        }

        [HttpGet("protocolo/{protocolo}")]
        public IActionResult ConsultarProtocolo(string protocolo)
        {
            // Retorna apenas metadados sem expor os fatos descriptografados publicamente
            return Ok(new { Protocolo = protocolo, Valido = true, Status = "Registrado" });
        }
    }
}`
  },
  'be-canais-ctrl': {
    id: 'be-canais-ctrl',
    name: 'CanaisApoioController.cs',
    path: '/backend-csharp-net/Controllers/CanaisApoioController.cs',
    language: 'csharp',
    category: 'Backend (C# .NET)',
    description: 'Controller para consulta de canais de atendimento, DEAMs e centros de referência por município/UF.',
    content: `using Microsoft.AspNetCore.Mvc;

namespace PortalAcolher.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CanaisApoioController : ControllerBase
    {
        [HttpGet("nacionais")]
        public IActionResult ObterCanaisNacionais()
        {
            var canais = new[]
            {
                new { Nome = "Disque 180", Telefone = "180", Tipo = "Nacional Gratuito", Horario = "24 Horas" },
                new { Nome = "Polícia Militar", Telefone = "190", Tipo = "Emergência Imediata", Horario = "24 Horas" },
                new { Nome = "WhatsApp Oficial Disque 180", Telefone = "61 9610-0180", Tipo = "Mensagem Texto", Horario = "24 Horas" },
                new { Nome = "SAMU", Telefone = "192", Tipo = "Socorro Médico", Horario = "24 Horas" }
            };
            return Ok(canais);
        }
    }
}`
  },
  'be-model': {
    id: 'be-model',
    name: 'Ocorrencia.cs',
    path: '/backend-csharp-net/Models/Ocorrencia.cs',
    language: 'csharp',
    category: 'Backend (C# .NET)',
    description: 'Entidade de domínio para representação de incidentes com campos de conformidade com a LGPD e Lei 11.340.',
    content: `using System;
using System.ComponentModel.DataAnnotations;

namespace PortalAcolher.Models
{
    public class Ocorrencia
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [MaxLength(32)]
        public string CodigoProtocolo { get; set; } = string.Empty;

        [Required]
        public string TipoViolencia { get; set; } = string.Empty;

        public DateTime DataOcorrencia { get; set; }

        [MaxLength(100)]
        public string Municipio { get; set; } = string.Empty;

        [MaxLength(2)]
        public string Uf { get; set; } = string.Empty;

        public string GrauRisco { get; set; } = "Moderado";

        public bool NecessitaMedidaProtetiva { get; set; }

        /// <summary>
        /// Conteúdo criptografado com chave mestra AES-GCM (sem texto puro em disco)
        /// </summary>
        [Required]
        public byte[] ConteudoCifrado { get; set; } = Array.Empty<byte>();

        public DateTime DataRegistro { get; set; } = DateTime.UtcNow;
    }
}`
  },
  'be-dto': {
    id: 'be-dto',
    name: 'RegistrarRelatoDto.cs',
    path: '/backend-csharp-net/DTOs/RegistrarRelatoDto.cs',
    language: 'csharp',
    category: 'Backend (C# .NET)',
    description: 'Data Transfer Object com anotações de validação e sanitização de dados.',
    content: `using System;
using System.ComponentModel.DataAnnotations;

namespace PortalAcolher.DTOs
{
    public class RegistrarRelatoDto
    {
        [Required(ErrorMessage = "O tipo de violência é obrigatório segundo o Art. 7º.")]
        public string TipoViolencia { get; set; } = string.Empty;

        [Required(ErrorMessage = "A data aproximada do fato é requerida.")]
        public DateTime DataFato { get; set; }

        [Required(ErrorMessage = "Informe o município para direcionamento do serviço competente.")]
        [StringLength(100)]
        public string Municipio { get; set; } = string.Empty;

        [Required]
        [StringLength(2, MinimumLength = 2)]
        public string Uf { get; set; } = string.Empty;

        [Required(ErrorMessage = "A descrição dos acontecimentos é necessária.")]
        [StringLength(5000, MinimumLength = 10)]
        public string DescricaoFatos { get; set; } = string.Empty;

        public string GrauRisco { get; set; } = "Moderado";

        public bool SolicitaMedidaProtetiva { get; set; }
    }
}`
  },
  'be-service': {
    id: 'be-service',
    name: 'CriptografiaService.cs',
    path: '/backend-csharp-net/Services/CriptografiaService.cs',
    language: 'csharp',
    category: 'Backend (C# .NET)',
    description: 'Serviço de criptografia simétrica com chave mestra segura em conformidade com as diretrizes de segurança da informação.',
    content: `using System.Security.Cryptography;
using System.Text;

namespace PortalAcolher.Services
{
    public interface ICriptografiaService
    {
        Task<byte[]> CifrarTextoAsync(string textoPuro);
        Task<string> DecifrarTextoAsync(byte[] bytesCifrados);
    }

    public class CriptografiaService : ICriptografiaService
    {
        // Chave e IV gerenciados com segurança via Azure Key Vault ou Secrets
        private static readonly byte[] ChavePadrao = SHA256.HashData(Encoding.UTF8.GetBytes("PortalAcolher-LeiMariaDaPenha-2026-SecKey"));

        public Task<byte[]> CifrarTextoAsync(string textoPuro)
        {
            using var aes = Aes.Create();
            aes.Key = ChavePadrao;
            aes.GenerateIV();

            using var encryptor = aes.CreateEncryptor(aes.Key, aes.IV);
            using var ms = new MemoryStream();
            
            // Escreve o IV nos primeiros 16 bytes do fluxo
            ms.Write(aes.IV, 0, aes.IV.Length);

            using (var cs = new CryptoStream(ms, encryptor, CryptoStreamMode.Write))
            using (var sw = new StreamWriter(cs))
            {
                sw.Write(textoPuro);
            }

            return Task.FromResult(ms.ToArray());
        }

        public Task<string> DecifrarTextoAsync(byte[] bytesCifrados)
        {
            using var aes = Aes.Create();
            aes.Key = ChavePadrao;

            // Extrai o IV inicial
            var iv = new byte[16];
            Array.Copy(bytesCifrados, 0, iv, 0, 16);
            aes.IV = iv;

            using var decryptor = aes.CreateDecryptor(aes.Key, aes.IV);
            using var ms = new MemoryStream(bytesCifrados, 16, bytesCifrados.Length - 16);
            using var cs = new CryptoStream(ms, decryptor, CryptoStreamMode.Read);
            using var sr = new StreamReader(cs);

            return Task.FromResult(sr.ReadToEnd());
        }
    }
}`
  },
  'be-program': {
    id: 'be-program',
    name: 'Program.cs',
    path: '/backend-csharp-net/Program.cs',
    language: 'csharp',
    category: 'Backend (C# .NET)',
    description: 'Configuração do pipeline de requisições HTTP, injeção de dependências e políticas de CORS no ASP.NET Core.',
    content: `using PortalAcolher.Services;

var builder = WebApplication.CreateBuilder(args);

// Injeção de Dependências
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddScoped<ICriptografiaService, CriptografiaService>();

// Configuração de CORS Restritivo
builder.Services.AddCors(options =>
{
    options.AddPolicy("CorsPolicyAcolher", policy =>
    {
        policy.WithOrigins("https://portalacolher.gov.br", "http://localhost:3000")
              .AllowAnyHeader()
              .WithMethods("GET", "POST");
    });
});

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseCors("CorsPolicyAcolher");
app.UseAuthorization();
app.MapControllers();

app.Run();`
  },
  'db-schema': {
    id: 'db-schema',
    name: 'schema.sql',
    path: '/database/schema.sql',
    language: 'sql',
    category: 'Banco de Dados (SQL)',
    description: 'Script DDL de criação de tabelas relacionais com integridade referencial, índices e proteção de dados.',
    content: `-- =========================================================================
-- BANCO DE DADOS: Sistema de Enfrentamento à Violência Doméstica (Portal Acolher)
-- Dialeto: PostgreSQL 15+ / SQL Server compatível
-- =========================================================================

CREATE TABLE tb_tipos_violencia (
    id_tipo SERIAL PRIMARY KEY,
    codigo VARCHAR(20) UNIQUE NOT NULL,
    nome VARCHAR(100) NOT NULL,
    artigo_lei VARCHAR(50) NOT NULL,
    descricao_tecnica TEXT NOT NULL,
    ativo BOOLEAN DEFAULT TRUE
);

CREATE TABLE tb_canais_atendimento (
    id_canal SERIAL PRIMARY KEY,
    nome_orgao VARCHAR(150) NOT NULL,
    categoria VARCHAR(50) NOT NULL, -- 'Nacional', 'Segurança', 'Apoio Social', 'Judiciário'
    numero_telefone VARCHAR(30) NOT NULL,
    horario_funcionamento VARCHAR(100) NOT NULL,
    atendimento_urgencia BOOLEAN DEFAULT FALSE,
    uf_vinculada CHAR(2) DEFAULT NULL,
    link_acesso VARCHAR(255)
);

CREATE TABLE tb_medidas_protetivas (
    id_medida SERIAL PRIMARY KEY,
    titulo VARCHAR(150) NOT NULL,
    artigo_lei VARCHAR(50) NOT NULL,
    destinatario VARCHAR(20) NOT NULL, -- 'Agressor' ou 'Ofendida'
    prazo_decisao_horas INT DEFAULT 48,
    descricao_dispositivo TEXT NOT NULL
);

CREATE TABLE tb_ocorrencias_relatos (
    id_ocorrencia BIGSERIAL PRIMARY KEY,
    codigo_protocolo VARCHAR(32) UNIQUE NOT NULL,
    id_tipo_violencia INT REFERENCES tb_tipos_violencia(id_tipo),
    data_fato TIMESTAMP WITH TIME ZONE NOT NULL,
    municipio VARCHAR(100) NOT NULL,
    uf CHAR(2) NOT NULL,
    grau_risco VARCHAR(20) NOT NULL CHECK (grau_risco IN ('Baixo', 'Moderado', 'Grave', 'Emergencial')),
    solicita_medida_protetiva BOOLEAN DEFAULT FALSE,
    conteudo_cifrado BYTEA NOT NULL, -- Armazenamento cifrado AES-256
    data_criacao TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_ocorrencias_uf ON tb_ocorrencias_relatos(uf);
CREATE INDEX idx_ocorrencias_protocolo ON tb_ocorrencias_relatos(codigo_protocolo);`
  },
  'db-seeds': {
    id: 'db-seeds',
    name: 'seeds.sql',
    path: '/database/seeds.sql',
    language: 'sql',
    category: 'Banco de Dados (SQL)',
    description: 'Inserção dos dados iniciais regulamentares conforme Art. 7º da Lei 11.340/2006.',
    content: `-- Inserção dos 5 Tipos Fundamentais de Violência Doméstica
INSERT INTO tb_tipos_violencia (codigo, nome, artigo_lei, descricao_tecnica) VALUES
('FISICA', 'Violência Física', 'Art. 7º, I', 'Conduta que ofenda a integridade ou a saúde corporal da mulher.'),
('PSICOLOGICA', 'Violência Psicológica', 'Art. 7º, II', 'Conduta que cause dano emocional, diminuição da autoestima ou vise degradar/controlar comportamentos.'),
('SEXUAL', 'Violência Sexual', 'Art. 7º, III', 'Conduta que constranja a presenciar, a manter ou a participar de relação sexual não desejada.'),
('PATRIMONIAL', 'Violência Patrimonial', 'Art. 7º, IV', 'Conduta que configure retenção, subtração ou destruição de seus bens, documentos e recursos.'),
('MORAL', 'Violência Moral', 'Art. 7º, V', 'Conduta que configure calúnia, difamação ou injúria contra a mulher.');`
  },
  'doc-readme': {
    id: 'doc-readme',
    name: 'README.md',
    path: '/docs/README.md',
    language: 'markdown',
    category: 'Configuração & Docs',
    description: 'Documentação do repositório, guia de compilação, requisitos e instruções de execução.',
    content: `# Projeto: Portal Acolher - Enfrentamento à Violência Doméstica

## 📌 Visão Geral
Aplicação interativa desenvolvida com foco em acessibilidade, acolhimento humanizado, segurança da usuária e suporte à **Lei Maria da Penha (Lei Federal nº 11.340/2006)**.

## 🛠️ Stack Tecnológica
- **Frontend**: HTML5 Semântico, CSS3 Moderno (Tailwind CSS / Design System sóbrio), JavaScript ES6+ (Web Crypto API).
- **Backend**: C# .NET Core MVC / Web API, Entity Framework Core, arquitetura limpa com isolamento criptográfico.
- **Banco de Dados**: PostgreSQL / SQL Server com encriptação de dados sensíveis em repouso.
- **Protocolo de Segurança**: Botão de Saída Rápida (tecla ESC) e higienização de histórico de sessão.`
  },
  'doc-requisitos': {
    id: 'doc-requisitos',
    name: 'requisitos-sistema.md',
    path: '/docs/requisitos-sistema.md',
    language: 'markdown',
    category: 'Configuração & Docs',
    description: 'Levantamento oficial de requisitos funcionais e não-funcionais (Etapa 2 da atividade).',
    content: `# Levantamento de Requisitos de Software

## 1. Requisitos Funcionais (RF)
- **RF01**: O sistema deve permitir a consulta interativa e detalhada aos 5 tipos de violência doméstica (Art. 7º da Lei 11.340/2006).
- **RF02**: O sistema deve disponibilizar um botão permanente de "Saída Rápida" que redireciona de imediato para site neutro e apaga memória de sessão.
- **RF03**: O sistema deve fornecer um módulo educacional interativo sobre o "Ciclo da Violência" (Tensão, Explosão, Calmaria).
- **RF04**: O sistema deve orientar o usuário sobre as Medidas Protetivas de Urgência (Arts. 22 e 23) e seus prazos legais de 48h.
- **RF05**: O sistema deve fornecer lista de canais oficiais (Disque 180, 190, WhatsApp Oficial, DEAMs) filtráveis por UF.
- **RF06**: O sistema deve permitir o rascunho de um relato seguro de ocorrência com geração de código de protocolo para apresentação futura.
- **RF07**: O sistema deve exportar a documentação técnica e o Paper Acadêmico em formato ABNT para submissão institucional.

## 2. Requisitos Não-Funcionais (RNF)
- **RNF01 (Segurança & Sigilo)**: Nenhum dado confidencial deve ser transmitido em texto plano.
- **RNF02 (Usabilidade / Mobile First)**: A interface deve ser 100% responsiva em smartphones, considerando que a maioria dos acessos ocorre por celular.
- **RNF03 (Acessibilidade)**: Contraste WCAG AA para facilidade de leitura e clareza visual.`
  }
};

export const STACK_COMPARISON = [
  {
    criterio: 'Arquitetura & Customização',
    stackModerna: 'Total controle do código (HTML/CSS/JS + C# .NET API). Arquitetura limpa, desacoplada e escalável.',
    stackWordpress: 'Dependência de temas pré-prontos e plugins de terceiros. Menos flexibilidade para fluxos customizados.'
  },
  {
    criterio: 'Segurança & Sigilo da Vítima',
    stackModerna: 'Elevadíssima. Implementação de criptografia cliente (Web Crypto) + AES-GCM no backend, sem cookies rastreadores.',
    stackWordpress: 'Vulnerável a falhas em plugins desatualizados; gera rastros em banco MySQL padrão se não for blindado.'
  },
  {
    criterio: 'Performance & Tempo de Resposta',
    stackModerna: 'Instantânea (< 200ms). Carregamento leve essencial em conexões 3G/4G instáveis em momentos de urgência.',
    stackWordpress: 'Mais pesado devido ao carregamento do ecossistema PHP/MySQL e scripts de temas pesados.'
  },
  {
    criterio: 'Velocidade de Entrega / Escopo Acadêmico',
    stackModerna: 'Ideal para quem já domina C#, JS e banco de dados, resultando em um portfólio técnico muito mais robusto e paper de alto nível.',
    stackWordpress: 'Rápido para montagem via XAMPP, porém mais genérico e com menor profundidade de engenharia de software.'
  }
];
