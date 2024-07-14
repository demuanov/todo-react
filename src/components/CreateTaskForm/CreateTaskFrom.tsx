import React, { FC, ReactElement } from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { TaskTitleField } from './interfaces/_taskTitleField';
import { TaskDescriptionField } from './interfaces/_taskDescriptionField';
import { TaskDateFiled } from './interfaces/_taskDateField';

export const CreateTaskFrom: FC = (): ReactElement => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      width="100%"
      px={4}
      my={6}
    >
      <Typography mb={2} component="h2" variant="h6">
        Create A Task
      </Typography>
      <Stack sx={{ width: '100%' }} spacing={2}>
        <TaskTitleField disabled={false} />
        <TaskDescriptionField />
        <TaskDateFiled />
      </Stack>
    </Box>
  );
};
