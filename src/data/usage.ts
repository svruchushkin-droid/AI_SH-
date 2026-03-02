export interface UsageRecord {
  date: string;
  tokens: number;
  requests: number;
  cost: number;
  modelId: string;
  projectId: string;
}

export const USAGE_BY_DAY = [
  { date: '2025-02-25', tokens: 125000, requests: 420, cost: 5200 },
  { date: '2025-02-26', tokens: 142000, requests: 480, cost: 6100 },
  { date: '2025-02-27', tokens: 98000, requests: 350, cost: 4100 },
  { date: '2025-02-28', tokens: 168000, requests: 520, cost: 7200 },
  { date: '2025-03-01', tokens: 135000, requests: 445, cost: 5800 },
  { date: '2025-03-02', tokens: 89000, requests: 310, cost: 3700 },
];

export const USAGE_BY_MODEL = [
  { modelId: 'gpt4-gov', modelName: 'GPT-4 Government', tokens: 280000, share: 42 },
  { modelId: 'yandex-gpt', modelName: 'YandexGPT Pro', tokens: 220000, share: 33 },
  { modelId: 'claude-gov', modelName: 'Claude 3 Gov', tokens: 120000, share: 18 },
  { modelId: 'gigachat', modelName: 'GigaChat', tokens: 50000, share: 7 },
];

export const PROJECT_LIMITS = [
  { projectId: 'proj-1', projectName: 'Цифровизация Минздрава', budgetLimit: 500000, spent: 312000, tokenLimit: 10000000, used: 6200000 },
  { projectId: 'proj-2', projectName: 'Аналитика Минфина', budgetLimit: 300000, spent: 185000, tokenLimit: 5000000, used: 3100000 },
  { projectId: 'proj-3', projectName: 'Госуслуги — чат-бот', budgetLimit: 800000, spent: 420000, tokenLimit: 20000000, used: 10500000 },
];

export const TARIFFS = [
  { id: 'basic', name: 'Базовый', price: 'от 0,05 ₽/1K токенов', features: ['До 3 моделей', 'Базовый аудит', 'Поддержка 8/5'] },
  { id: 'extended', name: 'Расширенный', price: 'от 0,04 ₽/1K токенов', features: ['До 10 моделей', 'Полный аудит', 'DLP-фильтры', 'Поддержка 24/7'] },
  { id: 'closed', name: 'Закрытый контур', price: 'индивидуально', features: ['Все модели', 'Выделенный инстанс', 'Криптозащита', 'Сертификация КИИ'] },
];
