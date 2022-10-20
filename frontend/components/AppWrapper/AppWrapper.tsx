import React from 'react';
import classes from './AppWrapper.module.css';

type Props = {
  children?: React.ReactNode,
};

const AppWrapper = ({ children }: Props) => {
  return <div className={`${classes.main} bg-primary flex`}>{children}</div>;
};

export default AppWrapper;
