import React from 'react';
import Button from '../Button/Button';
import FlexboxItem from '../FlexboxItem';
import IconlyIcon from '../Icon/IconlyIcon';
import Stack from '../Stack/Stack';
import navItemStyles from '../../styles/NavItem.module.css';
import Badge from '../Badge/Badge';
import avatar from '../../assets/svg/avatar.svg';

const UserSection = () => {
  return (
    <FlexboxItem grow={1} className="max-w-[25%]">
      <Stack direction="horizontal" className="items-center">
        <FlexboxItem grow={2}>
          <div className={`${navItemStyles.navItem} flex justify-evenly`}>
            <Button className="p-2 rounded-xl bg-secondary">
              <IconlyIcon name="Notification" />
              <Badge className="bg-blue-600">3</Badge>
            </Button>
            <Button className="p-2 rounded-xl bg-secondary">
              <IconlyIcon name="EditSquare" />
              <Badge className="bg-blue-600">2</Badge>
            </Button>
          </div>
        </FlexboxItem>
        <FlexboxItem
          grow={4}
          className="flex items-center justify-center w-[50px]">
          <div className={navItemStyles.navItem}>
            <span className="font-bold text-xl">Hello, John</span>
          </div>
          <div className="rounded">
            <img src={avatar.src} className="aspect-square w-[50px]" />
          </div>
        </FlexboxItem>
      </Stack>
    </FlexboxItem>
  );
};

export default UserSection;
