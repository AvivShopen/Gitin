import React from 'react';
import Button from '../Button/Button';
import FlexboxItem from '../FlexboxItem';
import IconlyIcon from '../Icon/IconlyIcon';
import Stack from '../Stack/Stack';
import navItemStyles from '../../styles/NavItem.module.css';

const GlobalSection = () => {
  return (
    <FlexboxItem grow={1} className="max-w-[25%]">
      <Stack direction="horizontal" className="items-center">
        <div className={navItemStyles.navItem}>
          <IconlyIcon name="Category" />
        </div>
        <FlexboxItem grow={2} className="flex items-center justify-center">
          <span className="md:text-3xl text-4xl font-bold">GitIn</span>
        </FlexboxItem>
        <FlexboxItem grow={2}>
          <div className={`${navItemStyles.navItem} flex justify-evenly`}>
            <Button className="p-2 rounded-xl bg-primary">
              <IconlyIcon name="Home" />
            </Button>
            <Button className="p-2 rounded-xl bg-primary">
              <IconlyIcon name="Setting" />
            </Button>
          </div>
        </FlexboxItem>
      </Stack>
    </FlexboxItem>
  );
};

export default GlobalSection;
