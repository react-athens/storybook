import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Label from './index';

storiesOf('Numeric', module)
  .add('with text', () => <Label onClick={action('clicked')}>Hello Button</Label>)
  .add('with some emoji', () => <Label onClick={action('clicked')}>😀 😎 👍 💯</Label>);
