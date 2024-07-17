import React, { FC, ReactElement } from 'react';
import { Box, Chip, Typography } from '@mui/material';
import { ITaskHeader } from './interfaces/ITaskHeader';
import { format } from 'date-fns';
import PropTypes from 'prop-types';

export const TaskHeader: FC<ITaskHeader> = (
  props,
): ReactElement => {
  const { title = 'Common title', date = new Date() } =
    props;

  return (
    <Box
      display="flex"
      width="100%"
      justifyContent="space-between"
      mb={3}
    >
      <Box>
        <Typography variant="h6">{title}</Typography>
      </Box>
      <Box>
        <Chip
          label={format(date, 'PPP')}
          variant="outlined"
        />
      </Box>
    </Box>
  );
};

TaskHeader.propTypes = {
  date: PropTypes.instanceOf(Date),
  title: PropTypes.string,
};
