import { AppBar, CssBaseline, Toolbar } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import Header from './Header';
import Sidebar from './Sidebar';

import { setMenu } from '../../redux/slices/ui-slice';

const MainLayout = () => {
  const dispatch = useDispatch();

  const leftDrawerOpened = useSelector(
    (state) => state.customization.opened
  );

  const handleLeftDrawerToggle = () => {
    dispatch(setMenu(!leftDrawerOpened));
  };
  return (
    <div>
      <CssBaseline />
      {/* header */}
      <AppBar
        enableColorOnDark
        position="fixed"
        color="inherit"
        elevation={0}
        className={leftDrawerOpened ? '' : ''}
      >
        <Toolbar>
          <Header handleLeftDrawerToggle={handleLeftDrawerToggle} />
        </Toolbar>
      </AppBar>

      {/* drawer */}
      <Sidebar
        drawerOpen={leftDrawerOpened}
        drawerToggle={handleLeftDrawerToggle}
      />

      {/* main content */}
      <main>
        <h3> Main Content </h3>
      </main>
    </div>
  );
};

export default MainLayout;
