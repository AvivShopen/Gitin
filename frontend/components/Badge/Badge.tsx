import React from 'react';
import classes from './Badge.module.css';

type Props = React.HTMLAttributes<HTMLDivElement>;

const Badge = ({ className, ...props }: Props) => {
  return (
    <div
      className={`${className} ${classes.badge} absolute flex justify-center items-center top-[-7px] right-[-7px] rounded-full w-[20px] h-[20px] text-xs`}
      {...props}
    />
  );
};

export default Badge;
