import React, { FC, ReactElement } from 'react';
import { TextField } from '@mui/material';
import { ITextFiled } from './ITextFiled';

export const TaskDescriptionField: FC<ITextFiled> = (
  props,
): ReactElement => {
  const {
    onChange = (e) => console.log(e),
    disabled = false,
  } = props;

  return (
    <TextField
      id="description"
      name="description"
      label="Description"
      placeholder="Description"
      multiline
      rows={4}
      fullWidth
      variant="outlined"
      size="small"
      disabled={disabled}
      onChange={onChange}
    />
  );
};
