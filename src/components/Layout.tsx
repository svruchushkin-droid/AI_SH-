import { Outlet, NavLink } from 'react-router-dom';
import { useAppState } from '../hooks/useAppState';
import { ROLES } from '../data/roles';
import '../App.css';
import './Layout.css';

const NAV_ITEMS = [
  { to: '/', label: 'Dashboard', icon: '📊' },
  { to: '/playground', label: 'Playground / Чат', icon: '💬' },
  { to: '/catalog', label: 'Каталог моделей', icon: '📦' },
  { to: '/routing', label: 'Маршрутизация и политики', icon: '🛤️' },
  { to: '/templates', label: 'Шаблоны промптов', icon: '📝' },
  { to: '/dlp', label: 'DLP и безопасность', icon: '🔒' },
  { to: '/audit', label: 'Аудит и журналы', icon: '📋' },
  { to: '/usage', label: 'Usage и биллинг', icon: '💰' },
  { to: '/admin', label: 'Администрирование', icon: '⚙️' },
  { to: '/integrations', label: 'Интеграции', icon: '🔌' },
  { to: '/about', label: 'О платформе', icon: 'ℹ️' },
];

export function Layout() {
  const { role, theme, setRole, toggleTheme } = useAppState();

  return (
    <div className="app" data-theme={theme}>
      <aside className="sidebar">
        <div className="sidebar-header">
          <div className="sidebar-title">ИИ-шлюз</div>
          <div className="sidebar-subtitle">Единый шлюз для госсектора</div>
        </div>
        <nav className="sidebar-nav">
          {NAV_ITEMS.map(({ to, label, icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
            >
              <span aria-hidden>{icon}</span>
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>
      </aside>
      <main className="main">
        <header className="topbar">
          <div className="topbar-left">
            <span className="topbar-role-label">Роль (демо):</span>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value as typeof role)}
              className="topbar-select"
              aria-label="Выбор роли"
            >
              {ROLES.map((r) => (
                <option key={r.id} value={r.id}>{r.name}</option>
              ))}
            </select>
          </div>
          <div className="topbar-right">
            <button type="button" onClick={toggleTheme} className="btn btn-secondary" aria-label="Тема">
              {theme === 'light' ? '🌙 Тёмная' : '☀️ Светлая'}
            </button>
          </div>
        </header>
        <div className="content">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
