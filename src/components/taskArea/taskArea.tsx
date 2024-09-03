import {
  Alert,
  Box,
  Grid,
  LinearProgress,
} from '@mui/material';
import React, {
  FC,
  ReactElement,
  useContext,
  useEffect,
} from 'react';
import { format } from 'date-fns';
import { TaskCounter } from '../taskCounter/taskCounter';
import { Status } from '../createTaskForm/enums/Status';
import { Task } from '../task/task';
import { useMutation, useQuery } from 'react-query';
import { sendApiRequest } from '../../helpers/sendApiRequest';
import { ITaskApi } from './interfaces/ITaskApi';
import { IUpdateTask } from '../task/interfaces/IUpdateTask';
import { countTasks } from './helpers/countTasks';
import { TaskStatusChangedContext } from '../../context';

export const TaskArea: FC = (): ReactElement => {
  const tasksUpdatedContext = useContext(
    TaskStatusChangedContext,
  );

  const { error, isLoading, data, refetch } = useQuery(
    'tasks',
    async () => {
      return await sendApiRequest<ITaskApi[]>(
        'http://localhost:3200/tasks',
        'GET',
      );
    },
  );

  const updateTaskMutation = useMutation(
    (data: IUpdateTask) =>
      sendApiRequest(
        'http://localhost:3200/task-update-status',
        'PUT',
        data,
      ),
  );

  useEffect(() => {
    refetch();
  }, [tasksUpdatedContext.updated]);

  useEffect(() => {
    if (updateTaskMutation.isSuccess) {
      tasksUpdatedContext.toggle();
    }
  }, [updateTaskMutation.isSuccess]);

  function onStatusChangeHandler(
    e: React.ChangeEvent<HTMLInputElement>,
    id: string,
  ) {
    updateTaskMutation.mutate({
      id,
      status: e.target.checked
        ? Status.inProgress
        : Status.todo,
    });
  }

  function markCompleteHandler(
    e:
      | React.MouseEvent<HTMLButtonElement>
      | React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) {
    updateTaskMutation.mutate({
      id,
      status: Status.completed,
    });
  }

  return (
    <Grid item md={8} px={4}>
      <Box mb={8} px={4}>
        <h2>
          Status Of Your Tasks As On
          {format(new Date(), 'PPP')}
        </h2>
      </Box>

      <Grid
        container
        display="flex"
        justifyContent="center"
      >
        <Grid
          item
          display='flex'
          flexDirection='row'
          justifyContent='space-around'
          alignItems='center'
          md={10}
          xs={12}
          mb={8}
        >
          <TaskCounter
            status={Status.todo}
            count={
              data
                ? countTasks(data, Status.todo)
                : undefined
            }
          />
          <TaskCounter
            status={Status.inProgress}
            count={
              data
                ? countTasks(data, Status.inProgress)
                : undefined
            }
          />
          <TaskCounter
            status={Status.completed}
            count={
              data
                ? countTasks(data, Status.completed)
                : undefined
            }
          />
        </Grid>
        <Grid
          item
          display='flex'
          flexDirection='column'
          xs={10}
          mb={8}
        >
          <>
            {error && (
              <Alert severity='error'>
                Fetching cause error
              </Alert>
            )}

            {!error &&
              Array.isArray(data) &&
              data.length === 0 && (
                <Alert severity='warning'>
                  No tasks in DB
                </Alert>
              )}

            {isLoading ? (
              <LinearProgress />
            ) : (
              Array.isArray(data) &&
              data.length > 0 &&
              data.map((task, index) => {
                return task.status === Status.todo ||
                task.status === Status.inProgress ? (
                  <Task
                    key={index + task.priority}
                    id={task.id}
                    title={task.title}
                    date={new Date(task.date)}
                    description={task.description}
                    priority={task.priority}
                    status={task.status}
                    onStatusChange={onStatusChangeHandler}
                    onClick={markCompleteHandler}
                  />
                ) : (
                  false
                );
              })
            )}
          </>
        </Grid>
      </Grid>
    </Grid>
  );
};
