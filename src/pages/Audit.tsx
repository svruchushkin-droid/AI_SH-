import { useState } from 'react';
import { AUDIT_LOG } from '../data/audit';
import '../App.css';

export function Audit() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selected = selectedId ? AUDIT_LOG.find((e) => e.id === selectedId) : null;

  return (
    <>
      <h1 className="page-title">Аудит и журналы</h1>
      <p className="page-desc">Журнал запросов: время, пользователь, проект, модель, результат (OK/Blocked/Masked), токены, cost.</p>
      <div className="audit-layout">
        <div className="card table-card">
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Время</th>
                  <th>Пользователь</th>
                  <th>Проект</th>
                  <th>Модель</th>
                  <th>Результат</th>
                  <th>Токены</th>
                  <th>Cost</th>
                </tr>
              </thead>
              <tbody>
                {AUDIT_LOG.map((e) => (
                  <tr
                    key={e.id}
                    className={selectedId === e.id ? 'selected' : ''}
                    onClick={() => setSelectedId(e.id)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(ev) => ev.key === 'Enter' && setSelectedId(e.id)}
                  >
                    <td>{e.timestamp.slice(0, 16)}</td>
                    <td>{e.userName}</td>
                    <td>{e.projectName}</td>
                    <td>{e.modelName}</td>
                    <td><span className={`badge badge-${e.result}`}>{e.result}</span></td>
                    <td>{e.tokensIn + e.tokensOut}</td>
                    <td>{e.cost.toFixed(2)} ₽</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {selected && (
          <div className="card audit-detail">
            <div className="card-title">Детали события #{selected.id}</div>
            <dl className="detail-list">
              <dt>Вход (превью)</dt><dd><code>{selected.requestPreview}</code></dd>
              <dt>Выход (превью)</dt><dd><code>{selected.responsePreview}</code></dd>
              <dt>Сработавшие правила</dt><dd>{selected.rulesTriggered?.join(', ') ?? '—'}</dd>
              <dt>Кто просмотрел</dt><dd>Офицер ИБ (mock)</dd>
            </dl>
          </div>
        )}
      </div>
    </>
  );
}
