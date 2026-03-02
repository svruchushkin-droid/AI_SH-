import { Link } from 'react-router-dom';
import { ROUTING_POLICIES, LIMIT_POLICIES } from '../data/policies';
import '../App.css';

export function Routing() {
  return (
    <>
      <h1 className="page-title">Маршрутизация и политики</h1>
      <p className="page-desc">Governance: политики доступа, маршрутизация, лимиты, approval workflow.</p>
      <div className="card">
        <div className="card-title">Политики маршрутизации (Rule builder)</div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Название</th>
                <th>Условие</th>
                <th>Действие</th>
                <th>Статус</th>
              </tr>
            </thead>
            <tbody>
              {ROUTING_POLICIES.map((p) => (
                <tr key={p.id}>
                  <td>{p.name}</td>
                  <td><code>{p.condition}</code></td>
                  <td>{p.action}</td>
                  <td>
                    <span className={`badge badge-${p.status === 'active' ? 'ok' : p.status === 'pending_approval' ? 'pending' : 'masked'}`}>
                      {p.status === 'active' ? 'Активно' : p.status === 'pending_approval' ? 'Ожидает согласования ИБ' : 'Черновик'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="hint">
          <Link to="/catalog">Каталог моделей</Link> → запросить подключение → здесь отображается «Ожидает согласования ИБ».
        </p>
        <button type="button" className="btn btn-secondary">Добавить политику</button>
      </div>
      <div className="card">
        <div className="card-title">Лимиты (токены/день, ₽/месяц, запросов/мин)</div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Область</th>
                <th>Название</th>
                <th>Токены/день</th>
                <th>₽/месяц</th>
                <th>Запросов/мин</th>
              </tr>
            </thead>
            <tbody>
              {LIMIT_POLICIES.map((l) => (
                <tr key={l.id}>
                  <td>{l.scope}</td>
                  <td>{l.scopeName}</td>
                  <td>{l.tokensPerDay?.toLocaleString('ru')}</td>
                  <td>{l.rubPerMonth?.toLocaleString('ru')}</td>
                  <td>{l.requestsPerMin ?? '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
