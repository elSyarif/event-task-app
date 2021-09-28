import { useState } from 'react';
import PropType from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  List,
  Typography,
} from '@mui/material';
import Icon from '@mui/material/Icon';
import FiberManualRecord from '@mui/icons-material/FiberManualRecord';
import { IconChevronDown, IconChevronUp } from '@tabler/icons';
import { menuOpen } from '../../../../../redux/slices/ui-slice';
import { makeStyles } from '@mui/styles';

import MenuItem from '../MenuItem';

const useStyles = makeStyles((theme) => ({
  collapseIcon: {
    fontSize: '1rem',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  collapseIconSub: {
    fontSize: '1rem',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  menuIcon: {
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  listIcon: {
    minWidth: '18px',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  listCustomIcon: {
    width: '20px',
    height: '20px',
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
    alignItems: 'flex-start',
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

const MenuCollapse = ({ menu, level }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
  const isSelected = useSelector((state) => state.customization.isOpen);

  const handleClick = () => {
    setOpen(!open);
    dispatch(
      menuOpen(
        !isSelected ? menu.id : isSelected !== null && isSelected !== menu.id ? menu.id : null
      )
    );
  };

  const menus = menu.children.map((item) => {
    switch (item.type) {
      case 'collapse':
        return <MenuCollapse key={item.id} menu={item} level={level + 1} />;
      case 'item':
        return (
          <MenuItem key={item.id} item={item}>
            {' '}
            {item.title}
          </MenuItem>
        );
    }
  });

  const menuIcon = menu.icon ? (
    <Icon className={classes.listCustomIcon}>{menu.icon} </Icon>
  ) : (
    <FiberManualRecord
      className={
        isSelected === menu.id ? classes.listCustomIconSubActive : classes.listCustomIconSub
      }
      fontSize={level > 0 ? 'inherit' : 'default'}
    />
  );

  const menuIconClass = !menu.icon ? classes.listIcon : classes.menuIcon;
  return (
    <>
      <ListItemButton
        onClick={handleClick}
        selected={isSelected === menu.id}
        className={level > 1 ? classes.listItemNoBack : classes.listItem}
        sx={{
          borderRadius: '12px',
        }}
        style={{ paddingLeft: `${level * 23}px` }}
      >
        <ListItemIcon className={menuIconClass}>{menuIcon}</ListItemIcon>
        <ListItemText
          primary={
            <Typography variant={isSelected === menu.id ? 'h5' : 'body1'} color="inherit">
              {menu.title}
            </Typography>
          }
          secondary={
            menu.caption && (
              <Typography
                varian="caption"
                className={classes.subMenuCaption}
                display="block"
                gutterBottom
              >
                {menu.caption}
              </Typography>
            )
          }
        />
        {isSelected === menu.id ? (
          <IconChevronUp
            stroke={1.5}
            size="1.2rem"
            className={level > 1 ? classes.collapseIconSub : classes.collapseIcon}
          />
        ) : (
          <IconChevronDown
            stroke={1.5}
            size="1.2rem"
            className={level > 1 ? classes.collapseIconSub : classes.collapseIcon}
          />
        )}
      </ListItemButton>
      <Collapse in={isSelected === menu.id} timeout="auto" unmountOnExit>
        <List component="div" disablePadding className="">
          {menus}
        </List>
      </Collapse>
    </>
  );
};

MenuCollapse.propType = {
  menu: PropType.object,
  level: PropType.number,
};

export default MenuCollapse;
