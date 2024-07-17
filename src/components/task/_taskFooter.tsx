import React, { FC, ReactElement } from 'react';
import {
  Box,
  Button,
  FormControlLabel,
  Switch,
} from '@mui/material';
import { ITaskFooter } from './interfaces/ITaskFooter';
import PropTypes from 'prop-types';

export const TaskFooter: FC<ITaskFooter> = (
  props,
): ReactElement => {
  const {
    onStatusChange = (e) => console.log(e),
    onClick = (e) => console.log(e),
  } = props;

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mt={4}
    >
      <FormControlLabel
        control={
          <Switch
            onChange={(e) => onStatusChange(e)}
            color="warning"
          />
        }
        label="in Progress"
      ></FormControlLabel>
      <Button
        color="success"
        size="small"
        variant="contained"
        sx={{ color: '#ffffff' }}
        onClick={(e) => onClick(e)}
      >
        Mark complete
      </Button>
    </Box>
  );
};

TaskFooter.propTypes = {
  onChange: PropTypes.func,
  onStatusChange: PropTypes.func,
};
