import React from 'react';
import FlexboxItem from '../FlexboxItem';

const FeedSection = () => {
  return (
    <FlexboxItem grow={2}>
      <div className="w-[100%] h-[100%] bg-secondary text-center pt-2">
        <span className="text-white font-bold text-2xl">Feed</span>
      </div>
    </FlexboxItem>
  );
};

export default FeedSection;
