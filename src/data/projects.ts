export interface Project {
  id: string;
  name: string;
  description: string;
  ownerId: string;
  ownerName: string;
  allowedModelIds: string[];
  budgetLimit: number;
  tokenLimit: number;
  status: 'active' | 'suspended';
}

export const PROJECTS: Project[] = [
  { id: 'proj-1', name: 'Цифровизация Минздрава', description: 'Внедрение ИИ в документооборот и поддержку решений', ownerId: 'admin1', ownerName: 'Иванов И.И.', allowedModelIds: ['gpt4-gov', 'claude-gov', 'yandex-gpt', 'gigachat'], budgetLimit: 500000, tokenLimit: 10000000, status: 'active' },
  { id: 'proj-2', name: 'Аналитика Минфина', description: 'Анализ отчётности и суммаризация', ownerId: 'admin2', ownerName: 'Петрова А.С.', allowedModelIds: ['yandex-gpt', 'gigachat', 'embed-ru'], budgetLimit: 300000, tokenLimit: 5000000, status: 'active' },
  { id: 'proj-3', name: 'Госуслуги — чат-бот', description: 'Ответы гражданам на типовые вопросы', ownerId: 'admin3', ownerName: 'Сидоров П.П.', allowedModelIds: ['yandex-gpt', 'gigachat'], budgetLimit: 800000, tokenLimit: 20000000, status: 'active' },
];
