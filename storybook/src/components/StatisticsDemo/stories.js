import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Statistics from './index';

const stories = storiesOf('Statistics Demo', module)

stories.add('Default', () => (
  <div style={{width: 220}}>
    <Statistics difference={100} label='label' total={120}/>
  </div>
))

stories.add('Negative values', () => (
  <div style={{width: 220}}>
    <Statistics difference={-100} label='label' total={120}/>
  </div>
))

stories.add('Without difference', () => (
  <div style={{width: 220}}>
    <Statistics label='label' total={44120}/>
  </div>
))