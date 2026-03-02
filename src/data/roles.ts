export type RoleId = 'user' | 'org_admin' | 'security_officer' | 'platform_admin';

export interface Role {
  id: RoleId;
  name: string;
  description: string;
}

export const ROLES: Role[] = [
  { id: 'user', name: 'Сотрудник ведомства', description: 'Отправляет запросы, использует шаблоны, видит доступные модели' },
  { id: 'org_admin', name: 'Администратор ведомства', description: 'Управляет проектами, пользователями, лимитами, выбирает модели' },
  { id: 'security_officer', name: 'Офицер ИБ', description: 'DLP-правила, политики классификации, аудит и инциденты' },
  { id: 'platform_admin', name: 'Админ платформы', description: 'Провайдеры/модели в маркетплейсе, глобальные политики, тарифы' },
];
