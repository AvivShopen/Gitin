import React from 'react';

type Props = React.HTMLAttributes<HTMLButtonElement>;

const Button = ({ className, ...props }: Props) => {
  return (
    <button
      className={`${className} relative outline-none bg-accent border-gray-500 border-[1px] p-1 rounded-md transition-all duration-[350ms] hover:brightness-125 active:brightness-[90%]`}
      {...props}
    />
  );
};

export default Button;
