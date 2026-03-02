export type IntegrationStatus = 'connected' | 'planned' | 'disabled';

export interface Integration {
  id: string;
  name: string;
  description: string;
  status: IntegrationStatus;
  lastSync?: string;
}

export const INTEGRATIONS: Integration[] = [
  { id: 'gostech', name: 'ГосТех', description: 'Платформа государственных цифровых сервисов', status: 'connected', lastSync: '2025-03-02 09:00' },
  { id: 'smev', name: 'СМЭВ', description: 'Система межведомственного электронного взаимодействия', status: 'connected', lastSync: '2025-03-02 08:45' },
  { id: 'gosuslugi', name: 'Госуслуги', description: 'Портал государственных и муниципальных услуг', status: 'planned' },
  { id: 'nsud', name: 'НСУД / ЕИП', description: 'Национальная система управления данными', status: 'planned' },
  { id: 'kii', name: 'ЦОД / Облако КИИ', description: 'Критическая информационная инфраструктура', status: 'planned' },
];
