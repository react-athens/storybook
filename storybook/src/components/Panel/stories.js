import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Colors from '../Color/colors.js'

import Panel, { PanelHeader, PanelContent } from './index';

const stories = storiesOf('Panel', module)


stories.add('Default', () => (
  <div style={{}}>
    <Panel hasPadding>
      <div> Content </div>
    </Panel>
  </div>
))

stories.add('With shadow', () => (
  <div style={{}}>
    <Panel hasPadding hasShadow={true}>
      <div> Content </div>
    </Panel>
  </div>
))

stories.add('With border top', () => (
  <div style={{}}>
    <Panel hasPadding borderTopColor={Colors.blue}>
      <div> Content </div>
    </Panel>
  </div>
))

stories.add('With border', () => (
  <div style={{}}>
    <Panel hasPadding borderColor={Colors.blue}>
      <div> Content </div>
    </Panel>
  </div>
))

stories.add('With header', () => (
  <div style={{ height: 200 }}>
    <Panel hasShadow>
      <PanelHeader title="My header" />
      <PanelContent>
        <div>Content</div>
        <div>Content</div>
        <div>Content</div>
        <div>Content</div>
        <div>Content</div>
        <div>Content</div>
        <div>Content</div>
        <div>Content</div>
      </PanelContent>
    </Panel>
  </div>
))