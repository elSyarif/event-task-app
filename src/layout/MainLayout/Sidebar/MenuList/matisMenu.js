import { Link, NavLink } from 'react-router-dom';
import MetisMenu from '@metismenu/react';
import 'metismenujs/dist/metismenujs.css';
import { styled } from '@mui/styles';

import { IconAd2 } from '@tabler/icons';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { ListItemIcon, Typography, ListItemButton } from '@mui/material';

const ListMenu = styled('li')(({ theme }) => ({
  ...theme.typography.body2,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  position: 'relative',
  textTransform: 'capitalize',
  cursor: 'pointer',
  color: theme.palette.text.secondary,
  '&.mm-active a[aria-expanded="true"]': {
    borderRadius: '12px',
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.secondary.dark,
    '& svg': {
      color: theme.palette.secondary.dark,
    },
  },
  '&:before': {
    top: 0,
    right: 0,
    width: 3,
    bottom: 0,
    content: "''",
    display: 'none',
    position: 'absolute',
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    backgroundColor: theme.palette.primary.main,
  },
}));

const ListItem = styled(NavLink)(({ theme }) => ({
  display: 'flex !important',
  alignItems: 'center',
  width: '100%',
  color: theme.palette.grey[900],
  padding: '7px 12px',
  margin: '4px',
  '&:hover': {
    backgroundColor: theme.palette.secondary.light,
    borderRadius: '12px',
  },
  '&.active': {
    borderRadius: '12px',
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.secondary.dark,
    '& svg': {
      color: theme.palette.secondary.dark,
    },
    '& p': {
      fontWeight: 600,
    },
  },
}));

const ListItems = styled(Link)(({ theme }) => ({
  display: 'flex !important',
  alignItems: 'center',
  width: '100%',
  color: theme.palette.grey[900],
  padding: '7px 12px',
  margin: '4px',
  '&:hover': {
    backgroundColor: theme.palette.secondary.light,
    borderRadius: '12px',
  },
  '&.active': {
    borderRadius: '12px',
    backgroundColor: theme.palette.secondary.light,
  },
}));

const SubListItem = styled('ul')(({ theme }) => ({
  marginLeft: '30px !important',
  paddingLeft: '10px !important',
  borderLeft: `1px solid ${theme.palette.secondary.light} `,
  listStyle: 'outside !important',
}));

const SubItem = styled('li')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
}));

const SubLinkItem = styled(NavLink)(({ theme }) => ({
  margin: '3px',
  '&.active': {
    color: theme.palette.secondary.dark,
    fontWeight: 600,
  },
}));

const menuItem = (menu) => {
  return menu.subMenu.length > 0 ? (
    <SubItem key={menu.subMenu.id}>
      <SubLinkItem to={`/${menu.subMenu.to}`}>
        <FiberManualRecordIcon
          fontSize="inherit"
          sx={{ width: '8px', height: '8px', marginRight: '8px' }}
        />
        {menu.subMenu.name}
      </SubLinkItem>
    </SubItem>
  ) : null;
};

const MenuList = ({ menus }) => {
  return (
    <>
      <MetisMenu>
        {menus.map((menu, index) => {
          return menu.subMenu.length > 0 ? (
            <ListMenu key={index}>
              <ListItems to={`/${menu.to}`} className="has-arrow">
                <ListItemIcon>
                  <IconAd2 size="1.7rem" stroke={1.8} />
                </ListItemIcon>
                <Typography variant="body1">{menu.name} </Typography>
              </ListItems>
              <SubListItem>
                {menu.subMenu.map((sub) => {
                  return (
                    <SubItem key={sub.id}>
                      <SubLinkItem to={`/${sub.to}`}>
                        <FiberManualRecordIcon
                          fontSize="inherit"
                          sx={{ width: '8px', height: '8px', marginRight: '8px' }}
                        />
                        {sub.name}
                      </SubLinkItem>
                    </SubItem>
                  );
                })}
              </SubListItem>
            </ListMenu>
          ) : (
            <ListMenu key={menu.id}>
              <ListItem to={`/${menu.to}`}>
                <ListItemIcon>
                  <IconAd2 size="1.7rem" stroke={1.8} />
                </ListItemIcon>
                <Typography variant="body1"> {menu.name} </Typography>
              </ListItem>
            </ListMenu>
          );
        })}

        {/*  */}
      </MetisMenu>
    </>
  );
};

export default MenuList;
