import { IDisabled } from './IDisabled';
import { ChangeEvent } from 'react';

export interface ITextFiled extends IDisabled {
  onChange?: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
}
