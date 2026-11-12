import React, { useState } from 'react';
import { Lock, ShieldAlert, Download, Trash2, Key, CheckCircle, AlertTriangle, FileText, Printer } from 'lucide-react';

interface EntryItem {
  protocol: string;
  date: string;
  violenceType: string;
  municipio: string;
  uf: string;
  risk: string;
  description: string;
  witnesses: string;
  measuresRequested: string[];
  createdAt: string;
}

export const ConfidentialDraftSimulator: React.FC = () => {
  const [date, setDate] = useState<string>(new Date().toISOString().split('T')[0]);
  const [violenceType, setViolenceType] = useState<string>('Psicológica');
  const [municipio, setMunicipio] = useState<string>('São Paulo');
  const [uf, setUf] = useState<string>('SP');
  const [risk, setRisk] = useState<string>('Grave');
  const [description, setDescription] = useState<string>('');
  const [witnesses, setWitnesses] = useState<string>('');
  const [solicitaAfastamento, setSolicitaAfastamento] = useState<boolean>(true);
  const [solicitaDistancia, setSolicitaDistancia] = useState<boolean>(true);
  const [solicitaArmas, setSolicitaArmas] = useState<boolean>(false);
  const [pin, setPin] = useState<string>('');
  const [isSaved, setIsSaved] = useState<boolean>(false);
  const [savedProtocol, setSavedProtocol] = useState<string>('');
  const [entries, setEntries] = useState<EntryItem[]>([]);

  const handleSaveDraft = (e: React.FormEvent) => {
    e.preventDefault();
    if (!description.trim()) return;

    const protocolCode = `PROT-ACOLHER-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
    const measures: string[] = [];
    if (solicitaAfastamento) measures.push('Afastamento Imediato do Lar (Art. 22, II)');
    if (solicitaDistancia) measures.push('Proibição de Contato e Distância Mínima (Art. 22, III)');
    if (solicitaArmas) measures.push('Apreensão de Arma de Fogo (Art. 22, I)');

    const newEntry: EntryItem = {
      protocol: protocolCode,
      date,
      violenceType,
      municipio,
      uf,
      risk,
      description,
      witnesses,
      measuresRequested: measures,
      createdAt: new Date().toLocaleString('pt-BR')
    };

    setEntries([newEntry, ...entries]);
    setSavedProtocol(protocolCode);
    setIsSaved(true);
  };

  const handleClearMemory = () => {
    setDescription('');
    setWitnesses('');
    setPin('');
    setEntries([]);
    setIsSaved(false);
    setSavedProtocol('');
    sessionStorage.clear();
  };

  const handleDownloadTxt = (entry: EntryItem) => {
    const textContent = `======================================================
PORTAL ACOLHER - RASCUNHO CONFIDENCIAL DE OCORRÊNCIA
(Documento de Apoio para Apresentação na DEAM / Defensoria)
======================================================
CÓDIGO DE PROTOCOLO: ${entry.protocol}
DATA DO REGISTRO: ${entry.createdAt}
DATA DO FATO: ${entry.date}
LOCALIZAÇÃO: ${entry.municipio} - ${entry.uf}
TIPO DE VIOLÊNCIA INFORMADA: ${entry.violenceType}
GRAU DE RISCO ESTIMADO: ${entry.risk}

MEDIDAS PROTETIVAS REQUERIDAS (LEI 11.340/2006):
${entry.measuresRequested.map(m => `- ${m}`).join('\n')}

NARRATIVA CIRCUNSTANCIADA DOS FATOS:
${entry.description}

TESTEMUNHAS / PROVAS DEPOSITADAS:
${entry.witnesses || 'Nenhuma testemunha informada'}

AVISO LEGAL:
Este rascunho auxilia a vítima a organizar a cronologia dos fatos
para depoimento perante a Autoridade Policial ou Defensoria Pública.
Em caso de risco iminente, acione imediatamente a Polícia Militar (190).
======================================================`;

    const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `relato-apoio-${entry.protocol}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 space-y-10">
      {/* Cabeçalho */}
      <div className="border-b border-stone-200 pb-6">
        <span className="text-xs uppercase tracking-widest text-stone-500 font-semibold">
          Ferramenta Cidadã de Pré-Registro Seguro
        </span>
        <h1 className="text-3xl sm:text-4xl font-serif-title font-bold text-stone-900 mt-1">
          Diário Sigiloso de Relato e Evidências
        </h1>
        <p className="text-stone-600 text-sm sm:text-base mt-2 max-w-3xl leading-relaxed">
          Diante de uma agressão, o choque emocional muitas vezes dificulta recordar datas, horários e detalhes no momento do Boletim de Ocorrência. Esta ferramenta permite organizar cronologicamente os fatos com sigilo no seu próprio dispositivo, gerando um documento estruturado para levar à Delegacia da Mulher (DEAM) ou Defensoria Pública.
        </p>
      </div>

      {/* Alerta de Segurança */}
      <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg text-xs sm:text-sm text-amber-900 flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
        <div>
          <strong className="block font-semibold">Aviso Crítico de Segurança:</strong>
          Se você estiver em perigo imediato, não gaste tempo preenchendo formulários: ligue <strong>190</strong> imediatamente. Este diário é executado estritamente na memória do seu navegador. Ao fechar a aba ou clicar em "Apagar Rastro", nenhum dado permanece salvo.
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Formulário de Registro */}
        <div className="lg:col-span-7 bg-white border border-stone-200 rounded-lg p-6 sm:p-8 space-y-5 shadow-sm">
          <div className="flex items-center justify-between border-b border-stone-100 pb-3">
            <h2 className="text-base font-bold text-stone-900 flex items-center gap-2">
              <FileText className="w-4 h-4 text-stone-700" />
              Rascunho de Ocorrência para a DEAM
            </h2>
            <span className="text-[11px] text-stone-500 bg-stone-100 px-2 py-0.5 rounded">
              Memória Local e Efêmera
            </span>
          </div>

          <form onSubmit={handleSaveDraft} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Data Aproximada do Acontecimento
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                  className="w-full text-xs p-2.5 bg-stone-50 border border-stone-300 rounded focus:bg-white focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Tipo Principal de Violência (Art. 7º)
                </label>
                <select
                  value={violenceType}
                  onChange={(e) => setViolenceType(e.target.value)}
                  className="w-full text-xs p-2.5 bg-stone-50 border border-stone-300 rounded focus:bg-white focus:outline-none"
                >
                  <option value="Física">Violência Física (agressão, lesão corporal)</option>
                  <option value="Psicológica">Violência Psicológica (ameaça, humilhação, controle)</option>
                  <option value="Sexual">Violência Sexual (relação forçada, coação)</option>
                  <option value="Patrimonial">Violência Patrimonial (retenção de bens/cartões)</option>
                  <option value="Moral">Violência Moral (injúria, calúnia, difamação)</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Município do Fato
                </label>
                <input
                  type="text"
                  value={municipio}
                  onChange={(e) => setMunicipio(e.target.value)}
                  placeholder="Ex: Curitiba, Salvador, Recife..."
                  required
                  className="w-full text-xs p-2.5 bg-stone-50 border border-stone-300 rounded focus:bg-white focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  UF
                </label>
                <input
                  type="text"
                  maxLength={2}
                  value={uf}
                  onChange={(e) => setUf(e.target.value.toUpperCase())}
                  className="w-full text-xs p-2.5 bg-stone-50 border border-stone-300 rounded text-center uppercase font-mono focus:bg-white focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                Grau de Risco Percebido
              </label>
              <div className="grid grid-cols-4 gap-2 text-xs">
                {['Baixo', 'Moderado', 'Grave', 'Emergencial'].map((level) => (
                  <button
                    type="button"
                    key={level}
                    onClick={() => setRisk(level)}
                    className={`p-2 rounded border font-medium text-center transition-colors cursor-pointer ${
                      risk === level
                        ? level === 'Emergencial'
                          ? 'bg-rose-700 text-white border-rose-700'
                          : 'bg-stone-900 text-white border-stone-900'
                        : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                    }`}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>

            {/* Narrativa dos Fatos */}
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                Descrição dos Fatos (o que aconteceu, como começou e o que foi dito ou feito)
              </label>
              <textarea
                rows={4}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Exemplo: Na noite de ontem, por volta das 21h, após uma discussão banal, o agressor me ameaçou verbalmente, quebrou meu celular e bloqueou a porta de saída da casa..."
                required
                className="w-full text-xs p-3 bg-stone-50 border border-stone-300 rounded focus:bg-white focus:outline-none leading-relaxed"
              />
              <span className="text-[11px] text-stone-500">
                Quanto mais detalhes você anotar enquanto estão frescos na memória, mais firme será o seu depoimento.
              </span>
            </div>

            {/* Testemunhas e Provas */}
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                Testemunhas, Áudios, Mensagens ou Exames Médicos (Opcional)
              </label>
              <input
                type="text"
                value={witnesses}
                onChange={(e) => setWitnesses(e.target.value)}
                placeholder="Ex: Vizinha presenciou os gritos; guardei prints de ameaças no WhatsApp..."
                className="w-full text-xs p-2.5 bg-stone-50 border border-stone-300 rounded focus:bg-white focus:outline-none"
              />
            </div>

            {/* Requerimento de Medidas Protetivas */}
            <div className="pt-2 border-t border-stone-200 space-y-2">
              <label className="block text-xs font-semibold text-stone-800">
                Medidas Protetivas que Pretende Requerer na DEAM:
              </label>
              <div className="space-y-1.5 text-xs text-stone-700">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={solicitaAfastamento}
                    onChange={(e) => setSolicitaAfastamento(e.target.checked)}
                    className="rounded text-stone-900"
                  />
                  <span>Afastamento Imediato do Agressor do Lar (Art. 22, II)</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={solicitaDistancia}
                    onChange={(e) => setSolicitaDistancia(e.target.checked)}
                    className="rounded text-stone-900"
                  />
                  <span>Proibição de Contato e Limite de Distância Mínima (Art. 22, III)</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={solicitaArmas}
                    onChange={(e) => setSolicitaArmas(e.target.checked)}
                    className="rounded text-stone-900"
                  />
                  <span>Apreensão ou Suspensão de Porte de Arma de Fogo (Art. 22, I)</span>
                </label>
              </div>
            </div>

            {/* Ações do Formulário */}
            <div className="pt-3 border-t border-stone-200 flex flex-wrap items-center justify-between gap-3">
              <button
                type="submit"
                className="px-5 py-2.5 text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-md transition-colors flex items-center gap-2 cursor-pointer"
              >
                <Lock className="w-3.5 h-3.5" />
                <span>Gerar Protocolo e Rascunho Seguro</span>
              </button>

              <button
                type="button"
                onClick={handleClearMemory}
                className="px-4 py-2.5 text-xs font-medium text-stone-600 hover:text-rose-700 hover:bg-stone-100 rounded-md transition-colors flex items-center gap-1.5 cursor-pointer"
                title="Apaga os campos e o histórico da sessão sem deixar vestígios"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Apagar da Memória</span>
              </button>
            </div>
          </form>
        </div>

        {/* Painel Lateral: Relatos Gerados e Orientação */}
        <div className="lg:col-span-5 space-y-6">
          {/* Confirmação de Sucesso ao Gerar */}
          {isSaved && savedProtocol && (
            <div className="p-5 bg-stone-900 text-white rounded-lg shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider text-emerald-400 font-semibold flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  Protocolo Gerado com Sucesso
                </span>
                <span className="font-mono text-xs bg-stone-800 px-2 py-0.5 rounded text-stone-300">
                  {savedProtocol}
                </span>
              </div>
              <p className="text-xs text-stone-300 leading-relaxed">
                Seu relato estruturado está pronto. Você pode baixar em arquivo de texto discreto (.txt) para imprimir ou encaminhar ao seu defensor público.
              </p>
            </div>
          )}

          {/* Lista de Registros Efêmeros */}
          <div className="bg-white border border-stone-200 rounded-lg p-5 space-y-4">
            <h3 className="text-sm font-bold text-stone-900 flex items-center justify-between">
              <span>Rascunhos Disponíveis na Sessão ({entries.length})</span>
              {entries.length > 0 && (
                <button
                  onClick={handleClearMemory}
                  className="text-xs text-rose-700 hover:underline font-normal cursor-pointer"
                >
                  Limpar todos
                </button>
              )}
            </h3>

            {entries.length === 0 ? (
              <div className="p-6 text-center text-xs text-stone-500 bg-stone-50 rounded border border-dashed border-stone-200">
                Nenhum relato na memória da sessão atual. Preencha o formulário ao lado para compilar suas anotações antes de ir à delegacia.
              </div>
            ) : (
              <div className="space-y-3">
                {entries.map((item) => (
                  <div
                    key={item.protocol}
                    className="p-4 bg-stone-50 border border-stone-200 rounded-lg space-y-2 text-xs"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono font-bold text-stone-900">{item.protocol}</span>
                      <span className="text-[10px] bg-stone-200 text-stone-800 px-2 py-0.5 rounded">
                        Risco: {item.risk}
                      </span>
                    </div>

                    <div className="text-stone-600">
                      <strong>Tipo:</strong> {item.violenceType} · <strong>Data:</strong> {item.date} ({item.municipio}/{item.uf})
                    </div>

                    <p className="text-stone-700 line-clamp-3 bg-white p-2 rounded border border-stone-200 italic">
                      "{item.description}"
                    </p>

                    <div className="flex items-center justify-between pt-2">
                      <span className="text-[10px] text-stone-400">Criado às {item.createdAt}</span>
                      <button
                        onClick={() => handleDownloadTxt(item)}
                        className="px-2.5 py-1 text-xs font-semibold bg-stone-900 text-white rounded hover:bg-stone-800 flex items-center gap-1 cursor-pointer"
                      >
                        <Download className="w-3 h-3" />
                        Baixar Rascunho (.txt)
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Dicas para o Atendimento na Delegacia */}
          <div className="p-5 bg-stone-50 border border-stone-200 rounded-lg text-xs space-y-2.5 text-stone-700">
            <h4 className="font-bold text-stone-900 text-sm">
              Direitos Invioláveis ao Registrar o B.O.:
            </h4>
            <ul className="space-y-1.5 list-disc pl-4 text-stone-600">
              <li>Você tem direito a atendimento em sala reservada e, preferencialmente, por policiais do sexo feminino.</li>
              <li>Não é necessário levar testemunhas no momento do B.O.; sua palavra basta para instaurar o inquérito e solicitar a Medida Protetiva.</li>
              <li>Se houve agressão física recente, exija a guia para o <strong>Exame de Corpo de Delito</strong> no IML.</li>
              <li>Você tem direito a receber uma cópia do Boletim de Ocorrência impresso na hora.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
