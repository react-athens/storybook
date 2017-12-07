import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Colors from '../Color/colors.js'

import ContentBox from './index';

const stories = storiesOf('ContentBox', module)

stories.add('Default', () => (
  <div style={{}}>
    <ContentBox>
      <div> Content </div>
    </ContentBox>
  </div>
))

stories.add('With shadow', () => (
  <div style={{}}>
    <ContentBox hasShadow={true}>
      <div> Content </div>
    </ContentBox>
  </div>
))

stories.add('With border top', () => (
  <div style={{}}>
    <ContentBox borderTopColor={Colors.blue}>
      <div> Content </div>
    </ContentBox>
  </div>
))

stories.add('With border', () => (
  <div style={{}}>
    <ContentBox borderColor={Colors.blue}>
      <div> Content </div>
    </ContentBox>
  </div>
))
