import React, { useState } from 'react';
import { VIOLENCE_TYPES, CYCLE_STAGES } from '../data/legalAndSupportData';
import { ViolenceType } from '../types';
import { ShieldAlert, Brain, HeartCrack, Coins, MessageSquareX, CheckCircle2, AlertCircle, HelpCircle, ArrowRight } from 'lucide-react';

export const ViolenceGuide: React.FC = () => {
  const [selectedType, setSelectedType] = useState<ViolenceType>(VIOLENCE_TYPES[0]);
  const [activeCyclePhase, setActiveCyclePhase] = useState<number>(1);
  const [checkedSigns, setCheckedSigns] = useState<Record<string, boolean>>({});

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldAlert': return <ShieldAlert className="w-5 h-5" />;
      case 'Brain': return <Brain className="w-5 h-5" />;
      case 'HeartCrack': return <HeartCrack className="w-5 h-5" />;
      case 'Coins': return <Coins className="w-5 h-5" />;
      case 'MessageSquareX': return <MessageSquareX className="w-5 h-5" />;
      default: return <AlertCircle className="w-5 h-5" />;
    }
  };

  const toggleSign = (signKey: string) => {
    setCheckedSigns(prev => ({
      ...prev,
      [signKey]: !prev[signKey]
    }));
  };

  const checkedCount = Object.values(checkedSigns).filter(Boolean).length;

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 space-y-12">
      {/* Cabeçalho da Seção */}
      <div className="border-b border-stone-200 pb-6">
        <span className="text-xs uppercase tracking-widest text-stone-500 font-semibold">
          Diretrizes da Lei nº 11.340/2006 · Art. 7º
        </span>
        <h1 className="text-3xl sm:text-4xl font-serif-title font-bold text-stone-900 mt-1">
          Os Cinco Tipos de Violência Doméstica
        </h1>
        <p className="text-stone-600 text-sm sm:text-base mt-2 max-w-3xl">
          A Lei Maria da Penha define com rigor que a violência contra a mulher se manifesta de
          múltiplas formas além do dano corporal. Compreender cada uma delas é essencial para
          reconhecer abusos velados e buscar a devida proteção jurídica.
        </p>
      </div>

      {/* Seletor Segmentado dos 5 Tipos */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-2 bg-stone-100 p-1.5 rounded-lg border border-stone-200">
        {VIOLENCE_TYPES.map((item) => {
          const isSelected = selectedType.id === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setSelectedType(item)}
              className={`flex items-center gap-2 p-3 text-left rounded-md transition-all cursor-pointer ${
                isSelected
                  ? 'bg-white text-stone-900 shadow-sm font-semibold'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/60'
              }`}
            >
              <span className={isSelected ? 'text-stone-900' : 'text-stone-500'}>
                {getIcon(item.iconName)}
              </span>
              <span className="text-xs sm:text-sm truncate">{item.name}</span>
            </button>
          );
        })}
      </div>

      {/* Detalhamento do Tipo Selecionado */}
      <div className="bg-white border border-stone-200 rounded-lg p-6 sm:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-stone-200">
          <div>
            <span className="text-xs font-mono text-stone-500 font-medium">
              {selectedType.article}
            </span>
            <h2 className="text-2xl font-serif-title font-bold text-stone-900 mt-0.5">
              {selectedType.name}
            </h2>
          </div>
          <div className="text-xs text-stone-500 bg-stone-50 border border-stone-200 px-3 py-1.5 rounded">
            Definição Legal Oficial
          </div>
        </div>

        <div className="text-sm text-stone-700 leading-relaxed font-medium bg-stone-50 p-4 rounded border border-stone-200 italic">
          "{selectedType.legalText}"
        </div>

        <p className="text-sm text-stone-600 leading-relaxed">
          {selectedType.description}
        </p>

        {/* Sinais de Alerta Práticos */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-stone-900 mb-3 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-stone-700" />
            Sinais de Alerta e Condutas Comuns
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
            {selectedType.warningSigns.map((sign, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 p-3 rounded bg-stone-50 border border-stone-200 text-xs text-stone-700"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-stone-400 mt-1.5 shrink-0" />
                <span>{sign}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Como Agir */}
        <div className="p-4 bg-stone-900 text-stone-100 rounded-md text-xs sm:text-sm space-y-1">
          <div className="font-semibold text-white flex items-center gap-2">
            <span>Orientação de Ação e Amparo Legal:</span>
          </div>
          <p className="text-stone-300 leading-relaxed">
            {selectedType.actionGuidance}
          </p>
        </div>
      </div>

      {/* Módulo Educacional do Ciclo da Violência (Leonore Walker) */}
      <div className="border border-stone-200 bg-white rounded-lg p-6 sm:p-8 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-200 pb-4">
          <div>
            <span className="text-xs font-mono text-stone-500 font-medium">Fundamentação Psicológica e Social</span>
            <h2 className="text-2xl font-serif-title font-bold text-stone-900">
              O Ciclo da Violência (Teoria de Leonore Walker)
            </h2>
          </div>
          <span className="text-xs text-stone-500">
            A violência doméstica raramente é um fato isolado; repete-se em espiral.
          </span>
        </div>

        <p className="text-sm text-stone-600">
          Pesquisas no campo da psicologia revelam que os relacionamentos abusivos costumam transitar por
          três etapas cíclicas que se sucedem e, com o tempo, reduzem os intervalos entre si, tornando as agressões cada vez mais graves.
        </p>

        {/* As 3 Fases do Ciclo */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {CYCLE_STAGES.map((stage) => {
            const isActive = activeCyclePhase === stage.phase;
            return (
              <div
                key={stage.phase}
                onClick={() => setActiveCyclePhase(stage.phase)}
                className={`p-5 rounded-lg border transition-all cursor-pointer ${
                  isActive
                    ? 'border-stone-900 bg-stone-50 shadow-sm'
                    : 'border-stone-200 bg-white hover:border-stone-300'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold text-stone-600">
                    ETAPA {stage.phase} DE 3
                  </span>
                  {isActive && (
                    <span className="text-[10px] uppercase font-bold text-stone-900 bg-stone-200 px-2 py-0.5 rounded">
                      Em Foco
                    </span>
                  )}
                </div>
                <h3 className="font-semibold text-stone-900 text-base">{stage.title}</h3>
                <p className="text-xs text-stone-500 mt-0.5">{stage.subtitle}</p>

                <p className="text-xs text-stone-700 mt-3 leading-relaxed">
                  {stage.description}
                </p>

                <div className="mt-4 pt-3 border-t border-stone-200 text-[11px] text-stone-600">
                  <strong className="text-stone-800">Impacto na Vítima:</strong> {stage.victimFeelings}
                </div>
              </div>
            );
          })}
        </div>

        <div className="p-4 bg-stone-100 rounded-md border border-stone-200 text-xs text-stone-700 flex items-start gap-3">
          <HelpCircle className="w-5 h-5 text-stone-600 shrink-0 mt-0.5" />
          <div>
            <strong className="text-stone-900 block mb-0.5">Como Romper o Ciclo?</strong>
            O ciclo dificilmente cessa sem intervenção externa. A "Fase de Lua de Mel" não significa que a pessoa agressora mudou espontaneamente; é o momento mais perigoso de convencimento da vítima para que retire medidas protetivas. O apoio de familiares, centros de referência (CRAM) e medidas judiciais é decisivo.
          </div>
        </div>
      </div>

      {/* Checklist Interativo e Confidencial de Autoavaliação */}
      <div className="bg-stone-50 border border-stone-200 rounded-lg p-6 sm:p-8 space-y-6">
        <div>
          <span className="text-xs uppercase tracking-widest text-stone-500 font-semibold">
            Autoavaliação Confidencial (Nenhum dado é salvo no servidor)
          </span>
          <h2 className="text-2xl font-serif-title font-bold text-stone-900 mt-1">
            Questionário de Reconhecimento de Sinais de Alerta
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-1">
            Selecione as situações abaixo que você já presenciou ou sofre no seu relacionamento:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            { id: 'q1', text: 'Sente necessidade constante de medir palavras para não provocar irritação no parceiro?' },
            { id: 'q2', text: 'É impedida de trabalhar, estudar ou gerenciar o próprio dinheiro com liberdade?' },
            { id: 'q3', text: 'Seu parceiro exige senhas do celular, redes sociais ou monitora seus deslocamentos?' },
            { id: 'q4', text: 'Já foi coagida a manter relações íntimas quando não desejava ou estava indisposta?' },
            { id: 'q5', text: 'Seu parceiro já quebrou seus objetos pessoais, celular ou ferramentas de trabalho?' },
            { id: 'q6', text: 'Já foi empurrada, segurada com força excessiva, ameaçada ou sofreu agressões corporais?' },
            { id: 'q7', text: 'É humilhada, chamada de louca ou ridicularizada perante familiares ou amigos?' },
            { id: 'q8', text: 'Ele ameaça tirar a guarda dos seus filhos ou fazer mal a você se cogitar a separação?' }
          ].map((item) => {
            const isChecked = !!checkedSigns[item.id];
            return (
              <label
                key={item.id}
                onClick={() => toggleSign(item.id)}
                className={`p-3.5 rounded-md border text-xs sm:text-sm flex items-start gap-3 cursor-pointer transition-colors ${
                  isChecked
                    ? 'bg-white border-stone-800 text-stone-900 shadow-sm'
                    : 'bg-white/80 border-stone-200 text-stone-600 hover:bg-white'
                }`}
              >
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => {}}
                  className="mt-0.5 rounded text-stone-900 focus:ring-0 border-stone-300 shrink-0"
                />
                <span className="leading-snug">{item.text}</span>
              </label>
            );
          })}
        </div>

        {/* Resposta Orientativa com Base nas Respostas */}
        <div className="p-4 bg-white border border-stone-200 rounded-md">
          <div className="flex items-center justify-between gap-4">
            <div>
              <span className="text-xs text-stone-500 font-medium">Sinais Identificados:</span>
              <div className="text-lg font-bold text-stone-900">
                {checkedCount} de 8 comportamentos selecionados
              </div>
            </div>
            {checkedCount > 0 ? (
              <div className="text-right">
                <span className="inline-block text-xs font-semibold px-2.5 py-1 bg-rose-100 text-rose-800 rounded">
                  Atenção: Relação Abusiva Identificada
                </span>
              </div>
            ) : (
              <div className="text-right">
                <span className="inline-block text-xs font-medium text-stone-500">
                  Marque as opções para ver a orientação
                </span>
              </div>
            )}
          </div>

          {checkedCount > 0 && (
            <p className="text-xs text-stone-600 mt-3 pt-3 border-t border-stone-100 leading-relaxed">
              Os comportamentos assinalados constituem violações dos seus direitos e configuram violência psicológica, patrimonial ou física conforme a Lei Maria da Penha. Você tem direito a apoio psicológico e jurídico gratuito. <strong>Ligue 180</strong> a qualquer momento para conversar com uma atendente especializada sem precisar se identificar.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
