export interface Model {
  id: string;
  name: string;
  providerId: string;
  providerName: string;
  description: string;
  class: 'chat' | 'code' | 'embedding' | 'vision' | 'multimodal';
  govApproved: boolean;
  pricePer1kTokens: number;
  latencyMs: number;
  trustLevel: 'standard' | 'enhanced' | 'certified';
  modes: ('chat' | 'completion' | 'embedding')[];
  status: 'active' | 'pending_approval' | 'disabled';
}

export const MODELS: Model[] = [
  { id: 'gpt4-gov', name: 'GPT-4 Government', providerId: 'openai', providerName: 'OpenAI', description: 'Модель для госсектора с усиленной конфиденциальностью', class: 'chat', govApproved: true, pricePer1kTokens: 0.08, latencyMs: 1200, trustLevel: 'certified', modes: ['chat', 'completion'], status: 'active' },
  { id: 'claude-gov', name: 'Claude 3 Gov', providerId: 'anthropic', providerName: 'Anthropic', description: 'Безопасный ассистент для служебных задач', class: 'chat', govApproved: true, pricePer1kTokens: 0.06, latencyMs: 900, trustLevel: 'certified', modes: ['chat', 'completion'], status: 'active' },
  { id: 'yandex-gpt', name: 'YandexGPT Pro', providerId: 'yandex', providerName: 'Яндекс', description: 'Русскоязычная модель для документооборота', class: 'chat', govApproved: true, pricePer1kTokens: 0.04, latencyMs: 800, trustLevel: 'enhanced', modes: ['chat', 'completion'], status: 'active' },
  { id: 'gigachat', name: 'GigaChat', providerId: 'sber', providerName: 'Сбер', description: 'Отечественная модель для закрытого контура', class: 'chat', govApproved: true, pricePer1kTokens: 0.03, latencyMs: 1100, trustLevel: 'certified', modes: ['chat', 'completion', 'embedding'], status: 'active' },
  { id: 'codellama', name: 'Code Llama 70B', providerId: 'meta', providerName: 'Meta', description: 'Генерация и анализ кода', class: 'code', govApproved: false, pricePer1kTokens: 0.05, latencyMs: 1500, trustLevel: 'standard', modes: ['completion'], status: 'pending_approval' },
  { id: 'embed-ru', name: 'Embeddings RU', providerId: 'yandex', providerName: 'Яндекс', description: 'Векторизация текста для поиска', class: 'embedding', govApproved: true, pricePer1kTokens: 0.001, latencyMs: 100, trustLevel: 'enhanced', modes: ['embedding'], status: 'active' },
];

export const PROVIDERS = [
  { id: 'openai', name: 'OpenAI', status: 'active', modelsCount: 1 },
  { id: 'anthropic', name: 'Anthropic', status: 'active', modelsCount: 1 },
  { id: 'yandex', name: 'Яндекс', status: 'active', modelsCount: 2 },
  { id: 'sber', name: 'Сбер', status: 'active', modelsCount: 1 },
  { id: 'meta', name: 'Meta', status: 'pending', modelsCount: 1 },
];
