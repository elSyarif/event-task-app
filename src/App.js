import React from 'react';
import { ThemeProvider } from '@mui/material';
import { StyledEngineProvider, CssBaseline } from '@mui/material';
import NavigationScroll from './layout/NavigationScroll';
import themes from './themes';

import { useSelector } from 'react-redux';

function App() {
   const customization = useSelector((state) => state.customization);
   return (
      <StyledEngineProvider injectFirst>
         <ThemeProvider theme={themes(customization)}>
            <CssBaseline />
            <NavigationScroll>
               <h1>Setingup</h1>
            </NavigationScroll>
         </ThemeProvider>
      </StyledEngineProvider>
   );
}

export default App;
