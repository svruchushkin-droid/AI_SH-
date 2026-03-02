import { INTEGRATIONS } from '../data/integrations';
import '../App.css';

export function Integrations() {
  return (
    <>
      <h1 className="page-title">Интеграции</h1>
      <p className="page-desc">Концептуальные коннекторы — канал доставки «изнутри». Placeholder без реализации.</p>
      <div className="integrations-grid">
        {INTEGRATIONS.map((i) => (
          <div key={i.id} className="card integration-card">
            <div className="integration-name">{i.name}</div>
            <p className="integration-desc">{i.description}</p>
            <div className="integration-status">
              <span className={`badge badge-${i.status === 'connected' ? 'ok' : i.status === 'planned' ? 'pending' : 'masked'}`}>
                {i.status === 'connected' ? 'Подключено' : i.status === 'planned' ? 'В планах' : 'Отключено'}
              </span>
            </div>
            {i.lastSync && <div className="integration-sync">Последняя синхронизация: {i.lastSync}</div>}
          </div>
        ))}
      </div>
    </>
  );
}
