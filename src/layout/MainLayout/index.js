import { AppBar, CssBaseline, Toolbar, useMediaQuery } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import Header from './Header';
import Sidebar from './Sidebar';

import { setMenu } from '../../redux/slices/ui-slice';
import { makeStyles, useTheme } from '@mui/styles';
import { useEffect } from 'react';
import clsx from 'clsx';

let drawerWidth = 260;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    backgroundColor: theme.palette.background.default,
  },
  appBarWidth: {
    transition: theme.transitions.create('width'),
    backgroundColor: theme.transitions.duration.leavingScreen,
  },
  content: {
    ...theme.typography.mainContent,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    [theme.breakpoints.up('md')]: {
      marginLeft: -(drawerWidth - 20),
      width: `calc(100% - ${drawerWidth}px)`,
    },
    [theme.breakpoints.down('md')]: {
      marginLeft: '20px',
      width: `calc(100% - ${drawerWidth}px)`,
      padding: '16px',
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: '10px',
      width: `calc(100% - ${drawerWidth}px)`,
      padding: '16px',
      marginRight: '10px',
    },
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    [theme.breakpoints.down('md')]: {
      marginLeft: '20px',
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: '10px',
    },
  },
}));

const MainLayout = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchDownMd = useMediaQuery(theme.breakpoints.down('md'));

  const dispatch = useDispatch();
  const leftDrawerOpened = useSelector((state) => state.customization.opened);

  const handleLeftDrawerToggle = () => {
    dispatch(setMenu(!leftDrawerOpened));
  };

  useEffect(() => {
    dispatch(setMenu(!matchDownMd));
  }, [dispatch, matchDownMd]);

  return (
    <div className={classes.root}>
      <CssBaseline />
      {/* header */}
      <AppBar
        enableColorOnDark
        position="fixed"
        color="inherit"
        elevation={0}
        className={leftDrawerOpened ? classes.appBarWidth : classes.appBar}
      >
        <Toolbar>
          <Header handleLeftDrawerToggle={handleLeftDrawerToggle} />
        </Toolbar>
      </AppBar>

      {/* drawer */}
      <Sidebar drawerOpen={leftDrawerOpened} drawerToggle={handleLeftDrawerToggle} />

      {/* main content */}
      <main
        className={clsx([
          classes.content,
          {
            [classes.contentShift]: leftDrawerOpened,
          },
        ])}
      >
        <h3> Main Content </h3>
      </main>
    </div>
  );
};

export default MainLayout;
