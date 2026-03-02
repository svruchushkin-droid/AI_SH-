import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { useAppState } from './hooks/useAppState';
import { Dashboard } from './pages/Dashboard';
import { Playground } from './pages/Playground';
import { Catalog } from './pages/Catalog';
import { Routing } from './pages/Routing';
import { Templates } from './pages/Templates';
import { Dlp } from './pages/Dlp';
import { Audit } from './pages/Audit';
import { Usage } from './pages/Usage';
import { Admin } from './pages/Admin';
import { Integrations } from './pages/Integrations';
import { About } from './pages/About';

function ThemeSync() {
  const theme = useAppState().theme;
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);
  return null;
}

export default function App() {
  return (
    <>
      <ThemeSync />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="playground" element={<Playground />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="routing" element={<Routing />} />
          <Route path="templates" element={<Templates />} />
          <Route path="dlp" element={<Dlp />} />
          <Route path="audit" element={<Audit />} />
          <Route path="usage" element={<Usage />} />
          <Route path="admin" element={<Admin />} />
          <Route path="integrations" element={<Integrations />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </>
  );
}
