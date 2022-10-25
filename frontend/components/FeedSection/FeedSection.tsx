import React from 'react';
import Button from '../Button/Button';
import FlexboxItem from '../FlexboxItem';
import IconlyIcon from '../Icon/IconlyIcon';
import Stack from '../Stack/Stack';

const FeedSection = () => {
  return (
    <FlexboxItem grow={2}>
      <Stack
        direction="vertical"
        className="w-[100%] h-[100%] bg-secondary items-center">
        <Stack
          direction="horizontal"
          className="w-[100%] py-2 rounded-b-md justify-center cursor-pointer bg-accent-dark">
          <IconlyIcon name="Discovery" size="large" />
          <span className="text-white font-bold text-2xl mx-4">Feed</span>
        </Stack>
        <Stack direction="horizontal" className="w-[100%] mt-4 justify-center">
          <input
            placeholder="Tell us what you're thinking about..."
            className="bg-accent-light placeholder:text-gray-300 text-white font-medium rounded-l-xl w-[70%] h-12 px-4"
          />
          <Button className="bg-primary rounded-none rounded-r-xl aspect-square w-12 flex justify-center items-center">
            <IconlyIcon name="Send" size="large" />
          </Button>
        </Stack>
      </Stack>
    </FlexboxItem>
  );
};

export default FeedSection;
