import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MODELS, PROVIDERS } from '../data/models';
import '../App.css';

export function Catalog() {
  const [providerFilter, setProviderFilter] = useState<string>('all');
  const [govOnly, setGovOnly] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const filtered = MODELS.filter((m) => {
    if (providerFilter !== 'all' && m.providerId !== providerFilter) return false;
    if (govOnly && !m.govApproved) return false;
    return true;
  });

  const selected = selectedId ? MODELS.find((m) => m.id === selectedId) : null;

  return (
    <>
      <h1 className="page-title">Каталог моделей (маркетплейс)</h1>
      <p className="page-desc">Мультипровайдерный шлюз — нейтральный брокер. Выбор моделей по провайдеру, классу и допуску для госсектора.</p>
      <div className="catalog-filters card">
        <div className="filters-row">
          <div className="form-group" style={{ maxWidth: 200 }}>
            <label>Провайдер</label>
            <select value={providerFilter} onChange={(e) => setProviderFilter(e.target.value)}>
              <option value="all">Все</option>
              {PROVIDERS.map((p) => (
                <option key={p.id} value={p.id}>{p.name}</option>
              ))}
            </select>
          </div>
          <label className="checkbox-label">
            <input type="checkbox" checked={govOnly} onChange={(e) => setGovOnly(e.target.checked)} />
            Только для госсектора
          </label>
        </div>
      </div>
      <div className="catalog-layout">
        <div className="catalog-grid">
          {filtered.map((m) => (
            <div
              key={m.id}
              className={`card model-card ${selectedId === m.id ? 'selected' : ''}`}
              onClick={() => setSelectedId(m.id === selectedId ? null : m.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setSelectedId(m.id === selectedId ? null : m.id)}
            >
              <div className="model-card-header">
                <strong>{m.name}</strong>
                <span className="badge badge-pending">{m.providerName}</span>
              </div>
              <p className="model-desc">{m.description}</p>
              <div className="model-meta">
                <span>Класс: {m.class}</span>
                <span>{m.govApproved ? '✓ Госсектор' : '—'}</span>
                <span>Доверие: {m.trustLevel}</span>
                <span>{m.pricePer1kTokens} ₽/1K токенов</span>
              </div>
              <div className="model-actions">
                <button type="button" className="btn btn-secondary" onClick={(e) => { e.stopPropagation(); setSelectedId(m.id); }}>Сравнить</button>
                <Link to="/routing" className="btn" onClick={(e) => e.stopPropagation()}>Запросить подключение</Link>
              </div>
            </div>
          ))}
        </div>
        {selected && (
          <div className="card catalog-detail">
            <div className="card-title">Сравнение / параметры: {selected.name}</div>
            <dl className="detail-list">
              <dt>Провайдер</dt><dd>{selected.providerName}</dd>
              <dt>Класс</dt><dd>{selected.class}</dd>
              <dt>Режимы</dt><dd>{selected.modes.join(', ')}</dd>
              <dt>Цена</dt><dd>{selected.pricePer1kTokens} ₽/1K токенов</dd>
              <dt>Латентность</dt><dd>{selected.latencyMs} мс</dd>
              <dt>SLA (mock)</dt><dd>99,5%</dd>
            </dl>
            <Link to="/routing" className="btn">Запросить подключение</Link>
          </div>
        )}
      </div>
    </>
  );
}
