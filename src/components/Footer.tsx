import React from 'react';
import { ActiveTab } from '../types';
import { Shield, PhoneCall } from 'lucide-react';

interface FooterProps {
  onNavigate: (tab: ActiveTab) => void;
  onTriggerQuickExit: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onTriggerQuickExit }) => {
  return (
    <footer className="no-print bg-stone-900 text-stone-300 border-t border-stone-800 mt-16 text-xs">
      {/* Faixa de Urgência no Rodapé */}
      <div className="bg-stone-950 py-4 px-4 md:px-8 border-b border-stone-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-stone-300">
            <Shield className="w-4 h-4 text-rose-500 shrink-0" />
            <span>Precisa sair desta página de imediato? Pressione <strong>ESC</strong> a qualquer momento.</span>
          </div>
          <button
            onClick={onTriggerQuickExit}
            className="px-3.5 py-1.5 bg-rose-700 hover:bg-rose-800 text-white rounded text-xs font-semibold transition-colors cursor-pointer"
          >
            Sair Agora e Limpar Sessão
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Coluna 1: Sobre */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm">Portal Acolher</h4>
            <p className="text-stone-400 text-xs leading-relaxed">
              Plataforma de conscientização cidadã, apoio institucional e suporte à Lei Maria da Penha (Lei nº 11.340/2006). Desenvolvida sob princípios de acessibilidade e sigilo absoluto.
            </p>
          </div>

          {/* Coluna 2: Navegação Rápida */}
          <div className="space-y-2">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">Módulos do Sistema</h4>
            <ul className="space-y-1.5 text-stone-400">
              <li>
                <button onClick={() => onNavigate('portal')} className="hover:text-white transition-colors cursor-pointer">
                  Início e Acolhimento
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('violencia')} className="hover:text-white transition-colors cursor-pointer">
                  5 Tipos de Violência (Art. 7º)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('legislacao')} className="hover:text-white transition-colors cursor-pointer">
                  Medidas Protetivas de Urgência
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('registro')} className="hover:text-white transition-colors cursor-pointer">
                  Diário Seguro de Fatos
                </button>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Código & Documentação Acadêmica */}
          <div className="space-y-2">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">Engenharia & Documentação</h4>
            <ul className="space-y-1.5 text-stone-400">
              <li>
                <button onClick={() => onNavigate('arquitetura')} className="hover:text-white transition-colors cursor-pointer">
                  Estrutura de Pastas e Código (HTML/CSS/JS/C#)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('paper')} className="hover:text-white transition-colors cursor-pointer">
                  Paper Acadêmico Completo (ABNT)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('relatorio')} className="hover:text-white transition-colors cursor-pointer">
                  Relatório Técnico de Execução (45 Horas)
                </button>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Canais Oficiais */}
          <div className="space-y-2">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">Canais Oficiais do Governo</h4>
            <div className="space-y-1.5 text-stone-400">
              <div>Central da Mulher: <strong className="text-white">Disque 180</strong></div>
              <div>Polícia Militar (Flagrante): <strong className="text-white">Ligue 190</strong></div>
              <div>SAMU (Emergência Médica): <strong className="text-white">Ligue 192</strong></div>
              <div>Defensoria Pública Geral: <strong className="text-white">Disque 129</strong></div>
            </div>
          </div>
        </div>

        {/* Rodapé Final com Copyright Limpo */}
        <div className="pt-6 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-stone-500 text-[11px]">
          <div>
            Portal Acolher · Projeto de Desenvolvimento de Software sobre Violência Doméstica.
          </div>
          <div className="flex items-center gap-4">
            <span>Fontes: Ministério das Mulheres · Lei Federal nº 11.340/2006</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
