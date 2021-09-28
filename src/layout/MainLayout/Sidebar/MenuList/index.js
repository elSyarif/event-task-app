import React from 'react';

import MenuCollapse from './menuCollapse';

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
        icon: 'task',
        url: '/todo',
        children: [],
      },
      {
        id: 'eventask',
        title: 'Event Task',
        type: 'item',
        icon: 'calender',
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
        icon: 'task',
        url: '/todo2',
        children: [],
      },
      {
        id: 'eventask2',
        title: 'Event Task2',
        type: 'item',
        icon: 'calender',
        url: '/event2',
        children: [],
      },
    ],
  },
];

const MenuList = ({ menus }) => {
  return (
    <>
      {Menu.map((item) => {
        switch (item.type) {
          case 'collapse':
            return <MenuCollapse key={item.id} menu={item} level={1} />;
        }
      })}
    </>
  );
};

export default MenuList;
