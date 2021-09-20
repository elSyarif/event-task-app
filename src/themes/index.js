import { createTheme } from '@mui/material';

import Colors from '../assets/scss/_themes-vars.module.scss';
import componentStyleOverrides from './compStyleOverride';
import themePalette from './palette';
import themeTypography from './typography';

export function theme(customization = null) {
   const color = Colors;

   const themeOption = {
      colors: color,
      heading: color.grey900,
      paper: color.paper,
      backgroundDefault: color.paper,
      background: color.primaryLight,
      darkTextPrimary: color.grey700,
      darkTextSecondary: color.grey500,
      textDark: color.grey900,
      menuSelected: color.secondaryDark,
      menuSelectedBack: color.secondaryLight,
      divider: color.grey200,
      customization
   };

   return createTheme({
      direction: 'ltr',
      palette: themePalette(themeOption),
      mixins: {
         toolbar: {
            minHeight: '48px',
            padding: '16px',
            '@media (min-width: 600px)': {
               minHeightP: '48px'
            }
         }
      },
      breakpoints: {
         values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920
         }
      },
      typography: themeTypography(themeOption),
      components: componentStyleOverrides(themeOption)
   });
}

export default theme;
