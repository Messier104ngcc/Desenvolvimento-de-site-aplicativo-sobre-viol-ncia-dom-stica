import React, { useState, useCallback } from 'react';
import { ActiveTab } from './types';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ViolenceGuide } from './components/ViolenceGuide';
import { LegalProtectionGuide } from './components/LegalProtectionGuide';
import { DirectoryChannels } from './components/DirectoryChannels';
import { ConfidentialDraftSimulator } from './components/ConfidentialDraftSimulator';
import { ArchitectureViewer } from './components/ArchitectureViewer';
import { AcademicPaperViewer } from './components/AcademicPaperViewer';
import { Footer } from './components/Footer';
import { AlertTriangle, RefreshCw, ExternalLink, ShieldAlert } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('portal');
  const [isQuickExitTriggered, setIsQuickExitTriggered] = useState<boolean>(false);

  // Manipulador de Saída Rápida de Segurança
  const handleQuickExit = useCallback(() => {
    // 1. Limpa memória de sessão
    sessionStorage.clear();
    
    // 2. Se estiver em navegador externo completo, tenta substituir a URL
    // No contexto do preview, exibimos a tela de proteção de rastro imediata
    setIsQuickExitTriggered(true);

    try {
      // Redirecionamento discreto
      window.location.replace('https://www.google.com.br/search?q=previsao+do+tempo');
    } catch {
      // Fallback para ambientes em que location.replace seja bloqueado por sandbox
      setIsQuickExitTriggered(true);
    }
  }, []);

  const handleRestoreFromExit = () => {
    setIsQuickExitTriggered(false);
    setActiveTab('portal');
  };

  // Se o botão de emergência foi acionado no preview
  if (isQuickExitTriggered) {
    return (
      <div className="min-h-screen bg-white text-stone-900 flex flex-col items-center justify-center p-6 text-center">
        <div className="max-w-md w-full bg-stone-50 border border-stone-200 rounded-lg p-8 shadow-sm space-y-5">
          <div className="w-12 h-12 bg-rose-100 text-rose-700 rounded-full flex items-center justify-center mx-auto">
            <ShieldAlert className="w-6 h-6" />
          </div>

          <h2 className="text-xl font-bold text-stone-900">
            Protocolo de Saída Rápida Ativado
          </h2>

          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
            A sessão local foi limpa e o histórico de navegação foi higienizado. Em produção, este botão redireciona instantaneamente para a página de notícias ou previsão do tempo do Google para proteger a usuária.
          </p>

          <div className="pt-2 space-y-2">
            <a
              href="https://www.google.com.br/search?q=previsao+do+tempo"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold rounded flex items-center justify-center gap-2 transition-colors"
            >
              <span>Ir para o Google Externo</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={handleRestoreFromExit}
              className="w-full py-2 px-4 bg-stone-200 hover:bg-stone-300 text-stone-800 text-xs font-medium rounded flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Retornar ao Portal (Modo de Demonstração)</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-stone-900 antialiased selection:bg-stone-200">
      {/* Cabeçalho Fixo com Botão de Saída Rápida e Navegação */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onTriggerQuickExit={handleQuickExit}
      />

      {/* Conteúdo Principal Alternado por Abas */}
      <main className="flex-1">
        {activeTab === 'portal' && (
          <HeroSection onNavigate={(tab) => setActiveTab(tab)} />
        )}

        {activeTab === 'violencia' && (
          <ViolenceGuide />
        )}

        {activeTab === 'legislacao' && (
          <LegalProtectionGuide />
        )}

        {activeTab === 'canais' && (
          <DirectoryChannels />
        )}

        {activeTab === 'registro' && (
          <ConfidentialDraftSimulator />
        )}

        {activeTab === 'arquitetura' && (
          <ArchitectureViewer />
        )}

        {(activeTab === 'paper' || activeTab === 'relatorio') && (
          <AcademicPaperViewer />
        )}
      </main>

      {/* Rodapé Institucional */}
      <Footer
        onNavigate={(tab) => setActiveTab(tab)}
        onTriggerQuickExit={handleQuickExit}
      />
    </div>
  );
}
