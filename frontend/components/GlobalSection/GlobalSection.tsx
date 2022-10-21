import React from 'react';
import Button from '../Button/Button';
import FlexboxItem from '../FlexboxItem';
import IconlyIcon from '../Icon/IconlyIcon';
import Stack from '../Stack/Stack';
import navItemStyles from '../../styles/NavItem.module.css';
import { useRouter } from 'next/router';
import { APP_NAME } from '../../utils/constants';

const GlobalSection = () => {
  const router = useRouter();

  function navToIndex() {
    router.push('/');
  }

  return (
    <FlexboxItem grow={1} className="max-w-[25%]">
      <Stack direction="horizontal" className="items-center">
        <div className={navItemStyles.navItem}>
          <IconlyIcon name="Category" />
        </div>
        <FlexboxItem grow={2} className="flex items-center justify-center">
          <span className="md:text-3xl text-4xl font-bold">{APP_NAME}</span>
        </FlexboxItem>
        <FlexboxItem grow={2}>
          <div className={`${navItemStyles.navItem} flex justify-evenly`}>
            <Button
              className="p-2 bg-secondary rounded-xl"
              onClick={navToIndex}>
              <IconlyIcon name="Home" />
            </Button>
            <Button className="p-2 bg-secondary rounded-xl">
              <IconlyIcon name="Setting" />
            </Button>
          </div>
        </FlexboxItem>
      </Stack>
    </FlexboxItem>
  );
};

export default GlobalSection;
