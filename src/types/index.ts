export type ActiveTab = 
  | 'portal' 
  | 'violencia' 
  | 'legislacao' 
  | 'canais' 
  | 'registro' 
  | 'arquitetura' 
  | 'paper' 
  | 'relatorio';

export interface ViolenceType {
  id: string;
  name: string;
  article: string;
  iconName: string;
  summary: string;
  description: string;
  warningSigns: string[];
  legalText: string;
  actionGuidance: string;
}

export interface SupportChannel {
  id: string;
  name: string;
  category: 'Nacional' | 'Seguranca' | 'Apoio Psicosocial' | 'Juridico';
  phone: string;
  hours: string;
  description: string;
  actionUrl?: string;
  ufScope?: string;
  isEmergency?: boolean;
}

export interface ProtectiveMeasure {
  id: string;
  title: string;
  article: string;
  target: 'Agressor' | 'Ofendida';
  description: string;
  practicalExample: string;
  deadlineHours: number;
}

export interface CodeFile {
  id: string;
  name: string;
  path: string;
  language: 'html' | 'css' | 'javascript' | 'csharp' | 'sql' | 'json' | 'markdown';
  description: string;
  category: 'Frontend (HTML/CSS/JS)' | 'Backend (C# .NET)' | 'Banco de Dados (SQL)' | 'Configuração & Docs';
  content: string;
}

export interface FolderNode {
  name: string;
  type: 'folder' | 'file';
  path: string;
  children?: FolderNode[];
  fileId?: string;
}

export interface ConfidentialEntry {
  id: string;
  date: string;
  category: string;
  location: string;
  description: string;
  witnesses?: string;
  riskRating: 'Baixo' | 'Moderado' | 'Grave' | 'Emergencial';
}
