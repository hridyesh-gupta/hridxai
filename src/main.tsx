import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import IntroWrapper from './components/IntroWrapper.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <IntroWrapper />
  </StrictMode>
);
