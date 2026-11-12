import React, { useState } from 'react';
import { ACADEMIC_PAPER, PROJECT_REPORT_45H } from '../data/academicPaperData';
import { BookOpen, FileCheck, Copy, Check, Printer, Download, Clock, Award, CheckCircle2 } from 'lucide-react';

export const AcademicPaperViewer: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState<'paper' | 'relatorio'>('paper');
  const [copiedPaper, setCopiedPaper] = useState<boolean>(false);
  const [copiedReport, setCopiedReport] = useState<boolean>(false);

  const handleCopyPaper = () => {
    let md = `# ${ACADEMIC_PAPER.title}\n## ${ACADEMIC_PAPER.subtitle}\n\n`;
    md += `*${ACADEMIC_PAPER.authorInfo}*\n\n`;
    md += `### RESUMO\n${ACADEMIC_PAPER.resumo}\n\n`;
    md += `**Palavras-chave:** ${ACADEMIC_PAPER.palavrasChave.join(', ')}.\n\n`;
    md += `### ABSTRACT\n${ACADEMIC_PAPER.abstract}\n\n`;
    md += `**Keywords:** ${ACADEMIC_PAPER.keywords.join(', ')}.\n\n`;

    ACADEMIC_PAPER.sections.forEach((sec) => {
      md += `\n## ${sec.number}. ${sec.title}\n\n`;
      sec.paragraphs.forEach((p) => {
        md += `${p}\n\n`;
      });
      if (sec.subsections) {
        sec.subsections.forEach((sub) => {
          md += `### ${sub.number} ${sub.title}\n\n`;
          sub.paragraphs.forEach((subP) => {
            md += `${subP}\n\n`;
          });
        });
      }
    });

    md += `\n## REFERÊNCIAS\n\n`;
    ACADEMIC_PAPER.referencias.forEach((ref) => {
      md += `- ${ref}\n`;
    });

    navigator.clipboard.writeText(md);
    setCopiedPaper(true);
    setTimeout(() => setCopiedPaper(false), 2000);
  };

  const handleCopyReport = () => {
    let md = `# RELATÓRIO TÉCNICO DE EXECUÇÃO - ${PROJECT_REPORT_45H.totalHours} HORAS\n`;
    md += `Projeto: ${PROJECT_REPORT_45H.theme}\n`;
    md += `Disciplina: ${PROJECT_REPORT_45H.courseTitle}\n\n`;

    PROJECT_REPORT_45H.breakdown.forEach((stage) => {
      md += `## ${stage.stage}: ${stage.title} (${stage.hoursAllocated} horas)\n`;
      md += `Atividades Realizadas:\n`;
      stage.activities.forEach(act => {
        md += `- ${act}\n`;
      });
      md += `Entregável: ${stage.deliverables}\n\n`;
    });

    navigator.clipboard.writeText(md);
    setCopiedReport(true);
    setTimeout(() => setCopiedReport(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-5xl mx-auto px-4 md:px-8 py-8 space-y-8">
      {/* Barra de Ações e Troca de Visualização (No-Print) */}
      <div className="no-print bg-white border border-stone-200 rounded-lg p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveSubTab('paper')}
            className={`px-4 py-2 text-xs font-semibold rounded-md transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeSubTab === 'paper'
                ? 'bg-stone-900 text-white'
                : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Paper Acadêmico (Normas ABNT)</span>
          </button>

          <button
            onClick={() => setActiveSubTab('relatorio')}
            className={`px-4 py-2 text-xs font-semibold rounded-md transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeSubTab === 'relatorio'
                ? 'bg-stone-900 text-white'
                : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
            }`}
          >
            <FileCheck className="w-3.5 h-3.5" />
            <span>Relatório de Atividade (45 Horas)</span>
          </button>
        </div>

        <div className="flex items-center gap-2">
          {activeSubTab === 'paper' ? (
            <button
              onClick={handleCopyPaper}
              className="px-3.5 py-2 text-xs font-medium text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-md transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              {copiedPaper ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedPaper ? 'Copiado para Área de Transferência' : 'Copiar Texto Completo'}</span>
            </button>
          ) : (
            <button
              onClick={handleCopyReport}
              className="px-3.5 py-2 text-xs font-medium text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-md transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              {copiedReport ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedReport ? 'Copiado!' : 'Copiar Relatório 45h'}</span>
            </button>
          )}

          <button
            onClick={handlePrint}
            className="px-3.5 py-2 text-xs font-medium text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-md transition-colors flex items-center gap-1.5 cursor-pointer"
            title="Imprimir ou gerar PDF limpo segundo normas da ABNT"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Imprimir / PDF</span>
          </button>
        </div>
      </div>

      {/* Visualização: Paper Acadêmico Completo */}
      {activeSubTab === 'paper' && (
        <article className="bg-white border border-stone-200 rounded-lg p-8 sm:p-14 shadow-sm space-y-8 font-serif leading-relaxed text-stone-900">
          {/* Cabeçalho ABNT */}
          <div className="text-center space-y-3 pb-8 border-b border-stone-200">
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight uppercase leading-snug">
              {ACADEMIC_PAPER.title}
            </h1>
            <h2 className="text-sm sm:text-base font-normal italic text-stone-700">
              {ACADEMIC_PAPER.subtitle}
            </h2>
            <div className="pt-3 text-xs font-sans text-stone-600 uppercase tracking-wider">
              {ACADEMIC_PAPER.authorInfo}
            </div>
          </div>

          {/* Resumo */}
          <div className="space-y-3 text-xs sm:text-sm text-justify font-sans bg-stone-50 p-6 rounded border border-stone-200">
            <h3 className="font-bold text-stone-900 uppercase tracking-wider text-xs">
              RESUMO
            </h3>
            <p className="leading-relaxed text-stone-700">
              {ACADEMIC_PAPER.resumo}
            </p>
            <div className="pt-2 text-xs text-stone-800">
              <strong>Palavras-chave:</strong> {ACADEMIC_PAPER.palavrasChave.join('; ')}.
            </div>
          </div>

          {/* Abstract */}
          <div className="space-y-3 text-xs sm:text-sm text-justify font-sans bg-stone-50 p-6 rounded border border-stone-200">
            <h3 className="font-bold text-stone-900 uppercase tracking-wider text-xs">
              ABSTRACT
            </h3>
            <p className="leading-relaxed text-stone-700 italic">
              {ACADEMIC_PAPER.abstract}
            </p>
            <div className="pt-2 text-xs text-stone-800">
              <strong>Keywords:</strong> {ACADEMIC_PAPER.keywords.join('; ')}.
            </div>
          </div>

          {/* Seções do Artigo */}
          <div className="space-y-8 pt-4">
            {ACADEMIC_PAPER.sections.map((section) => (
              <section key={section.number} className="space-y-4">
                <h2 className="text-base sm:text-lg font-bold uppercase tracking-tight text-stone-900 border-b border-stone-200 pb-1 font-sans">
                  {section.number}. {section.title}
                </h2>

                <div className="space-y-3 text-sm sm:text-base text-stone-800 text-justify">
                  {section.paragraphs.map((p, idx) => (
                    <p key={idx} className="indent-8 leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>

                {/* Subseções se houver */}
                {section.subsections && (
                  <div className="space-y-4 pt-2">
                    {section.subsections.map((sub) => (
                      <div key={sub.number} className="space-y-2">
                        <h3 className="text-sm sm:text-base font-bold text-stone-900 font-sans">
                          {sub.number} {sub.title}
                        </h3>
                        <div className="space-y-2 text-sm sm:text-base text-stone-800 text-justify">
                          {sub.paragraphs.map((subP, subIdx) => (
                            <p key={subIdx} className="indent-8 leading-relaxed">
                              {subP}
                            </p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </section>
            ))}
          </div>

          {/* Referências Bibliográficas ABNT */}
          <section className="pt-8 border-t border-stone-200 space-y-4">
            <h2 className="text-base font-bold uppercase tracking-tight text-stone-900 font-sans">
              REFERÊNCIAS
            </h2>
            <div className="space-y-2.5 text-xs text-stone-700 font-sans">
              {ACADEMIC_PAPER.referencias.map((ref, idx) => (
                <p key={idx} className="leading-relaxed">
                  {ref}
                </p>
              ))}
            </div>
          </section>
        </article>
      )}

      {/* Visualização: Relatório Técnico de Cumprimento de 45 Horas */}
      {activeSubTab === 'relatorio' && (
        <div className="bg-white border border-stone-200 rounded-lg p-6 sm:p-10 shadow-sm space-y-8 font-sans">
          {/* Cabeçalho do Relatório */}
          <div className="border-b border-stone-200 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-stone-500 font-semibold">
                Documentação de Extensão Universitária / Atividade Prática
              </span>
              <h1 className="text-2xl sm:text-3xl font-serif-title font-bold text-stone-900 mt-1">
                Relatório Técnico de Execução (Carga Horária: 45h)
              </h1>
              <p className="text-xs sm:text-sm text-stone-600 mt-1">
                {PROJECT_REPORT_45H.theme} · {PROJECT_REPORT_45H.courseTitle}
              </p>
            </div>
            <div className="bg-stone-100 border border-stone-200 px-4 py-2.5 rounded-lg text-center shrink-0">
              <span className="text-xs text-stone-500 block">Total Cumprido</span>
              <span className="text-xl font-bold text-stone-900">45 Horas</span>
            </div>
          </div>

          {/* Síntese do Perfil e Estratégia Adotada */}
          <div className="p-4 bg-stone-50 rounded-lg border border-stone-200 text-xs sm:text-sm text-stone-700 space-y-2">
            <div className="font-semibold text-stone-900 flex items-center gap-1.5">
              <Award className="w-4 h-4 text-stone-800" />
              <span>Adequação ao Perfil Técnico do Desenvolvedor:</span>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              Considerando o domínio em lógica de programação, JavaScript, C# e modelagem de banco de dados, a atividade foi executada através do desenvolvimento de uma aplicação web robusta, modular e com componentes reais (HTML5, Tailwind CSS, JS modular e arquitetura C# ASP.NET Core MVC), superando em profundidade técnica a opção básica por WordPress/XAMPP.
            </p>
          </div>

          {/* Cronograma Detalhado Etapa por Etapa */}
          <div className="space-y-6">
            <h2 className="text-lg font-bold text-stone-900 border-b border-stone-200 pb-2">
              Detalhamento das Atividades por Etapa
            </h2>

            <div className="space-y-4">
              {PROJECT_REPORT_45H.breakdown.map((stage) => (
                <div
                  key={stage.stage}
                  className="p-5 rounded-lg border border-stone-200 bg-white space-y-3 shadow-xs"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-100 pb-2">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-stone-900 bg-stone-100 px-2 py-0.5 rounded">
                        {stage.stage}
                      </span>
                      <h3 className="font-bold text-stone-900 text-sm">{stage.title}</h3>
                    </div>
                    <span className="text-xs font-semibold text-stone-700 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-stone-500" />
                      {stage.hoursAllocated} Horas Registradas
                    </span>
                  </div>

                  <div>
                    <h4 className="text-xs font-semibold text-stone-700 mb-1.5">
                      Atividades Desenvolvidas:
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-stone-600">
                      {stage.activities.map((act, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-stone-400 mt-0.5 shrink-0" />
                          <span>{act}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2 text-xs text-stone-700 bg-stone-50 p-2.5 rounded border border-stone-200">
                    <strong>Entregável Comprovado:</strong> {stage.deliverables}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sumário para Entrega */}
          <div className="p-4 bg-stone-900 text-stone-200 rounded-lg text-xs flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="font-semibold text-white block">Status da Entrega Acadêmica:</span>
              <span>Código-fonte versionado, rascunhos funcionais, paper formatado e relatório prontos para envio.</span>
            </div>
            <button
              onClick={handlePrint}
              className="px-4 py-2 bg-white text-stone-900 hover:bg-stone-100 font-semibold rounded text-xs shrink-0 cursor-pointer"
            >
              Imprimir Relatório
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
