import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../data/projects';
import { MODELS } from '../data/models';
import '../App.css';

type Mode = 'chat' | 'instructions' | 'summarization';
type ComplianceStatus = 'ok' | 'blocked' | 'masked' | null;

export function Playground() {
  const [projectId, setProjectId] = useState(PROJECTS[0]?.id ?? '');
  const [modelId, setModelId] = useState(MODELS[0]?.id ?? '');
  const [mode, setMode] = useState<Mode>('chat');
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [compliance, setCompliance] = useState<ComplianceStatus>(null);

  const project = PROJECTS.find((p) => p.id === projectId);
  const allowedModels = project ? MODELS.filter((m) => project.allowedModelIds.includes(m.id)) : MODELS;
  useEffect(() => {
    const proj = PROJECTS.find((p) => p.id === projectId);
    if (proj) {
      const allowed = MODELS.filter((m) => proj.allowedModelIds.includes(m.id));
      setModelId((prev) => (proj.allowedModelIds.includes(prev) ? prev : allowed[0]?.id ?? prev));
    }
  }, [projectId]);

  const handleSend = () => {
    if (!input.trim()) return;
    setCompliance('masked');
    setResponse('(Демо) Ответ модели. Персональные данные в запросе замаскированы согласно DLP-политикам. Контакт: +7 *** ***-**-**');
  };

  return (
    <>
      <h1 className="page-title">Playground / Чат</h1>
      <div className="playground-layout grid-2">
        <div className="card">
          <div className="card-title">Параметры запроса</div>
          <div className="form-group">
            <label>Проект</label>
            <select value={projectId} onChange={(e) => setProjectId(e.target.value)}>
              {PROJECTS.map((p) => (
                <option key={p.id} value={p.id}>{p.name}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>Модель / провайдер</label>
            <select value={modelId} onChange={(e) => setModelId(e.target.value)}>
              {allowedModels.map((m) => (
                <option key={m.id} value={m.id}>{m.name} ({m.providerName})</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>Режим</label>
            <select value={mode} onChange={(e) => setMode(e.target.value as Mode)}>
              <option value="chat">Чат</option>
              <option value="instructions">Инструкции</option>
              <option value="summarization">Суммаризация</option>
            </select>
          </div>
          <div className="policies-panel card">
            <div className="card-title">Политики активны</div>
            <ul className="policies-list">
              <li>Лимит токенов: 4 096</li>
              <li>DLP-маскирование: ФИО, телефон, паспорт</li>
            </ul>
          </div>
        </div>
        <div className="card flex-col">
          <div className="card-title">Ввод и ответ</div>
          <div className="form-group">
            <label>Запрос</label>
            <textarea rows={4} value={input} onChange={(e) => setInput(e.target.value)} placeholder="Введите запрос..." />
          </div>
          {compliance && (
            <div className={`compliance-badge compliance-${compliance}`}>
              Проверка комплаенса: {compliance === 'ok' ? 'OK' : compliance === 'blocked' ? 'Blocked' : 'Masked'}
            </div>
          )}
          <div className="playground-actions">
            <button type="button" className="btn" onClick={handleSend}>Отправить</button>
            <button type="button" className="btn btn-secondary">Сохранить как шаблон</button>
            <button type="button" className="btn btn-secondary">Отправить в аудит (фиктивно)</button>
            <button type="button" className="btn btn-secondary">Экспорт ответа</button>
          </div>
          {response && (
            <div className="form-group">
              <label>Ответ</label>
              <div className="response-box">{response}</div>
            </div>
          )}
        </div>
      </div>
      <p className="hint">
        <Link to="/templates">Открыть шаблон в Playground</Link> · <Link to="/audit">Журнал аудита</Link>
      </p>
    </>
  );
}
