import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import App from './App';
import { createMirageServer } from './server/server';
import { store } from './redux/store';

import './index.scss';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

createMirageServer({ environment: 'development' });

root.render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <App />
      <ReactQueryDevtools initialIsOpen={false} />
    </Provider>
  </QueryClientProvider>
);
