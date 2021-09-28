import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';
import { Icon, ListItemButton, ListItemIcon, ListItemText, useMediaQuery } from '@mui/material';
import FiberManualRecord from '@mui/icons-material/FiberManualRecord';
import { useSelector } from 'react-redux';

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
  },
  listItemNoBack: {
    marginBottom: '5px',
    backgroundColor: 'transparent !important',
    paddingTop: '8px',
    paddingBottom: '8px',
    alignItems: 'flex-start',
  },
  subMenuCaption: {
    ...theme.typography.subMenuCaption,
  },
}));

const MenuItem = ({ item, level }) => {
  const classes = useStyles();
  const matchesSM = useMediaQuery((theme) => theme.breakpoints.down('md'));
  const isSelected = useSelector((state) => state.customization.isOpen);

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

  return (
    <ListItemButton>
      <ListItemIcon>{itemIcon}</ListItemIcon>
      <ListItemText primary={item.title} />
    </ListItemButton>
  );
};

MenuItem.propTypes = {
  item: PropTypes.object,
  level: PropTypes.number,
};

export default MenuItem;
