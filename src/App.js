import React from 'react';
import { ThemeProvider } from '@mui/material';
import { StyledEngineProvider, CssBaseline } from '@mui/material';
import NavigationScroll from './layout/NavigationScroll';
import themes from './themes';
import MainLayout from './layout/MainLayout';
import { useSelector } from 'react-redux';

function App() {
   const customization = useSelector((state) => state.customization);

   return (
      <StyledEngineProvider injectFirst>
         <ThemeProvider theme={themes(customization)}>
            <CssBaseline />
            <NavigationScroll>
               <MainLayout />
            </NavigationScroll>
         </ThemeProvider>
      </StyledEngineProvider>
   );
}

export default App;
