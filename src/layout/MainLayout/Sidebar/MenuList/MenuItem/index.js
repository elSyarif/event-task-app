import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';
import { Icon, ListItemButton, ListItemIcon, ListItemText, useMediaQuery } from '@mui/material';
import FiberManualRecord from '@mui/icons-material/FiberManualRecord';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { menuOpen, setMenu } from '../../../../../redux/slices/ui-slice';

const useStyles = makeStyles((theme) => ({
  listIcon: {
    minWidth: '18px',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  listCustomIconSub: {
    width: '6px',
    height: '6px',
  },
  listCustomIconSubActive: {
    width: '8px',
    height: '8px',
  },
  listItem: {
    marginBottom: '5px',
    alignItems: 'center',

    '&.active': {
      borderRadius: '12px',
      backgroundColor: theme.palette.secondary.light,

      '& svg': {
        color: theme.palette.secondary.dark,
        width: '8px',
        height: '8px',
      },
      '& span': {
        color: theme.palette.secondary.dark,
        fontWeight: 600,
      },
    },
  },
  listItemNoBack: {
    marginBottom: '5px',
    backgroundColor: 'transparent !important',
    paddingTop: '8px',
    paddingBottom: '8px',
    alignItems: 'flex-start',
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
      borderRadius: '12px',
    },
    '&.active': {
      borderRadius: '12px',
      backgroundColor: theme.palette.secondary.light,

      '& svg': {
        color: theme.palette.secondary.dark,
        width: '8px',
        height: '8px',
      },
      '& span': {
        color: theme.palette.secondary.dark,
        fontWeight: 600,
      },
    },
  },
  subMenuCaption: {
    ...theme.typography.subMenuCaption,
  },
}));

const MenuItem = ({ item, level }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const matchesSM = useMediaQuery((theme) => theme.breakpoints.down('md'));
  const isSelected = useSelector((state) => state.customization.isOpen);

  const handleClick = () => {
    if (level == 1) {
      dispatch(
        menuOpen(
          !isSelected
            ? item.id
            : isSelected !== null && isSelected === item.id
            ? item.id
            : isSelected !== null && isSelected !== item.id
            ? item.id
            : null
        )
      );
    }
    if (matchesSM) dispatch(setMenu(false));
  };

  const itemIcon = item.icon ? (
    <Icon className={classes.listCustomIcon}>{item.icon} </Icon>
  ) : (
    <FiberManualRecord
      className={
        isSelected === item.id ? classes.listCustomIconSubActive : classes.listCustomIconSub
      }
      fontSize={level > 0 ? 'inherit' : 'default'}
    />
  );

  let listItemProps = {
    component: React.forwardRef((props, ref) => (
      <NavLink ref={ref} {...props} to={item.url} exact />
    )),
  };
  let itemIconClass = !item.icon ? classes.listIcon : classes.menuIcon;

  return (
    <ListItemButton
      {...listItemProps}
      disabled={item.disabled}
      className={level > 1 ? classes.listItemNoBack : classes.listItem}
      sx={{ borderRadius: '12px' }}
      onClick={handleClick}
      style={{ paddingLeft: `${level * 23}px` }}
    >
      <ListItemIcon className={itemIconClass}>{itemIcon}</ListItemIcon>
      <ListItemText variant="h5" primary={item.title} color="inherit" />
    </ListItemButton>
  );
};

MenuItem.propTypes = {
  item: PropTypes.object,
  level: PropTypes.number,
};

export default MenuItem;
