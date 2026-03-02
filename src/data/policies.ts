export type PolicyStatus = 'draft' | 'pending_approval' | 'active';
export type PolicyAction = 'route' | 'block' | 'notify';

export interface RoutingPolicy {
  id: string;
  name: string;
  description: string;
  condition: string;
  action: string;
  status: PolicyStatus;
  createdAt: string;
  approvedBy?: string;
}

export interface LimitPolicy {
  id: string;
  scope: 'project' | 'user' | 'department';
  scopeName: string;
  tokensPerDay?: number;
  rubPerMonth?: number;
  requestsPerMin?: number;
  currentUsage?: number;
}

export const ROUTING_POLICIES: RoutingPolicy[] = [
  { id: 'rp1', name: 'Конфиденциальные данные → GigaChat', description: 'Маршрутизация по классу данных', condition: 'IF data_class=confidential THEN', action: 'route to GigaChat (закрытый контур)', status: 'active', createdAt: '2025-02-01', approvedBy: 'Офицер ИБ Смирнов' },
  { id: 'rp2', name: 'Бюджет >80% → дешёвая модель', description: 'Экономия при приближении к лимиту', condition: 'IF budget_used > 80% THEN', action: 'route to YandexGPT Pro', status: 'active', createdAt: '2025-02-10', approvedBy: 'Офицер ИБ Смирнов' },
  { id: 'rp3', name: 'Минздрав — только сертифицированные', description: 'По ведомству', condition: 'IF department=Минздрав THEN', action: 'allow only certified models', status: 'pending_approval', createdAt: '2025-03-01' },
  { id: 'rp4', name: 'Высокая нагрузка → балансировка', description: 'По нагрузке', condition: 'IF load > 80% THEN', action: 'route to secondary provider', status: 'draft', createdAt: '2025-03-02' },
];

export const LIMIT_POLICIES: LimitPolicy[] = [
  { id: 'l1', scope: 'project', scopeName: 'Цифровизация Минздрава', tokensPerDay: 500000, rubPerMonth: 500000, requestsPerMin: 60, currentUsage: 320000 },
  { id: 'l2', scope: 'project', scopeName: 'Аналитика Минфина', tokensPerDay: 300000, rubPerMonth: 300000, requestsPerMin: 30, currentUsage: 185000 },
  { id: 'l3', scope: 'user', scopeName: 'Иванов И.И.', tokensPerDay: 50000, rubPerMonth: 50000, currentUsage: 42000 },
];
