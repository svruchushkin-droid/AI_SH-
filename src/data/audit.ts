export type AuditResult = 'ok' | 'blocked' | 'masked';

export interface AuditEntry {
  id: string;
  timestamp: string;
  userId: string;
  userName: string;
  projectId: string;
  projectName: string;
  modelId: string;
  modelName: string;
  result: AuditResult;
  tokensIn: number;
  tokensOut: number;
  cost: number;
  rulesTriggered?: string[];
  requestPreview?: string;
  responsePreview?: string;
}

export const AUDIT_LOG: AuditEntry[] = [
  { id: '1', timestamp: '2025-03-02T10:15:22', userId: 'u1', userName: 'Иванов И.И.', projectId: 'proj-1', projectName: 'Цифровизация Минздрава', modelId: 'gpt4-gov', modelName: 'GPT-4 Government', result: 'masked', tokensIn: 120, tokensOut: 340, cost: 0.04, rulesTriggered: ['Маскирование ФИО', 'Маскирование телефона'], requestPreview: 'Подготовить справку для гражданина *** по вопросу...', responsePreview: 'Справка подготовлена. Контакт для обратной связи: +7 *** ***-**-**' },
  { id: '2', timestamp: '2025-03-02T10:12:01', userId: 'u2', userName: 'Петрова А.С.', projectId: 'proj-2', projectName: 'Аналитика Минфина', modelId: 'yandex-gpt', modelName: 'YandexGPT Pro', result: 'ok', tokensIn: 450, tokensOut: 1200, cost: 0.07, requestPreview: 'Суммаризировать отчёт за Q4...', responsePreview: 'Ключевые показатели: рост доходов на 12%...' },
  { id: '3', timestamp: '2025-03-02T09:58:44', userId: 'u3', userName: 'Сидоров П.П.', projectId: 'proj-1', projectName: 'Цифровизация Минздрава', modelId: 'gpt4-gov', modelName: 'GPT-4 Government', result: 'blocked', tokensIn: 80, tokensOut: 0, cost: 0, rulesTriggered: ['Запрет конфиденциальных данных'], requestPreview: 'Проанализировать персональные данные пациентов...', responsePreview: '[Запрос заблокирован]' },
  { id: '4', timestamp: '2025-03-02T09:45:11', userId: 'u1', userName: 'Иванов И.И.', projectId: 'proj-1', projectName: 'Цифровизация Минздрава', modelId: 'claude-gov', modelName: 'Claude 3 Gov', result: 'ok', tokensIn: 200, tokensOut: 560, cost: 0.05, requestPreview: 'Составить шаблон служебной записки...', responsePreview: 'Служебная записка. От: [ФИО]. Тема: ...' },
  { id: '5', timestamp: '2025-03-02T09:30:00', userId: 'u2', userName: 'Петрова А.С.', projectId: 'proj-2', projectName: 'Аналитика Минфина', modelId: 'gigachat', modelName: 'GigaChat', result: 'masked', tokensIn: 90, tokensOut: 200, cost: 0.01, rulesTriggered: ['Маскирование паспортных данных'], requestPreview: 'Проверить корректность данных гражданина ***', responsePreview: 'Проверка выполнена. Серия/номер скрыты в логе.' },
];
