import React from 'react';

type Props = {
  direction?: 'horizontal' | 'vertical',
  children?: React.ReactNode,
} & React.HTMLAttributes<HTMLDivElement>;

const Stack = ({
  direction = 'vertical',
  children,
  className = '',
  ...props
}: Props) => {
  return (
    <div
      className={`flex ${
        direction === 'vertical' ? 'flex-col' : 'flex-row'
      } ${className}`}
      {...props}>
      {children}
    </div>
  );
};

export default Stack;
