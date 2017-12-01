import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Color from './Color';

const stories = storiesOf('Colors', module)

const colors = Object.keys(Color).map(key => {
  const color = Color[key]
  return <div style={{ boxShadow: ' 0 0 15px #888888', margin: 50 }}>
    <div style={{ backgroundColor: color, width: 200, height: 100 }} />
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 60 }} ><span >{key}</span></div>
  </div>
})

stories.add('Palette', () => (
  <div style={{ backgroundColor: '#EDF2F6', display: 'inline-flex', flexWrap: 'wrap'}}>
    {colors}
  </div>
))
