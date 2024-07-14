import React, { FC, ReactElement } from 'react';
import { Avatar, Box, Typography } from '@mui/material';

export const Profile: FC = (): ReactElement => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Avatar
        sx={{
          height: '96px',
          width: '96px',
          backgroundColor:'primary.main',
          marginBottom:'16px',
        }}
      >
        <Typography variant="h4" color="text.primary">J</Typography>
      </Avatar>
      <Typography variant="h6" color="text.primary">Welcome, Jhonn!</Typography>
    <Typography variant="body1" color="text.primary">This is your personal tasks manager</Typography>
    </Box>
  );
};