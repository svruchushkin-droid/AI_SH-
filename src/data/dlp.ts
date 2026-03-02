export type DlpRuleType = 'mask' | 'block' | 'allowlist' | 'denylist';
export type DlpEntity = 'fio' | 'phone' | 'passport' | 'email' | 'custom';

export interface DlpRule {
  id: string;
  name: string;
  type: DlpRuleType;
  entity?: DlpEntity;
  description: string;
  enabled: boolean;
  dataClass?: string;
}

export interface DlpIncident {
  id: string;
  timestamp: string;
  ruleId: string;
  ruleName: string;
  userId: string;
  userName: string;
  projectName: string;
  status: 'new' | 'in_progress' | 'resolved';
  summary: string;
  comment?: string;
}

export const DLP_RULES: DlpRule[] = [
  { id: 'r1', name: 'Маскирование ФИО', type: 'mask', entity: 'fio', description: 'Замена ФИО на *** в запросах и ответах', enabled: true },
  { id: 'r2', name: 'Маскирование телефона', type: 'mask', entity: 'phone', description: 'Скрытие номеров телефонов', enabled: true },
  { id: 'r3', name: 'Маскирование паспортных данных', type: 'mask', entity: 'passport', description: 'Серия/номер паспорта не передаются в модель', enabled: true },
  { id: 'r4', name: 'Запрет конфиденциальных данных', type: 'block', dataClass: 'confidential', description: 'Блокировка запросов с грифом «Конфиденциально»', enabled: true },
  { id: 'r5', name: 'Allowlist внутренних систем', type: 'allowlist', description: 'Разрешены только запросы из утверждённых систем', enabled: true },
];

export const DLP_INCIDENTS: DlpIncident[] = [
  { id: 'i1', timestamp: '2025-03-02T09:58:44', ruleId: 'r4', ruleName: 'Запрет конфиденциальных данных', userId: 'u3', userName: 'Сидоров П.П.', projectName: 'Цифровизация Минздрава', status: 'in_progress', summary: 'Попытка отправить конфиденциальные данные в запросе', comment: 'Назначен ответственный ИБ' },
  { id: 'i2', timestamp: '2025-03-01T16:22:11', ruleId: 'r2', ruleName: 'Маскирование телефона', userId: 'u1', userName: 'Иванов И.И.', projectName: 'Цифровизация Минздрава', status: 'resolved', summary: 'Телефон автоматически замаскирован', comment: 'Корректное срабатывание' },
  { id: 'i3', timestamp: '2025-03-01T14:00:00', ruleId: 'r5', ruleName: 'Allowlist внутренних систем', userId: 'u4', userName: 'Козлов К.К.', projectName: 'Госуслуги', status: 'new', summary: 'Запрос с неразрешённого источника' },
];
