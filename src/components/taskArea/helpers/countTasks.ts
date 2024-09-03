import { ITaskApi } from '../interfaces/ITaskApi';
import { TaskCounterStatusType } from '../interfaces/ITaskCounter';

export const countTasks = (
  tasks: ITaskApi[],
  status: TaskCounterStatusType,
): number => {
  if (!Array.isArray(tasks)) {
    return 0;
  }

  return tasks.filter((task) => {
    return task.status === status;
  }).length;
};
