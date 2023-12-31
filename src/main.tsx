import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { SiteProvider } from './context';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <SiteProvider>
      <App />
    </SiteProvider>
  </React.StrictMode>,
);
