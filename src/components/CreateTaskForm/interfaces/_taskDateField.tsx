import React, { FC, ReactElement } from 'react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TextField } from '@mui/material';
import { IDateFiled } from './IDateFiled';
import PropTypes from 'prop-types';

export const TaskDateFiled: FC<IDateFiled> = (
  props,
): ReactElement => {
  const {
    value = new Date(),
    disabled = false,
    onChange = (date) => console.log(date),
  } = props;

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDatePicker
          label="Task Date"
          format="dd/MM/yyyy"
          value={value}
          disabled={disabled}
          onChange={onChange}
          renderInput={(params) => (
            <TextField {...params} />
          )}
        />
      </LocalizationProvider>
    </>
  );
};

TaskDateFiled.propTypes = {
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  value: PropTypes.instanceOf(Date),
};
