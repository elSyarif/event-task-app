import React from 'react';
import { useSelector } from 'react-redux';

import { makeStyles, useTheme } from '@mui/styles';
import { Chip, Avatar } from '@mui/material';
const useStyles = makeStyles((theme) => ({
  navContainer: {},
  headerAvatar: {},
  profileChip: {},
  profileLabel: {},
  listItem: {},
  cardContent: {},
  card: {},
  searchControl: {},
  startAdornment: {},
  felx: {},
  name: {},
  scrollHeight: {},
  badgeWarning: {},
}));

const ProfileSection = () => {
  const classes = useStyles();
  const theme = useTheme();
  const customization = useSelector((state) => state.customization);

  return (
    <>
      <Chip
        classes={{ label: classes.profileLabel }}
        className={classes.profileChip}
      />
    </>
  );
};

export default ProfileSection;
