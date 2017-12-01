import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Input from './index';

storiesOf('Input', module)
  .add('with text', () => <Input onClick={action('clicked')}>Hello Button</Input>)
  .add('with some emoji', () => <Input onClick={action('clicked')}>😀 😎 👍 💯</Input>);
