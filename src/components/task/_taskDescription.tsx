import React, { FC, ReactElement } from 'react';
import { Box, Typography } from '@mui/material';
import { ITaskDecription } from './interfaces/ITaskDecription';
import PropTypes from 'prop-types';

export const TaskDescription: FC<ITaskDecription> = (
  props,
): ReactElement => {
  return (
    <Box>
      <Typography>{props.description}</Typography>
    </Box>
  );
};

TaskDescription.propTypes = {
  description: PropTypes.string,
};
