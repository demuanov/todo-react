import { ITaskDecription } from './ITaskDecription';
import { ITaskFooter } from './ITaskFooter';
import { ITaskHeader } from './ITaskHeader';
import { Priority } from '../../createTaskForm/enums/Priority';

export interface ITask
  extends ITaskDecription,
    ITaskFooter,
    ITaskHeader {
  priority?: `${Priority}`;
}
