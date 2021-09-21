import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';
import { Box, ButtonBase, Avatar } from '@mui/material';

import { IconMenu2 } from '@tabler/icons';
import Logo from '../LogoSection';

const useSyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  headerAvater: {
    ...theme.typography.commonAvatar,
    ...theme.typography.mediumAvatar,
    transition: 'all .2s ease-in-out',
    background: theme.palette.secondary.light,
    color: theme.palette.secondary.dark,
    '&:hover': {
      background: theme.palette.secondary.dark,
      color: theme.palette.secondary.light,
    },
  },
  boxContainer: {
    width: '228px',
    display: 'flex',
    [theme.breakpoints.down('md')]: {
      width: 'auto',
    },
  },
}));

const Header = ({ handleLeftDrawerToggle }) => {
  const classes = useSyles();

  return (
    <>
      <div className={classes.boxContainer}>
        <Box
          component="span"
          sx={{
            display: { xs: 'none', md: 'block' },
            flexGrow: 1,
          }}
        >
          <Logo />
        </Box>
        <ButtonBase sx={{ borderRadius: '12px', overflow: 'hidden' }}>
          <Avatar
            variant="rounded"
            className={classes.headerAvater}
            onClick={handleLeftDrawerToggle}
            color="inherit"
          >
            <IconMenu2 stroke={1.5} size="1.3rem" />
          </Avatar>
        </ButtonBase>
      </div>
    </>
  );
};

Header.propTypes = {
  handleLeftDrawerToggle: PropTypes.func,
};

export default Header;
