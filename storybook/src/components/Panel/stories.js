import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Typography from './index';

const stories = storiesOf('Panel', module)

stories.add('Default', () => (
  <div style={{}}>
    <Panel />
  </div>
))
