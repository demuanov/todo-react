import React, { FC, ReactElement } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { customTheme } from './theme/customTheme';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query';
import ComposeContext from './context/Compose.context';
import { rootContext } from './context/root.context';
import { Dashboard } from './pages/dashboard/dashboard';

const queryClient = new QueryClient();

const App: FC = (): ReactElement => {
  return (
    <QueryClientProvider client={queryClient}>
      <ComposeContext components={rootContext}>
        <ThemeProvider theme={customTheme}>
          <CssBaseline />
          <Dashboard />
        </ThemeProvider>
      </ComposeContext>
    </QueryClientProvider>
  );
};
export default App;
