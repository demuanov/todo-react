import React, { FC, ReactElement } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { customTheme } from './theme/customTheme';
import { QueryClient, QueryClientProvider} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { Dashboard } from './pages/dashboard/dashboard';

const queryClient = new QueryClient()

const App: FC = (): ReactElement => {
  return (
    <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <Dashboard></Dashboard>
    </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false}/>
    </QueryClientProvider>      
  );
};
export default App;
