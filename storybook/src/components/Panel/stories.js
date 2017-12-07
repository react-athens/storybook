import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Colors from '../Color/colors.js'

import Panel from './index';

const stories = storiesOf('Panel', module)

stories.add('Default', () => (
  <div style={{}}>
    <Panel>
      <div> Content </div>
    </Panel>
  </div>
))

stories.add('With shadow', () => (
  <div style={{}}>
    <Panel hasShadow={true}>
      <div> Content </div>
    </Panel>
  </div>
))

stories.add('With border top', () => (
  <div style={{}}>
    <Panel borderTopColor={Colors.blue}>
      <div> Content </div>
    </Panel>
  </div>
))

stories.add('With border', () => (
  <div style={{}}>
    <Panel borderColor={Colors.blue}>
      <div> Content </div>
    </Panel>
  </div>
))
