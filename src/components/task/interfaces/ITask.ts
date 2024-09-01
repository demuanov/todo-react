import { ITaskDecription } from './ITaskDecription';
import { ITaskFooter } from './ITaskFooter';
import { ITaskHeader } from './ITaskHeader';
import { Priority } from '../../createTaskForm/enums/Priority';
import { Status } from '../../createTaskForm/enums/Status';

export interface ITask
  extends ITaskDecription,
    ITaskFooter,
    ITaskHeader {
  id?: string;
  priority?: `${Priority}`;
  status?: `${Status}`;
}
