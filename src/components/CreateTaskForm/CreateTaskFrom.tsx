import React, { FC, ReactElement } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { TaskTitleField } from './_taskTitleField';
import { TaskDescriptionField } from './_taskDescriptionField';
import { TaskDateFiled } from './_taskDateField';
import { TaskSelectFiled } from './_taskSelectField';
import { Status } from './enums/Status';
import { Priority } from './enums/Priority';

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
          <TaskSelectFiled
            label="Status"
            name="status"
            items={[
              {
                value: Status.todo,
                label: Status.todo.toUpperCase(),
              },
              {
                value: Status.inProgress,
                label: Status.inProgress.toUpperCase(),
              },
            ]}
          />
          <TaskSelectFiled
            label="Priority"
            name="priority"
            items={[
              {
                value: Priority.normal,
                label: Priority.normal,
              },
              {
                value: Priority.high,
                label: Priority.high,
              },
            ]}
          />
        </Stack>
      </Stack>
    </Box>
  );
};
