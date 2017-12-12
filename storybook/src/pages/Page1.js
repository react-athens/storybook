import React, { Component } from 'react';

import logo from '../logo.svg';
import Dashboard from '../components/Dashboard'
import Panel, { PanelHeader, PanelContent } from '../components/Panel'

import Typography from '../components/Typography'
import Colors from '../components/Color/colors'
import Statistics from '../components/Statistics'

export default () => (
  <div style={{
    display: 'grid',
    alignItems: 'stretch',
    gridTemplateColumns: 'auto  300px',
    gridTemplateRows: '175px auto',
    gridGap: '15px 15px',
    height: '100%'
  }}>
    <div style={{ gridColumn: '1 / 2', gridRow: '1 / 2' }}>
      <Panel hasShadow>
        <PanelHeader title='Overview' />
        <PanelContent>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <Statistics label='Total' difference={200} total={8530.1} />
            <Statistics label='Sales' total={8012.10} />
            <Statistics label='Costs' difference={-87.02} total={1503.1} />
          </div>
        </PanelContent>
      </Panel>
    </div>
    <div style={{ gridColumn: '2 / 3', gridRow: '1 / 3' }}>
      <div style={{ backgroundColor: Colors.white, height: '100%' }}>
      </div>
    </div>
  </div>
)