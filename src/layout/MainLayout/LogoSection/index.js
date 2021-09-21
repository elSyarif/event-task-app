import React from 'react';
import { ButtonBase } from '@mui/material';
import { Link } from 'react-router-dom';
import { IconActivity } from '@tabler/icons';
import { Box } from '@mui/system';

const LogoSection = () => {
  return (
    <ButtonBase disableRipple component={Link} to="/">
      <IconActivity size="1.7rem" stroke={1.8} />
      <Box component="div" sx={{ ml: '.7em' }} fontSize={18}>
        {' '}
        Logo
      </Box>
    </ButtonBase>
  );
};

export default LogoSection;
