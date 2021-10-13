import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';
import { Drawer, useMediaQuery, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import LogoSection from '../LogoSection';

import PerfectScrollbar from 'react-perfect-scrollbar';
import { BrowserView, MobileView } from 'react-device-detect';

import MenuList from './MenuList';

const drawerWidth = 260;

const useStyles = makeStyles((theme) => ({
  drawer: {
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: drawerWidth,
    background: theme.palette.background.default,
    color: theme.palette.text.primary,
    borderRight: 'none',
    [theme.breakpoints.up('md')]: {
      top: '88px',
    },
  },
  ScrollHeight: {
    height: 'calc(100vh - 88px)',
    paddingLeft: '16px',
    paddingRight: '16px',
    [theme.breakpoints.down('sm')]: {
      height: 'calc(100vh - 56px)',
    },
  },
  boxContainer: {
    display: 'flex',
    padding: '16px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  listItemNoBack: {
    display: 'block',
    marginBottom: '5px',
    backgroundColor: 'transparent !important',
    paddingTop: '8px',
    paddingBottom: '8px',
    alignItems: 'flex-start',
  },
}));

const Sidebar = ({ drawerOpen, drawerToggle, window }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchUpmd = useMediaQuery(theme.breakpoints.up('md'));

  const drawer = (
    <>
      <Box sx={{ display: { sx: 'block', md: 'none' } }}>
        <div className={classes.boxContainer}>
          <LogoSection />
        </div>
      </Box>
      <BrowserView>
        <PerfectScrollbar component="div" className={classes.ScrollHeight}>
          {/* Menu Item */}
          {/* MetisMenu */}
          <MenuList />
        </PerfectScrollbar>
      </BrowserView>
      <MobileView>Mobile</MobileView>
    </>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <nav className={classes.drawer} aria-label="folder">
      <Drawer
        container={container}
        variant={matchUpmd ? 'persistent' : 'temporary'}
        anchor="left"
        ModalProps={{ keepMounted: true }}
        open={drawerOpen}
        onClose={drawerToggle}
        classes={{ paper: classes.drawerPaper }}
      >
        {drawer}
      </Drawer>
    </nav>
  );
};

Sidebar.propTypes = {
  drawerOpen: PropTypes.bool,
  drawerToggle: PropTypes.func,
  window: PropTypes.object,
};

export default Sidebar;
