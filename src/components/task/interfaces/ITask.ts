import { ITaskDecription } from './ITaskDecription';
import { ITaskFooter } from './ITaskFooter';
import { ITaskHeader } from './ITaskHeader';

export interface ITask
  extends ITaskDecription,
    ITaskFooter,
    ITaskHeader {
  id?: string;
  priority?: string;
  status?: string;
}
