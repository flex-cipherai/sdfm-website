import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import PlaceholderPage from './pages/PlaceholderPage';
import NotFoundPage from './pages/NotFoundPage';
import IndustryPage from './pages/IndustryPage';
import { lawFirms } from './data/industryPages';

// Industry pages built so far; each is the IndustryPage template plus a config.
const industryPages = [lawFirms];

// Pages the homepage links to. Each shows a "coming soon" page until built.
const plannedPages = [
  { path: '/podcasters', title: 'AI for podcasters' },
  { path: '/marketing-agencies', title: 'AI for marketing agencies' },
  { path: '/hr-teams', title: 'AI for HR teams' },
  { path: '/guides', title: 'Guides' },
  { path: '/custom-builds', title: 'Custom builds' },
  { path: '/ai-gap-check', title: 'Free AI check' },
  { path: '/sample-report', title: 'Sample report' },
  { path: '/contact', title: 'Contact' },
  { path: '/privacy-policy', title: 'Privacy policy' },
];

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        {industryPages.map((c) => (
          <Route key={c.slug} path={`/${c.slug}`} element={<IndustryPage config={c} />} />
        ))}
        {plannedPages.map((p) => (
          <Route key={p.path} path={p.path} element={<PlaceholderPage title={p.title} />} />
        ))}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
