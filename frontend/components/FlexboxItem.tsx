import React from 'react';

type Props = {
  grow?: number,
  children?: React.ReactNode,
} & React.HTMLAttributes<HTMLDivElement>;

const FlexboxItem = ({ grow = 1, children, style, ...props }: Props) => {
  return (
    <div style={{ flexGrow: grow, ...style }} {...props}>
      {children}
    </div>
  );
};

export default FlexboxItem;
