import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Icons from './index';

const stories = storiesOf('Icon', module)

stories.add('Default', () => (
  <div style={{ display: 'flex', flexWrap: 'wrap' }}>
    {
      Object.keys(Icons).map(key => {
        const elt = React.createElement(Icons[key])
        return <div style={{ padding: 20 }}>{key}{elt}</div>
      })
    }
  </div>
))

