import React from 'react';
import { MyComp as MyCompComponent, MyLibProps } from './MyComp';

import { Meta } from '@storybook/react/types-6-0';

// Primary will be the name for the first story
export const MyComp: React.FC = () => (
  <div>
    <MyCompComponent
      value="test"
      onChange={() => {
        console.log('bb');
      }}
    />
  </div>
);

export default {
  title: 'MyComp', // Title of you main menu entry for this group of stories
  component: MyComp, // This is the component documented by this Storybook page
} as Meta;
