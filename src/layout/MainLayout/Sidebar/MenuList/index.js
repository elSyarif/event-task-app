import React from 'react';

import { Typography } from '@mui/material';

import MenuCollapse from './menuCollapse';
import MenuItem from './MenuItem';

const Menu = [
  {
    id: 'feature',
    title: 'Feature',
    caption: '',
    type: 'collapse',
    icon: 'dashboard',
    children: [
      {
        id: 'todotask',
        title: 'Todo Task',
        type: 'item',
        icon: '',
        url: '/todo',
        children: [],
      },
      {
        id: 'eventask',
        title: 'Event Task',
        type: 'item',
        icon: '',
        url: '/event',
        children: [],
      },
    ],
  },
  {
    id: 'pages',
    title: 'Pages',
    caption: '',
    type: 'collapse',
    icon: 'dashboard',
    children: [
      {
        id: 'todotask2',
        title: 'Todo Task2',
        type: 'item',
        icon: '',
        url: '/todo2po',
        children: [],
      },
      {
        id: 'eventask2',
        title: 'Event Task2',
        type: 'item',
        icon: '',
        url: '/eventsa2',
        children: [],
      },
    ],
  },
  {
    id: 'shop',
    title: 'Shop',
    caption: '',
    type: 'item',
    icon: 'shop',
    url: '/shop',
    children: [],
  },
];

const MenuList = () => {
  return (
    <>
      {Menu.map((item) => {
        switch (item.type) {
          case 'collapse':
            return <MenuCollapse key={item.id} menu={item} level={1} />;
          case 'item':
            return <MenuItem key={item.id} item={item} level={1} />;
          default:
            return (
              <Typography key={item.id} variant="h6" color="error" align="center">
                Menu Items Error
              </Typography>
            );
        }
      })}
    </>
  );
};

export default MenuList;
