import React, { useState } from 'react';
import { PROTECTIVE_MEASURES } from '../data/legalAndSupportData';
import { ProtectiveMeasure } from '../types';
import { Scale, Clock, ShieldCheck, AlertCircle, FileText, CheckCircle, ChevronRight, HelpCircle } from 'lucide-react';

export const LegalProtectionGuide: React.FC = () => {
  const [selectedMeasure, setSelectedMeasure] = useState<ProtectiveMeasure>(PROTECTIVE_MEASURES[0]);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 space-y-12">
      {/* Banner / Cabeçalho Editorial */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-b border-stone-200 pb-8">
        <div className="lg:col-span-8 space-y-4">
          <span className="text-xs uppercase tracking-widest text-stone-500 font-semibold">
            Marco Jurídico · Lei Federal nº 11.340/2006
          </span>
          <h1 className="text-3xl sm:text-4xl font-serif-title font-bold text-stone-900">
            A Lei Maria da Penha e as Medidas Protetivas de Urgência
          </h1>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed max-w-2xl">
            Reconhecida pela ONU como uma das legislações mais avançadas do mundo no combate à violência de gênero,
            a Lei nº 11.340/2006 cria mecanismos rápidos e desburocratizados para proteger a vida e a dignidade da mulher,
            sem depender da vontade do agressor ou da instauração imediata de processo criminal.
          </p>
          <div className="flex flex-wrap gap-4 pt-1 text-xs text-stone-600 font-medium">
            <div className="flex items-center gap-1.5 bg-stone-100 px-3 py-1.5 rounded">
              <Clock className="w-4 h-4 text-stone-800" />
              <span>Decisão Judicial em até <strong>48 Horas</strong></span>
            </div>
            <div className="flex items-center gap-1.5 bg-stone-100 px-3 py-1.5 rounded">
              <ShieldCheck className="w-4 h-4 text-stone-800" />
              <span>Descumprimento é Crime (Art. 24-A)</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4">
          <div className="rounded-lg overflow-hidden border border-stone-200 shadow-sm bg-stone-100">
            <img
              src="/src/assets/images/institutional_law_study_1794494316461.jpg"
              alt="Estudo e rigor institucional da legislação brasileira"
              className="w-full h-48 sm:h-56 object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="p-3 bg-stone-900 text-stone-300 text-[11px] flex justify-between items-center">
              <span>Jurisprudência e Direitos Fundamentais</span>
              <span className="text-stone-400 font-mono">Art. 18 ao 24</span>
            </div>
          </div>
        </div>
      </div>

      {/* Linha do Tempo Legal: O Fluxo das 48 Horas */}
      <div className="bg-white border border-stone-200 rounded-lg p-6 sm:p-8 space-y-6">
        <div>
          <span className="text-xs uppercase tracking-widest text-stone-500 font-semibold">
            Rito Processual Rápido
          </span>
          <h2 className="text-2xl font-serif-title font-bold text-stone-900 mt-1">
            Como Funciona o Pedido de Medida Protetiva (Passo a Passo)
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-1">
            A mulher não precisa esperar julgamento ou processo longo para ser protegida:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Etapa 1 */}
          <div className="p-4 bg-stone-50 rounded-lg border border-stone-200 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono font-bold text-stone-700 bg-stone-200 px-2 py-0.5 rounded">
                PASSO 01
              </span>
              <h3 className="font-semibold text-stone-900 text-sm mt-3">Registro na Delegacia</h3>
              <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                A mulher comparece à DEAM (ou qualquer delegacia/Defensoria Pública) ou registra Boletim Eletrônico solicitando as medidas necessárias.
              </p>
            </div>
            <div className="text-[11px] text-stone-500 font-medium mt-4 pt-2 border-t border-stone-200">
              Prazo policial: Remessa ao juiz em até 48h
            </div>
          </div>

          {/* Etapa 2 */}
          <div className="p-4 bg-stone-50 rounded-lg border border-stone-200 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono font-bold text-stone-700 bg-stone-200 px-2 py-0.5 rounded">
                PASSO 02
              </span>
              <h3 className="font-semibold text-stone-900 text-sm mt-3">Apreciação do Juiz</h3>
              <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                O juiz analisa o requerimento com base na palavra da vítima e histórico de risco, sem necessidade de audiência prévia ou oitiva do agressor.
              </p>
            </div>
            <div className="text-[11px] text-stone-500 font-medium mt-4 pt-2 border-t border-stone-200">
              Prazo judicial: Decisão em até 48h
            </div>
          </div>

          {/* Etapa 3 */}
          <div className="p-4 bg-stone-50 rounded-lg border border-stone-200 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono font-bold text-stone-700 bg-stone-200 px-2 py-0.5 rounded">
                PASSO 03
              </span>
              <h3 className="font-semibold text-stone-900 text-sm mt-3">Notificação e Cumprimento</h3>
              <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                O agressor é intimado por Oficial de Justiça ou força policial, sendo obrigado a desocupar o domicílio imediatamente e não se aproximar.
              </p>
            </div>
            <div className="text-[11px] text-stone-500 font-medium mt-4 pt-2 border-t border-stone-200">
              Efeito imediato após ciência
            </div>
          </div>

          {/* Etapa 4 */}
          <div className="p-4 bg-rose-50 rounded-lg border border-rose-200 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono font-bold text-rose-800 bg-rose-200 px-2 py-0.5 rounded">
                PASSO 04
              </span>
              <h3 className="font-semibold text-rose-950 text-sm mt-3">Vigilância e Patrulha</h3>
              <p className="text-xs text-rose-800 mt-2 leading-relaxed">
                A Patrulha Maria da Penha da Polícia Militar realiza rondas preventivas periódicas. Se o agressor descumprir, é preso em flagrante.
              </p>
            </div>
            <div className="text-[11px] text-rose-700 font-medium mt-4 pt-2 border-t border-rose-200">
              Crime inafiançável na delegacia
            </div>
          </div>
        </div>
      </div>

      {/* Catálogo Interativo das Principais Medidas Protetivas */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-5 space-y-2">
          <h3 className="text-sm font-bold uppercase tracking-wider text-stone-900 mb-3">
            Medidas Protetivas Previstas na Lei
          </h3>
          <div className="space-y-2">
            {PROTECTIVE_MEASURES.map((measure) => {
              const isSelected = selectedMeasure.id === measure.id;
              return (
                <button
                  key={measure.id}
                  onClick={() => setSelectedMeasure(measure)}
                  className={`w-full text-left p-3.5 rounded-lg border transition-all cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? 'bg-stone-900 text-white border-stone-900 shadow-sm'
                      : 'bg-white text-stone-800 border-stone-200 hover:border-stone-300'
                  }`}
                >
                  <div>
                    <span className={`text-[11px] font-mono block ${isSelected ? 'text-stone-300' : 'text-stone-500'}`}>
                      {measure.article}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold">{measure.title}</span>
                  </div>
                  <ChevronRight className={`w-4 h-4 shrink-0 ${isSelected ? 'text-white' : 'text-stone-400'}`} />
                </button>
              );
            })}
          </div>
        </div>

        <div className="lg:col-span-7 bg-white border border-stone-200 rounded-lg p-6 space-y-5">
          <div className="flex items-center justify-between border-b border-stone-200 pb-3">
            <div>
              <span className="text-xs font-mono text-stone-500">{selectedMeasure.article}</span>
              <h4 className="text-xl font-serif-title font-bold text-stone-900">{selectedMeasure.title}</h4>
            </div>
            <span className="text-xs bg-stone-100 text-stone-800 px-2.5 py-1 rounded font-medium">
              Destinatário: {selectedMeasure.target}
            </span>
          </div>

          <div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-1">
              Finalidade Legal:
            </h5>
            <p className="text-sm text-stone-700 leading-relaxed">
              {selectedMeasure.description}
            </p>
          </div>

          <div className="p-4 bg-stone-50 rounded-md border border-stone-200 text-xs sm:text-sm text-stone-700">
            <strong className="text-stone-900 block mb-1">Aplicação Prática no Dia a Dia:</strong>
            <p className="text-stone-600">{selectedMeasure.practicalExample}</p>
          </div>

          <div className="p-3 bg-amber-50 border border-amber-200 rounded text-xs text-amber-900 flex items-start gap-2">
            <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <span>
              <strong>Importante:</strong> Para obter uma medida protetiva, não é obrigatório apresentar laudo pericial ou ter advogado particular contratado. A Defensoria Pública e o Ministério Público atuam gratuitamente.
            </span>
          </div>
        </div>
      </div>

      {/* Direitos Trabalhistas e Sociais Complementares */}
      <div className="bg-stone-50 border border-stone-200 rounded-lg p-6 sm:p-8 space-y-4">
        <h3 className="text-lg font-serif-title font-bold text-stone-900">
          Garantias Trabalhistas e Assistenciais da Lei 11.340
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-stone-700">
          <div className="p-4 bg-white rounded border border-stone-200 space-y-1.5">
            <strong className="text-stone-900 block font-semibold text-sm">
              Estabilidade no Emprego (Art. 9º, § 2º)
            </strong>
            <p className="text-stone-600 leading-relaxed">
              A mulher trabalhadora tem direito à manutenção do vínculo empregatício por até seis meses, caso precise se afastar do trabalho em razão da violência doméstica.
            </p>
          </div>

          <div className="p-4 bg-white rounded border border-stone-200 space-y-1.5">
            <strong className="text-stone-900 block font-semibold text-sm">
              Prioridade na Transferência Escolar
            </strong>
            <p className="text-stone-600 leading-relaxed">
              Direito à matrícula dos dependentes em instituição de educação básica mais próxima do seu novo domicílio ou local de acolhimento protetivo.
            </p>
          </div>

          <div className="p-4 bg-white rounded border border-stone-200 space-y-1.5">
            <strong className="text-stone-900 block font-semibold text-sm">
              Inclusão em Programas Habitacionais
            </strong>
            <p className="text-stone-600 leading-relaxed">
              Prioridade legal em programas de habitação de interesse social municipais e federais para viabilizar independência e moradia segura.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
