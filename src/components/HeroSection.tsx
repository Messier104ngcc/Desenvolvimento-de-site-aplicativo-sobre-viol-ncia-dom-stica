import React from 'react';
import { ActiveTab } from '../types';
import { PhoneCall, ShieldCheck, BookOpen, Lock, MessageSquare, ArrowRight, Scale } from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (tab: ActiveTab) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-12">
      {/* Faixa Operacional e Institucional */}
      <div className="bg-white border-b border-stone-200 py-3">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-wrap items-center justify-between gap-y-2 text-xs text-stone-600 font-medium">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
              <span>Central Oficial de Atendimento à Mulher: <strong>Disque 180</strong></span>
              <span className="text-stone-300">·</span>
              <span>Ligação Gratuita 24h</span>
            </div>
            <div className="flex items-center gap-4 text-stone-500">
              <span>Lei Federal nº 11.340/2006</span>
              <span className="text-stone-300">·</span>
              <span>Proteção e Sigilo Assegurados</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Principal com Composição Editorial */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-stone-600 font-medium">
              <span>Rede de Proteção</span>
              <span>·</span>
              <span>Lei Maria da Penha</span>
              <span>·</span>
              <span>Acolhimento Cidadão</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif-title font-bold text-stone-900 tracking-tight leading-tight">
              Acolhimento, orientação jurídica e proteção integral para quem precisa.
            </h1>

            <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl">
              A violência doméstica não se limita à agressão física. Conheça as cinco modalidades
              tipificadas no Art. 7º da Lei 11.340/2006, entenda como funcionam as Medidas Protetivas
              de Urgência e acesse canais seguros com total confidencialidade.
            </p>

            {/* CTAs Funcionais Primários */}
            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={() => onNavigate('violencia')}
                className="px-5 py-3 text-sm font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-md transition-colors flex items-center gap-2 shadow-sm cursor-pointer"
              >
                <span>Conhecer os 5 Tipos de Violência</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate('canais')}
                className="px-5 py-3 text-sm font-semibold text-stone-800 bg-stone-100 hover:bg-stone-200 border border-stone-300 rounded-md transition-colors flex items-center gap-2 cursor-pointer"
              >
                <PhoneCall className="w-4 h-4 text-stone-700" />
                <span>Canais de Socorro e Delegacias</span>
              </button>
            </div>

            {/* Destaque de Emergência Imediata */}
            <div className="pt-4 border-t border-stone-200">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <a
                  href="tel:180"
                  className="p-3 bg-white border border-stone-200 rounded-md hover:border-stone-400 transition-colors block text-left group"
                >
                  <div className="text-[11px] text-stone-500 font-medium">Central à Mulher</div>
                  <div className="text-lg font-bold text-stone-900 group-hover:text-stone-700">Disque 180</div>
                  <div className="text-[11px] text-stone-500">Gratuito · 24 Horas</div>
                </a>

                <a
                  href="tel:190"
                  className="p-3 bg-rose-50 border border-rose-200 rounded-md hover:border-rose-300 transition-colors block text-left group"
                >
                  <div className="text-[11px] text-rose-700 font-medium">Polícia Militar</div>
                  <div className="text-lg font-bold text-rose-900">Ligue 190</div>
                  <div className="text-[11px] text-rose-700">Flagrante e Risco Iminente</div>
                </a>

                <a
                  href="https://wa.me/556196100180"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-stone-200 rounded-md hover:border-stone-400 transition-colors block text-left group"
                >
                  <div className="text-[11px] text-stone-500 font-medium">WhatsApp Federal</div>
                  <div className="text-sm font-bold text-stone-900 group-hover:text-stone-700">(61) 9610-0180</div>
                  <div className="text-[11px] text-stone-500">Denúncia Silenciosa por Texto</div>
                </a>
              </div>
            </div>
          </div>

          {/* Imagem Editorial Institucional de Apoio */}
          <div className="lg:col-span-5">
            <div className="relative rounded-lg overflow-hidden border border-stone-200 shadow-sm bg-stone-100">
              <img
                src="/src/assets/images/hero_support_haven_1794494314669.jpg"
                alt="Acolhimento e solidariedade a vítimas de violência doméstica"
                className="w-full h-[360px] sm:h-[420px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent flex flex-col justify-end p-6 text-white">
                <span className="text-xs uppercase tracking-widest text-stone-300 font-medium">
                  Solidariedade e Justiça
                </span>
                <p className="text-sm font-medium text-stone-100 mt-1">
                  "A violência doméstica contra a mulher não é problema de ordem privada; é crime e responsabilidade do Estado e da sociedade."
                </p>
                <span className="text-[11px] text-stone-300 mt-1">
                  Lei Maria da Penha (Lei nº 11.340)
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid de Recursos Principais da Aplicação */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 pt-4 pb-8">
        <div className="border-t border-stone-200 pt-8">
          <div className="mb-6">
            <h2 className="text-2xl font-serif-title font-bold text-stone-900">
              Módulos do Sistema e Ferramentas Práticas
            </h2>
            <p className="text-sm text-stone-600">
              Desenvolvido com arquitetura técnica modular para fins de apoio comunitário e comprovação acadêmica.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Card 1: Tipos de Violência */}
            <div
              onClick={() => onNavigate('violencia')}
              className="p-5 bg-white border border-stone-200 rounded-lg hover:border-stone-400 hover:shadow-sm transition-all cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="w-9 h-9 rounded bg-stone-100 flex items-center justify-center text-stone-800 mb-3">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-stone-900 text-base">5 Tipos de Violência</h3>
                <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                  Física, psicológica, sexual, patrimonial e moral explicadas com sinais de alerta práticos e o Ciclo da Violência.
                </p>
              </div>
              <span className="text-xs font-semibold text-stone-900 inline-flex items-center gap-1 mt-4">
                Acessar Guia <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>

            {/* Card 2: Lei Maria da Penha & MPU */}
            <div
              onClick={() => onNavigate('legislacao')}
              className="p-5 bg-white border border-stone-200 rounded-lg hover:border-stone-400 hover:shadow-sm transition-all cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="w-9 h-9 rounded bg-stone-100 flex items-center justify-center text-stone-800 mb-3">
                  <Scale className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-stone-900 text-base">Medidas Protetivas</h3>
                <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                  Como solicitar afastamento do agressor, proibição de contato e decisão judicial com prazo limite de até 48 horas.
                </p>
              </div>
              <span className="text-xs font-semibold text-stone-900 inline-flex items-center gap-1 mt-4">
                Ver Direitos <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>

            {/* Card 3: Diário Confidencial */}
            <div
              onClick={() => onNavigate('registro')}
              className="p-5 bg-white border border-stone-200 rounded-lg hover:border-stone-400 hover:shadow-sm transition-all cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="w-9 h-9 rounded bg-stone-100 flex items-center justify-center text-stone-800 mb-3">
                  <Lock className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-stone-900 text-base">Diário Sigiloso de Fatos</h3>
                <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                  Rascunho de relatos e evidências com criptografia cliente e código anônimo para levar à delegacia.
                </p>
              </div>
              <span className="text-xs font-semibold text-stone-900 inline-flex items-center gap-1 mt-4">
                Abrir Diário <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>

            {/* Card 4: Arquitetura & Paper */}
            <div
              onClick={() => onNavigate('arquitetura')}
              className="p-5 bg-stone-900 text-white border border-stone-800 rounded-lg hover:bg-stone-800 transition-all cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="w-9 h-9 rounded bg-stone-800 flex items-center justify-center text-stone-200 mb-3">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-white text-base">Código, Pastas & Paper</h3>
                <p className="text-xs text-stone-300 mt-2 leading-relaxed">
                  Explorador interativo da árvore de arquivos (HTML, CSS, JS, C# .NET, SQL) e Paper Acadêmico ABNT de 45h.
                </p>
              </div>
              <span className="text-xs font-semibold text-stone-100 inline-flex items-center gap-1 mt-4">
                Ver Documentação <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
