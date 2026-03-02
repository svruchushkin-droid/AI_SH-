import { Link } from 'react-router-dom';
import { TEMPLATES } from '../data/templates';
import '../App.css';

export function Templates() {
  return (
    <>
      <h1 className="page-title">Шаблоны промптов</h1>
      <p className="page-desc">Библиотека шаблонов с полями-переменными и подсказками по безопасному вводу.</p>
      <div className="templates-grid">
        {TEMPLATES.map((t) => (
          <div key={t.id} className="card template-card">
            <div className="card-title">{t.name}</div>
            <p className="template-desc">{t.description}</p>
            <div className="template-meta">Категория: {t.category}</div>
            <div className="template-vars">
              <strong>Переменные:</strong>
              <ul>
                {t.variables.map((v) => (
                  <li key={v.key}>{v.label} — {v.hint}</li>
                ))}
              </ul>
            </div>
            <div className="template-preview"><code>{t.promptPreview}</code></div>
            <Link to="/playground" className="btn">Открыть в Playground</Link>
          </div>
        ))}
      </div>
    </>
  );
}
