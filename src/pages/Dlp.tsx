import { Link } from 'react-router-dom';
import { DLP_RULES, DLP_INCIDENTS } from '../data/dlp';
import '../App.css';

export function Dlp() {
  return (
    <>
      <h1 className="page-title">DLP и безопасность</h1>
      <p className="page-desc">Security-first: политики DLP, маскирование/запреты, инциденты, настройки логирования.</p>
      <div className="card">
        <div className="card-title">Политики DLP</div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Название</th>
                <th>Тип</th>
                <th>Описание</th>
                <th>Статус</th>
              </tr>
            </thead>
            <tbody>
              {DLP_RULES.map((r) => (
                <tr key={r.id}>
                  <td>{r.name}</td>
                  <td>{r.type}</td>
                  <td>{r.description}</td>
                  <td>{r.enabled ? 'Вкл' : 'Выкл'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button type="button" className="btn btn-secondary">Создать правило (маскировать телефон и т.д.)</button>
      </div>
      <div className="card">
        <div className="card-title">Инциденты</div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Время</th>
                <th>Правило</th>
                <th>Пользователь</th>
                <th>Проект</th>
                <th>Статус</th>
                <th>Описание</th>
              </tr>
            </thead>
            <tbody>
              {DLP_INCIDENTS.map((i) => (
                <tr key={i.id}>
                  <td>{i.timestamp.slice(0, 16)}</td>
                  <td>{i.ruleName}</td>
                  <td>{i.userName}</td>
                  <td>{i.projectName}</td>
                  <td>
                    <span className={`badge badge-${i.status === 'resolved' ? 'ok' : i.status === 'in_progress' ? 'pending' : 'masked'}`}>
                      {i.status === 'new' ? 'Новый' : i.status === 'in_progress' ? 'В работе' : 'Закрыт'}
                    </span>
                  </td>
                  <td>{i.summary}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="hint"><Link to="/audit">Аудит и журналы</Link> — просмотр срабатываний правил по запросам.</p>
      </div>
      <div className="card">
        <div className="card-title">Настройки логирования</div>
        <p>Уровень детализации: полный. Хранение: 90 дней. Экспорт в SIEM: в планах.</p>
      </div>
    </>
  );
}
