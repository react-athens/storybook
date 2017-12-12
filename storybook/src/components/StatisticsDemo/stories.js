import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Colors from '../Color/colors.js'

import Statistics from './index';

const stories = storiesOf('Statistics demo', module)

stories.add('Default', () => (
  <div style={{ width: 200 }}>
    <Statistics difference={100} label='label' total={120} />
    <Statistics label='label' total={120} />
  </div>
))