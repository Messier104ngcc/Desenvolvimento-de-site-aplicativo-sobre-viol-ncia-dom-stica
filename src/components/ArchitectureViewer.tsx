import React, { useState } from 'react';
import { PROJECT_TREE, CODE_FILES, STACK_COMPARISON } from '../data/projectArchitectureData';
import { CodeFile, FolderNode } from '../types';
import { Folder, FolderOpen, FileCode, Copy, Check, Server, Database, Layout, ShieldCheck, Terminal, Cpu } from 'lucide-react';

export const ArchitectureViewer: React.FC = () => {
  const [selectedFileId, setSelectedFileId] = useState<string>('fe-html');
  const [copied, setCopied] = useState<boolean>(false);
  const [expandedFolders, setExpandedFolders] = useState<Record<string, boolean>>({
    '/': true,
    '/frontend': true,
    '/frontend/js': true,
    '/backend-csharp-net': true,
    '/backend-csharp-net/Controllers': true,
    '/database': true,
    '/docs': true
  });

  const selectedFile: CodeFile = CODE_FILES[selectedFileId] || CODE_FILES['fe-html'];

  const toggleFolder = (path: string) => {
    setExpandedFolders(prev => ({
      ...prev,
      [path]: !prev[path]
    }));
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(selectedFile.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Renderizador recursivo da árvore de diretórios
  const renderTree = (node: FolderNode, level = 0) => {
    const isFolder = node.type === 'folder';
    const isExpanded = expandedFolders[node.path];

    if (isFolder) {
      return (
        <div key={node.path} style={{ paddingLeft: `${level * 12}px` }} className="text-xs">
          <div
            onClick={() => toggleFolder(node.path)}
            className="flex items-center gap-1.5 py-1 px-1.5 rounded hover:bg-stone-200/60 cursor-pointer text-stone-800 font-medium select-none"
          >
            {isExpanded ? (
              <FolderOpen className="w-3.5 h-3.5 text-stone-600" />
            ) : (
              <Folder className="w-3.5 h-3.5 text-stone-600" />
            )}
            <span>{node.name}</span>
          </div>

          {isExpanded && node.children && (
            <div className="space-y-0.5">
              {node.children.map(child => renderTree(child, level + 1))}
            </div>
          )}
        </div>
      );
    }

    const isSelected = selectedFileId === node.fileId;
    return (
      <div key={node.path} style={{ paddingLeft: `${level * 12}px` }} className="text-xs">
        <div
          onClick={() => node.fileId && setSelectedFileId(node.fileId)}
          className={`flex items-center gap-1.5 py-1 px-1.5 rounded cursor-pointer select-none transition-colors ${
            isSelected
              ? 'bg-stone-900 text-white font-semibold'
              : 'text-stone-700 hover:bg-stone-200/50'
          }`}
        >
          <FileCode className={`w-3.5 h-3.5 ${isSelected ? 'text-stone-200' : 'text-stone-500'}`} />
          <span className="truncate">{node.name}</span>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 space-y-10">
      {/* Cabeçalho */}
      <div className="border-b border-stone-200 pb-6">
        <span className="text-xs uppercase tracking-widest text-stone-500 font-semibold">
          Etapa 4 · Implementação Técnica & Engenharia de Software
        </span>
        <h1 className="text-3xl sm:text-4xl font-serif-title font-bold text-stone-900 mt-1">
          Arquitetura de Pastas e Código-Fonte do Sistema
        </h1>
        <p className="text-stone-600 text-sm sm:text-base mt-2 max-w-3xl leading-relaxed">
          Explore a organização profissional de diretórios do projeto, contemplando a tríade fundamental de desenvolvimento web (HTML5, CSS3 e JavaScript ES6+), a camada corporativa de serviços em <strong>C# ASP.NET Core MVC</strong> e os scripts relacionais de banco de dados em <strong>SQL</strong>.
        </p>
      </div>

      {/* Destaques Arquiteturais em Cartões */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="p-4 bg-white border border-stone-200 rounded-lg">
          <div className="flex items-center gap-2 text-stone-900 font-semibold text-xs mb-1">
            <Layout className="w-4 h-4 text-stone-700" />
            <span>Frontend Limpo</span>
          </div>
          <div className="text-xs text-stone-600">
            HTML5 semântico, CSS sóbrio com Tailwind e JavaScript sem dependências externas pesadas.
          </div>
        </div>

        <div className="p-4 bg-white border border-stone-200 rounded-lg">
          <div className="flex items-center gap-2 text-stone-900 font-semibold text-xs mb-1">
            <Server className="w-4 h-4 text-stone-700" />
            <span>Backend C# .NET Core</span>
          </div>
          <div className="text-xs text-stone-600">
            Controllers RESTful, DTOs com Data Annotations e padrão Repository desacoplado.
          </div>
        </div>

        <div className="p-4 bg-white border border-stone-200 rounded-lg">
          <div className="flex items-center gap-2 text-stone-900 font-semibold text-xs mb-1">
            <Database className="w-4 h-4 text-stone-700" />
            <span>Banco de Dados SQL</span>
          </div>
          <div className="text-xs text-stone-600">
            Modelagem relacional (PostgreSQL/SQL Server) com armazenamento criptografado de relatos.
          </div>
        </div>

        <div className="p-4 bg-white border border-stone-200 rounded-lg">
          <div className="flex items-center gap-2 text-stone-900 font-semibold text-xs mb-1">
            <ShieldCheck className="w-4 h-4 text-stone-700" />
            <span>Protocolo de Sigilo</span>
          </div>
          <div className="text-xs text-stone-600">
            Botão Quick Exit em 1 clique (ESC) e Web Cryptography API cliente sem rastros.
          </div>
        </div>
      </div>

      {/* Explorador de Código e Árvore de Diretórios (IDE Integrada) */}
      <div className="bg-white border border-stone-200 rounded-lg shadow-sm overflow-hidden">
        {/* Barra Superior da IDE */}
        <div className="bg-stone-900 text-stone-300 px-4 py-2.5 flex items-center justify-between text-xs border-b border-stone-800">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-stone-400" />
            <span className="font-semibold text-white">Explorador de Arquivos do Projeto</span>
            <span className="text-stone-500">|</span>
            <span className="font-mono text-stone-400">{selectedFile.path}</span>
          </div>
          <button
            onClick={handleCopyCode}
            className="flex items-center gap-1.5 px-3 py-1 bg-stone-800 hover:bg-stone-700 text-white rounded font-medium text-xs transition-colors cursor-pointer"
            title="Copiar código para a área de transferência"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Copiado!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copiar Código</span>
              </>
            )}
          </button>
        </div>

        {/* Divisão: Navegador de Pastas à Esquerda + Visualizador de Código à Direita */}
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
          {/* Coluna 1: Árvore de Diretórios */}
          <div className="lg:col-span-4 bg-stone-50 border-r border-stone-200 p-4 overflow-y-auto max-h-[550px]">
            <div className="text-[11px] font-bold uppercase tracking-wider text-stone-500 mb-3">
              Estrutura de Pastas (Folder Tree)
            </div>
            {renderTree(PROJECT_TREE)}

            <div className="mt-6 pt-4 border-t border-stone-200 text-[11px] text-stone-500">
              💡 Clique em qualquer arquivo acima para visualizar seu código-fonte correspondente e explicação técnica.
            </div>
          </div>

          {/* Coluna 2: Código-Fonte do Arquivo Selecionado */}
          <div className="lg:col-span-8 flex flex-col justify-between bg-stone-950 text-stone-100">
            {/* Header do Arquivo */}
            <div className="p-4 bg-stone-900/90 border-b border-stone-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="text-[10px] uppercase font-mono tracking-wider text-stone-400 bg-stone-800 px-2 py-0.5 rounded">
                  {selectedFile.category}
                </span>
                <h3 className="font-mono text-sm font-bold text-white mt-1">
                  {selectedFile.name}
                </h3>
              </div>
              <span className="text-xs text-stone-400 font-medium">
                {selectedFile.language.toUpperCase()}
              </span>
            </div>

            {/* Descrição do Componente */}
            <div className="px-4 py-2 bg-stone-900/40 border-b border-stone-800/80 text-xs text-stone-300">
              {selectedFile.description}
            </div>

            {/* Bloco de Código com Linhas */}
            <div className="p-4 font-mono-code text-xs leading-relaxed overflow-x-auto overflow-y-auto max-h-[440px] text-stone-200">
              <pre className="whitespace-pre">
                <code>
                  {selectedFile.content.split('\n').map((line, index) => (
                    <div key={index} className="table-row">
                      <span className="table-cell pr-4 select-none text-stone-600 text-right w-8 text-[11px]">
                        {index + 1}
                      </span>
                      <span className="table-cell">{line}</span>
                    </div>
                  ))}
                </code>
              </pre>
            </div>

            {/* Rodapé do Editor */}
            <div className="p-2 bg-stone-900 border-t border-stone-800 text-[11px] text-stone-400 flex justify-between items-center px-4">
              <span>{selectedFile.content.split('\n').length} linhas de código</span>
              <span>Codificação UTF-8 · Compatível com Visual Studio / VS Code</span>
            </div>
          </div>
        </div>
      </div>

      {/* Análise Comparativa de Arquitetura: Stack Customizada vs CMS WordPress (XAMPP) */}
      <div className="bg-white border border-stone-200 rounded-lg p-6 sm:p-8 space-y-6">
        <div>
          <span className="text-xs uppercase tracking-widest text-stone-500 font-semibold">
            Etapa 1 · Decisão Técnica de Engenharia
          </span>
          <h2 className="text-2xl font-serif-title font-bold text-stone-900 mt-1">
            Comparativo de Viabilidade: Stack Própria vs WordPress (XAMPP)
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-1 leading-relaxed">
            A atividade sugere a opção por WordPress via XAMPP ou a criação de uma aplicação web com stack própria aproveitando o perfil técnico do desenvolvedor. A tabela abaixo fundamenta a decisão de engenharia adotada:
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-stone-200 bg-stone-50 text-stone-800 font-semibold">
                <th className="p-3 w-1/4">Critério de Avaliação</th>
                <th className="p-3 w-3/8 text-stone-900 bg-stone-100/70">
                  Opção Adotada: Stack Web Customizada (HTML/CSS/JS + C# .NET)
                </th>
                <th className="p-3 w-3/8 text-stone-600">
                  Opção Alternativa Padrão: WordPress via XAMPP
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200 text-stone-700">
              {STACK_COMPARISON.map((row, idx) => (
                <tr key={idx} className="hover:bg-stone-50/50">
                  <td className="p-3 font-semibold text-stone-900">{row.criterio}</td>
                  <td className="p-3 bg-stone-50/40 text-stone-800 font-medium">{row.stackModerna}</td>
                  <td className="p-3 text-stone-600">{row.stackWordpress}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-4 bg-stone-50 border border-stone-200 rounded-md text-xs text-stone-700">
          <strong>Conclusão Técnica:</strong> Para aplicações de segurança pública e combate à violência doméstica, onde o sigilo dos dados da vítima e a velocidade de saída rápida são requisitos inegociáveis de preservação da vida, a criação de uma solução sob medida com <strong>HTML5/CSS3/JS e C# .NET Core</strong> oferece confiabilidade e proteção de dados incomparavelmente superiores a um CMS genérico de terceiros.
        </div>
      </div>
    </div>
  );
};
