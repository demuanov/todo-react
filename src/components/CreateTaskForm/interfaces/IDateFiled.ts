import { IDisabled } from './IDisabled';

export interface IDateFiled extends IDisabled {
  value?: Date | null;
  onChange?: (date: Date | null) => void;
}
