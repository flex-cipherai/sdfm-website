import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// Base styles first so component styles can override them
import './styles/global.css';
import App from './App';
import { initClickTracking, loadGtm, setDefaultConsent } from './lib/tracking';
import { readConsent } from './lib/consent';

setDefaultConsent(readConsent());
loadGtm(import.meta.env.VITE_GTM_ID);
initClickTracking();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
