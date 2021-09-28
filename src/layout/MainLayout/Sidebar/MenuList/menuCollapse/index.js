import { useEffect, useState } from 'react';
import PropType from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { ListItemButton, ListItemIcon, ListItemText, Collapse, List } from '@mui/material';
import Icon from '@mui/material/Icon';
import { IconChevronDown, IconChevronUp } from '@tabler/icons';
import { menuOpen } from '../../../../../redux/slices/ui-slice';

const MenuCollapse = ({ menu, level }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const dispatch = useDispatch();
  const isSelected = useSelector((state) => state.customization.isOpen);

  const handleClick = () => {
    setOpen(!open);
    setSelected(!isSelected ? menu.id : null);
  };

  useEffect(() => {
    dispatch(menuOpen(selected));
  }, [selected]);

  console.log(isSelected);

  const menus = menu.children.map((item) => {
    switch (item.type) {
      case 'collapse':
        return <MenuCollapse key={item.id} menu={item} level={level + 1} />;
      case 'item':
        return <div key={item.id}> {item.title}</div>;
    }
  });
  return (
    <>
      <ListItemButton onClick={handleClick} selected={isSelected === menu.id}>
        <ListItemIcon>
          <Icon>{menu.icon} </Icon>
        </ListItemIcon>
        <ListItemText primary={menu.title} />
        {isSelected === menu.id ? (
          <IconChevronUp stroke={1.5} size="1.2rem" />
        ) : (
          <IconChevronDown stroke={1.5} size="1.2rem" />
        )}
      </ListItemButton>
      <Collapse in={isSelected === menu.id} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
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
