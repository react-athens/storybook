import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Typography from './index';

const stories = storiesOf('Typography', module)

stories.add('Default', () => (
  <div style={{ lineHeight: 2 }}>
    <div><Typography.Header1>Header 1</Typography.Header1></div>
    <div><Typography.Header2>Header 2</Typography.Header2></div>
    <div><Typography.Header3>Header 3</Typography.Header3></div>
    <div><Typography.Header4>Header 4</Typography.Header4></div>
    <div><Typography.Header5>Header 5</Typography.Header5></div>
    <div><Typography.Header6>Header 6</Typography.Header6></div>

    <div><Typography.Label>Label</Typography.Label></div>

    <div><Typography.Text>Text</Typography.Text></div>
  </div>
))
