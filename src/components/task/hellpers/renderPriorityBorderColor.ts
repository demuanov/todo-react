import { Priority } from '../../createTaskForm/enums/Priority';

export const renderPriorityBorderColor = (
  priority: string,
): string => {
  switch (priority) {
    case Priority.high:
      return 'grey.900';
    case Priority.normal:
      return 'info.light';
    case Priority.low:
      return 'error.light';
    default:
      return 'grey.900';
  }
};
