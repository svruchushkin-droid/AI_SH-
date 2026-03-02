import { Link } from 'react-router-dom';
import { USAGE_BY_DAY, USAGE_BY_MODEL } from '../data/usage';
import { DLP_INCIDENTS } from '../data/dlp';
import { PROJECTS } from '../data/projects';
import '../App.css';

const totalRequests = USAGE_BY_DAY.reduce((s, d) => s + d.requests, 0);
const totalCost = USAGE_BY_DAY.reduce((s, d) => s + d.cost, 0);
const incidentsCount = DLP_INCIDENTS.filter((i) => i.status !== 'resolved').length;

export function Dashboard() {
  return (
    <>
      <h1 className="page-title">Dashboard</h1>
      <div className="dashboard-cards grid-2">
        <div className="card stat-card">
          <div className="stat-label">Запросов за месяц</div>
          <div className="stat-value">{totalRequests.toLocaleString('ru')}</div>
        </div>
        <div className="card stat-card">
          <div className="stat-label">Активные проекты</div>
          <div className="stat-value">{PROJECTS.filter((p) => p.status === 'active').length}</div>
        </div>
        <div className="card stat-card">
          <div className="stat-label">ТОП модель</div>
          <div className="stat-value">{USAGE_BY_MODEL[0]?.modelName ?? '—'}</div>
        </div>
        <div className="card stat-card">
          <div className="stat-label">Инциденты DLP</div>
          <div className="stat-value">{incidentsCount}</div>
          {incidentsCount > 0 && <Link to="/dlp" className="stat-link">Перейти к инцидентам →</Link>}
        </div>
        <div className="card stat-card">
          <div className="stat-label">Расход (₽)</div>
          <div className="stat-value">{totalCost.toLocaleString('ru')} ₽</div>
        </div>
      </div>
      <div className="grid-2">
        <div className="card">
          <div className="card-title">Usage по дням (mock)</div>
          <div className="chart-placeholder">
            {USAGE_BY_DAY.map((d) => (
              <div key={d.date} className="chart-bar-row">
                <span>{d.date.slice(5)}</span>
                <div className="chart-bar-wrap">
                  <div className="chart-bar" style={{ width: `${(d.tokens / 200000) * 100}%` }} />
                </div>
                <span>{d.tokens.toLocaleString('ru')}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="card">
          <div className="card-title">Распределение по моделям</div>
          <div className="chart-placeholder">
            {USAGE_BY_MODEL.map((m) => (
              <div key={m.modelId} className="chart-bar-row">
                <span>{m.modelName}</span>
                <div className="chart-bar-wrap">
                  <div className="chart-bar chart-bar-model" style={{ width: `${m.share}%` }} />
                </div>
                <span>{m.share}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="dashboard-cta">
        <Link to="/playground" className="btn">Открыть Playground</Link>
        <Link to="/catalog" className="btn btn-secondary">Перейти к каталогу моделей</Link>
      </div>
    </>
  );
}
