import { useCallback } from 'react';
import { PROJECT_LIMITS, TARIFFS } from '../data/usage';
import '../App.css';

export function Usage() {
  const handleDownloadReport = useCallback(() => {
    const header = 'Проект;Лимит бюджета;Потрачено;Лимит токенов;Использовано\n';
    const rows = PROJECT_LIMITS.map(
      (p) => `${p.projectName};${p.budgetLimit};${p.spent};${p.tokenLimit};${p.used}`
    ).join('\n');
    const csv = '\uFEFF' + header + rows;
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `usage-report-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }, []);

  return (
    <>
      <h1 className="page-title">Usage и биллинг</h1>
      <p className="page-desc">Учёт потребления по проектам/ведомствам, лимиты, уведомления, отчёты.</p>
      <div className="card">
        <div className="card-title">Usage по проектам</div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Проект</th>
                <th>Бюджет (лимит)</th>
                <th>Потрачено</th>
                <th>Токены (лимит)</th>
                <th>Использовано</th>
                <th>Уведомление</th>
              </tr>
            </thead>
            <tbody>
              {PROJECT_LIMITS.map((p) => {
                const budgetPct = (p.spent / p.budgetLimit) * 100;
                const tokenPct = (p.used / p.tokenLimit) * 100;
                const alert = budgetPct >= 80 || tokenPct >= 80;
                return (
                  <tr key={p.projectId}>
                    <td>{p.projectName}</td>
                    <td>{p.budgetLimit.toLocaleString('ru')} ₽</td>
                    <td>{p.spent.toLocaleString('ru')} ₽</td>
                    <td>{p.tokenLimit.toLocaleString('ru')}</td>
                    <td>{p.used.toLocaleString('ru')}</td>
                    <td>{alert ? <span className="badge badge-masked">80% бюджета / токенов</span> : '—'}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <button type="button" className="btn" onClick={handleDownloadReport}>Скачать отчёт (CSV)</button>
      </div>
      <div className="card">
        <div className="card-title">Тарифы (mock)</div>
        <div className="tariffs-grid">
          {TARIFFS.map((t) => (
            <div key={t.id} className="tariff-card">
              <strong>{t.name}</strong>
              <div className="tariff-price">{t.price}</div>
              <ul>
                {t.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
