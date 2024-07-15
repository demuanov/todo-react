import React, { FC, ReactElement } from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { TaskTitleField } from './_taskTitleField';
import { TaskDescriptionField } from './_taskDescriptionField';
import { TaskDateFiled } from './_taskDateField';
import { TaskSelectFiled } from './_taskSelectField';

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
        <Stack direction="row" spacing={2}>
          <TaskSelectFiled items={[]} />
          <TaskSelectFiled items={[]} />
        </Stack>
      </Stack>
    </Box>
  );
};
