import React from 'react';
import { Iconly } from 'react-iconly';

type Props = {
  name: string,
  primaryColor?: string,
  set?: 'light' | 'bold' | 'two-tone' | 'bulk' | 'broken' | 'curved',
  size?: number | 'medium' | 'small' | 'large' | 'xlarge',
};

const IconlyIcon = ({
  name,
  primaryColor = 'white',
  set = 'light',
  size = 'medium',
}: Props) => {
  return (
    <Iconly name={name} primaryColor={primaryColor} set={set} size={size} />
  );
};

export default IconlyIcon;
