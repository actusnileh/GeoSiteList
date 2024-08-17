import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './routing/App';

import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';

import "./shared/global_styles/unstyle.css";
import './shared/global_styles/fonts.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
