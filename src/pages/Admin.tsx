import { useRole } from '../hooks/useAppState';
import { PROJECTS } from '../data/projects';
import { PROVIDERS } from '../data/models';
import '../App.css';

const MOCK_USERS = [
  { id: 'u1', name: 'Иванов И.И.', role: 'user', project: 'Цифровизация Минздрава' },
  { id: 'u2', name: 'Петрова А.С.', role: 'org_admin', project: 'Аналитика Минфина' },
  { id: 'u3', name: 'Сидоров П.П.', role: 'user', project: 'Госуслуги' },
  { id: 'admin1', name: 'Смирнов (ИБ)', role: 'security_officer', project: '—' },
];

export function Admin() {
  const role = useRole();
  const isPlatformAdmin = role === 'platform_admin';

  return (
    <>
      <h1 className="page-title">Администрирование</h1>
      <p className="page-desc">Пользователи/роли, проекты (workspace), провайдеры (для админа платформы).</p>
      <div className="card">
        <div className="card-title">Пользователи и роли</div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>ФИО</th>
                <th>Роль</th>
                <th>Проект</th>
              </tr>
            </thead>
            <tbody>
              {MOCK_USERS.map((u) => (
                <tr key={u.id}>
                  <td>{u.name}</td>
                  <td>{u.role}</td>
                  <td>{u.project}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="card">
        <div className="card-title">Проекты (workspace)</div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Название</th>
                <th>Владелец</th>
                <th>Разрешённые модели</th>
                <th>Лимиты</th>
              </tr>
            </thead>
            <tbody>
              {PROJECTS.map((p) => (
                <tr key={p.id}>
                  <td>{p.name}</td>
                  <td>{p.ownerName}</td>
                  <td>{p.allowedModelIds.length} моделей</td>
                  <td>{p.budgetLimit.toLocaleString('ru')} ₽ / {p.tokenLimit.toLocaleString('ru')} токенов</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {isPlatformAdmin && (
        <div className="card">
          <div className="card-title">Провайдеры (Platform Admin)</div>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Провайдер</th>
                  <th>Статус</th>
                  <th>Моделей</th>
                  <th>Действия</th>
                </tr>
              </thead>
              <tbody>
                {PROVIDERS.map((p) => (
                  <tr key={p.id}>
                    <td>{p.name}</td>
                    <td><span className={`badge badge-${p.status === 'active' ? 'ok' : 'pending'}`}>{p.status}</span></td>
                    <td>{p.modelsCount}</td>
                    <td><button type="button" className="btn btn-secondary">{p.status === 'active' ? 'Отключить' : 'Включить'}</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="hint">Включение «Provider B» → каталог моделей обновляется → Org Admin может запросить подключение.</p>
        </div>
      )}
    </>
  );
}
