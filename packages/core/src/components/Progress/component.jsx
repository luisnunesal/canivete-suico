import React from 'react';
import { CircularProgress, LinearProgress } from '@material-ui/core'


export const ProgressComponent = (props) => {
  const ChooseProgress = (name) => {
    return {
      'circular': <CircularProgress {...props}  />,
      'linear': <LinearProgress {...props} />,
    }[name] || <CircularProgress  {...props} />
  }

  return ChooseProgress(props.name)
}
