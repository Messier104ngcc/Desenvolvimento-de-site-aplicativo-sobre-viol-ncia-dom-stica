import React, { useState } from 'react';
import { SUPPORT_CHANNELS, BRAZILIAN_STATES } from '../data/legalAndSupportData';
import { SupportChannel } from '../types';
import { Phone, MessageSquare, ExternalLink, Shield, MapPin, AlertCircle, Clock, Building } from 'lucide-react';

export const DirectoryChannels: React.FC = () => {
  const [selectedUf, setSelectedUf] = useState<string>('SP');
  const [categoryFilter, setCategoryFilter] = useState<string>('Todos');

  const selectedStateObj = BRAZILIAN_STATES.find(s => s.uf === selectedUf) || BRAZILIAN_STATES[0];

  const filteredChannels = categoryFilter === 'Todos'
    ? SUPPORT_CHANNELS
    : SUPPORT_CHANNELS.filter(c => c.category === categoryFilter);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 space-y-12">
      {/* Banner de Canais com Imagem Editorial de Centro de Acolhimento */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-b border-stone-200 pb-8">
        <div className="lg:col-span-8 space-y-4">
          <span className="text-xs uppercase tracking-widest text-stone-500 font-semibold">
            Rede Nacional de Proteção · Atendimento 24 Horas
          </span>
          <h1 className="text-3xl sm:text-4xl font-serif-title font-bold text-stone-900">
            Canais de Atendimento, Denúncia e Socorro Imediato
          </h1>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed max-w-2xl">
            O atendimento é prestado por equipes multidisciplinares com sigilo absoluto. Se você estiver em perigo agora, ligue <strong>190</strong>. Para denúncias, acolhimento e orientações sem urgência física, ligue <strong>180</strong> ou envie mensagem de texto pelo WhatsApp.
          </p>
        </div>

        <div className="lg:col-span-4">
          <div className="rounded-lg overflow-hidden border border-stone-200 shadow-sm bg-stone-100">
            <img
              src="/src/assets/images/community_shelter_center_1794494315816.jpg"
              alt="Centro acolhedor de referência e atendimento à mulher"
              className="w-full h-44 object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="p-3 bg-white text-stone-700 text-xs flex justify-between items-center border-t border-stone-200">
              <span className="font-medium">Centros de Referência (CRAM/CRAS)</span>
              <span className="text-stone-400">Atendimento Humanizado</span>
            </div>
          </div>
        </div>
      </div>

      {/* Destaques Emergenciais Rápidos */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Disque 180 */}
        <div className="p-6 bg-white border border-stone-200 rounded-lg shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono font-bold text-stone-500">CANAL FEDERAL</span>
              <span className="text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                Gratuito & Anônimo
              </span>
            </div>
            <h3 className="text-xl font-bold text-stone-900">Disque 180</h3>
            <p className="text-xs text-stone-600 mt-2 leading-relaxed">
              Central de Atendimento à Mulher. Escuta qualificada, orientações sobre direitos e encaminhamento para serviços da rede especializada.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
            <span className="text-xs text-stone-500">24 horas / 7 dias</span>
            <a
              href="tel:180"
              className="px-4 py-2 bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold rounded-md flex items-center gap-1.5 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              Ligar 180
            </a>
          </div>
        </div>

        {/* 190 Polícia Militar */}
        <div className="p-6 bg-rose-50/60 border border-rose-200 rounded-lg shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono font-bold text-rose-800">EMERGÊNCIA POLICIAL</span>
              <span className="text-[11px] font-medium text-rose-800 bg-rose-100 px-2 py-0.5 rounded">
                Flagrante Imediato
              </span>
            </div>
            <h3 className="text-xl font-bold text-rose-950">Ligue 190</h3>
            <p className="text-xs text-rose-900 mt-2 leading-relaxed">
              Para situações em andamento, arrombamento, ameaça armada, violência física presente ou descumprimento de medida protetiva.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-rose-200 flex items-center justify-between">
            <span className="text-xs text-rose-800">Socorro com viatura</span>
            <a
              href="tel:190"
              className="px-4 py-2 bg-rose-700 hover:bg-rose-800 text-white text-xs font-semibold rounded-md flex items-center gap-1.5 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              Ligar 190
            </a>
          </div>
        </div>

        {/* WhatsApp Oficial */}
        <div className="p-6 bg-white border border-stone-200 rounded-lg shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono font-bold text-stone-500">CANAL DISCRETO</span>
              <span className="text-[11px] font-medium text-stone-700 bg-stone-100 px-2 py-0.5 rounded">
                Mensagem de Texto
              </span>
            </div>
            <h3 className="text-xl font-bold text-stone-900">WhatsApp 180</h3>
            <p className="text-xs text-stone-600 mt-2 leading-relaxed">
              (61) 9610-0180. Ideal se você não puder falar em voz alta por estar no mesmo ambiente que o agressor. Envie texto e fotos com sigilo.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
            <span className="text-xs text-stone-500">Atendimento Federal</span>
            <a
              href="https://wa.me/556196100180"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold rounded-md flex items-center gap-1.5 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              Abrir WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Localizador por Estado (UF) e Delegacia Eletrônica */}
      <div className="bg-stone-50 border border-stone-200 rounded-lg p-6 sm:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 pb-4">
          <div>
            <span className="text-xs uppercase tracking-widest text-stone-500 font-semibold">
              Descentralização dos Serviços
            </span>
            <h2 className="text-2xl font-serif-title font-bold text-stone-900 mt-0.5">
              Delegacias e Atendimento por Estado
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="ufSelect" className="text-xs font-medium text-stone-700">
              Selecione o Estado (UF):
            </label>
            <select
              id="ufSelect"
              value={selectedUf}
              onChange={(e) => setSelectedUf(e.target.value)}
              className="px-3 py-1.5 text-xs bg-white border border-stone-300 rounded font-semibold text-stone-900 focus:outline-none"
            >
              {BRAZILIAN_STATES.map((state) => (
                <option key={state.uf} value={state.uf}>
                  {state.uf} - {state.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 bg-white border border-stone-200 rounded-lg space-y-3">
            <div className="flex items-center gap-2 text-stone-900 font-semibold text-sm">
              <MapPin className="w-4 h-4 text-stone-700" />
              <span>Unidade Policial e DEAM em {selectedStateObj.name} ({selectedStateObj.uf})</span>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              Capital: <strong>{selectedStateObj.capital}</strong>. Em todas as cidades do estado, qualquer Delegacia de Polícia Civil é obrigada a registrar o Boletim de Ocorrência da Lei Maria da Penha com atendimento prioritário e encaminhar imediatamente o pedido de Medida Protetiva de Urgência ao Judiciário.
            </p>
            <div className="pt-2">
              <a
                href={selectedStateObj.deamUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-900 hover:text-stone-700 underline"
              >
                Acessar Portal da Delegacia Eletrônica
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div className="p-5 bg-white border border-stone-200 rounded-lg space-y-3">
            <div className="flex items-center gap-2 text-stone-900 font-semibold text-sm">
              <Building className="w-4 h-4 text-stone-700" />
              <span>Casa da Mulher Brasileira & Defensoria Pública</span>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              A Casa da Mulher Brasileira integra em um mesmo espaço físico: DEAM, Juizado de Violência Doméstica, Ministério Público, Defensoria Pública (NUDEM), alojamento temporário e atendimento psicossocial contínuo.
            </p>
            <div className="text-xs text-stone-500 pt-2 font-medium">
              Defensoria Pública Estadual: <strong>Disque 129</strong> (atendimento jurídico gratuito).
            </div>
          </div>
        </div>
      </div>

      {/* Diretório Geral Filtrável de Apoio */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h3 className="text-lg font-serif-title font-bold text-stone-900">
            Lista Completa de Serviços Institucionais
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {['Todos', 'Nacional', 'Seguranca', 'Juridico'].map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoryFilter(cat)}
                className={`px-3 py-1 text-xs rounded-md font-medium transition-colors cursor-pointer ${
                  categoryFilter === cat
                    ? 'bg-stone-900 text-white'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                {cat === 'Seguranca' ? 'Segurança' : cat === 'Juridico' ? 'Jurídico' : cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredChannels.map((channel) => (
            <div
              key={channel.id}
              className="p-5 bg-white border border-stone-200 rounded-lg space-y-3 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono text-stone-500 uppercase">
                    {channel.category}
                  </span>
                  <span className="text-xs font-semibold text-stone-800 bg-stone-100 px-2 py-0.5 rounded">
                    {channel.phone}
                  </span>
                </div>
                <h4 className="font-semibold text-stone-900 text-sm mt-1">{channel.name}</h4>
                <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                  {channel.description}
                </p>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-stone-100 text-xs text-stone-500">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {channel.hours}
                </span>
                {channel.actionUrl && (
                  <a
                    href={channel.actionUrl}
                    className="font-semibold text-stone-900 hover:underline inline-flex items-center gap-1"
                  >
                    Acessar <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
