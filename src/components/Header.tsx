import React, { useEffect, useState } from 'react';
import { ActiveTab } from '../types';
import { Shield, PhoneCall, AlertTriangle, X } from 'lucide-react';

interface HeaderProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  onTriggerQuickExit: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onTriggerQuickExit
}) => {
  const [showExitConfirm, setShowExitConfirm] = useState(false);

  // Keyboard shortcut: Escape triggers quick exit
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onTriggerQuickExit();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onTriggerQuickExit]);

  return (
    <>
      {/* Top Bar de Segurança e Alerta Imediato */}
      <div className="bg-stone-900 text-stone-200 border-b border-stone-800 text-xs py-2 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Shield className="w-3.5 h-3.5 text-stone-400 shrink-0" />
            <span className="font-medium text-stone-300">Navegação Sigilosa:</span>
            <span className="hidden sm:inline text-stone-400">
              Se precisar fechar esta página repentinamente, pressione a tecla
            </span>
            <kbd className="px-1.5 py-0.5 bg-stone-800 border border-stone-700 rounded text-stone-200 font-mono text-[10px]">
              ESC
            </kbd>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-stone-400 text-[11px] hidden md:inline">Emergência: Ligue 190</span>
            <button
              onClick={() => setShowExitConfirm(true)}
              className="text-stone-300 hover:text-white underline text-[11px] cursor-pointer"
            >
              Como funciona a saída rápida?
            </button>
          </div>
        </div>
      </div>

      {/* Top Bar Contract (3 Zonas: Wordmark — Links — 1 Primary Action) */}
      <header className="sticky top-0 z-40 bg-stone-50/95 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between gap-8">
          {/* Zona 1: Brand Wordmark (Single text element) */}
          <button
            onClick={() => setActiveTab('portal')}
            className="text-lg font-bold tracking-tight text-stone-900 whitespace-nowrap shrink-0 text-left hover:text-stone-700 transition-colors"
          >
            Portal Acolher
          </button>

          {/* Zona 2: Nav links (4 a 5 links concisos, single-line) */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-stone-600">
            <button
              onClick={() => setActiveTab('portal')}
              className={`hover:text-stone-900 transition-colors whitespace-nowrap shrink-0 pb-1 cursor-pointer ${
                activeTab === 'portal' ? 'text-stone-950 font-semibold border-b-2 border-stone-900' : ''
              }`}
            >
              Início
            </button>
            <button
              onClick={() => setActiveTab('violencia')}
              className={`hover:text-stone-900 transition-colors whitespace-nowrap shrink-0 pb-1 cursor-pointer ${
                activeTab === 'violencia' ? 'text-stone-950 font-semibold border-b-2 border-stone-900' : ''
              }`}
            >
              Tipos de Violência
            </button>
            <button
              onClick={() => setActiveTab('legislacao')}
              className={`hover:text-stone-900 transition-colors whitespace-nowrap shrink-0 pb-1 cursor-pointer ${
                activeTab === 'legislacao' ? 'text-stone-950 font-semibold border-b-2 border-stone-900' : ''
              }`}
            >
              Lei Maria da Penha
            </button>
            <button
              onClick={() => setActiveTab('canais')}
              className={`hover:text-stone-900 transition-colors whitespace-nowrap shrink-0 pb-1 cursor-pointer ${
                activeTab === 'canais' ? 'text-stone-950 font-semibold border-b-2 border-stone-900' : ''
              }`}
            >
              Canais 180 / 190
            </button>
            <button
              onClick={() => setActiveTab('registro')}
              className={`hover:text-stone-900 transition-colors whitespace-nowrap shrink-0 pb-1 cursor-pointer ${
                activeTab === 'registro' ? 'text-stone-950 font-semibold border-b-2 border-stone-900' : ''
              }`}
            >
              Diário Seguro
            </button>
            <button
              onClick={() => setActiveTab('arquitetura')}
              className={`hover:text-stone-900 transition-colors whitespace-nowrap shrink-0 pb-1 cursor-pointer ${
                activeTab === 'arquitetura' ? 'text-stone-950 font-semibold border-b-2 border-stone-900' : ''
              }`}
            >
              Código & Pastas
            </button>
            <button
              onClick={() => setActiveTab('paper')}
              className={`hover:text-stone-900 transition-colors whitespace-nowrap shrink-0 pb-1 cursor-pointer ${
                activeTab === 'paper' || activeTab === 'relatorio' ? 'text-stone-950 font-semibold border-b-2 border-stone-900' : ''
              }`}
            >
              Paper Acadêmico
            </button>
          </nav>

          {/* Zona 3: 1 Primary Action (Botão de Saída Imediata de Segurança) */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onTriggerQuickExit}
              className="px-3.5 py-2 text-xs font-semibold text-white bg-rose-700 hover:bg-rose-800 rounded-md transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 shadow-sm cursor-pointer"
              title="Redireciona imediatamente para o Google e limpa rastros de formulário"
            >
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>Sair Imediatamente [ESC]</span>
            </button>
          </div>
        </div>

        {/* Barra de Navegação Rápida para Dispositivos Móveis */}
        <div className="lg:hidden flex items-center overflow-x-auto px-4 py-2 bg-stone-100 border-t border-stone-200 text-xs font-medium gap-3 scrollbar-none">
          <button
            onClick={() => setActiveTab('portal')}
            className={`whitespace-nowrap px-2.5 py-1 rounded ${activeTab === 'portal' ? 'bg-stone-900 text-white' : 'text-stone-700'}`}
          >
            Início
          </button>
          <button
            onClick={() => setActiveTab('violencia')}
            className={`whitespace-nowrap px-2.5 py-1 rounded ${activeTab === 'violencia' ? 'bg-stone-900 text-white' : 'text-stone-700'}`}
          >
            5 Tipos de Violência
          </button>
          <button
            onClick={() => setActiveTab('legislacao')}
            className={`whitespace-nowrap px-2.5 py-1 rounded ${activeTab === 'legislacao' ? 'bg-stone-900 text-white' : 'text-stone-700'}`}
          >
            Lei Maria da Penha
          </button>
          <button
            onClick={() => setActiveTab('canais')}
            className={`whitespace-nowrap px-2.5 py-1 rounded ${activeTab === 'canais' ? 'bg-stone-900 text-white' : 'text-stone-700'}`}
          >
            Canais de Ajuda
          </button>
          <button
            onClick={() => setActiveTab('registro')}
            className={`whitespace-nowrap px-2.5 py-1 rounded ${activeTab === 'registro' ? 'bg-stone-900 text-white' : 'text-stone-700'}`}
          >
            Diário Seguro
          </button>
          <button
            onClick={() => setActiveTab('arquitetura')}
            className={`whitespace-nowrap px-2.5 py-1 rounded ${activeTab === 'arquitetura' ? 'bg-stone-900 text-white' : 'text-stone-700'}`}
          >
            Código & Pastas
          </button>
          <button
            onClick={() => setActiveTab('paper')}
            className={`whitespace-nowrap px-2.5 py-1 rounded ${activeTab === 'paper' || activeTab === 'relatorio' ? 'bg-stone-900 text-white' : 'text-stone-700'}`}
          >
            Paper Acadêmico
          </button>
        </div>
      </header>

      {/* Modal Educacional sobre Saída Rápida */}
      {showExitConfirm && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6 shadow-xl border border-stone-200">
            <div className="flex items-center justify-between pb-3 border-b border-stone-200">
              <h3 className="text-base font-bold text-stone-900 flex items-center gap-2">
                <Shield className="w-5 h-5 text-rose-700" />
                Segurança e Privacidade do Usuário
              </h3>
              <button
                onClick={() => setShowExitConfirm(false)}
                className="text-stone-400 hover:text-stone-700 p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="py-4 space-y-3 text-sm text-stone-600">
              <p>
                <strong>O que é o Botão de Saída Rápida?</strong> É uma salvaguarda para mulheres em situação de coabitação com o agressor.
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs text-stone-700">
                <li>Ao clicar ou pressionar a tecla <strong>ESC</strong>, você é redirecionada instantaneamente para a previsão do tempo no Google.</li>
                <li>Qualquer rascunho temporário mantido em memória de sessão é imediatamente apagado.</li>
                <li>O botão substitui a página no histórico imediato da aba, diminuindo o risco de visualização indevida.</li>
              </ul>
              <p className="text-xs text-stone-500 italic pt-2">
                Dica de segurança: Sempre que possível, utilize a aba anônima do seu navegador e exclua o histórico de buscas após consultar canais de ajuda.
              </p>
            </div>
            <div className="flex items-center justify-end gap-3 pt-3 border-t border-stone-200">
              <button
                onClick={() => setShowExitConfirm(false)}
                className="px-4 py-2 text-xs font-medium text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-md"
              >
                Entendido
              </button>
              <button
                onClick={onTriggerQuickExit}
                className="px-4 py-2 text-xs font-medium text-white bg-rose-700 hover:bg-rose-800 rounded-md"
              >
                Testar Saída Agora
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
