import React from 'react';

import Panel, { PanelHeader, PanelContent } from '../components/Panel'
import Colors from '../components/Color/colors'
import Statistics from '../components/StatisticsDemo'

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
          <Statistics label='Sales' total={8530.1} />
          <Statistics label='Costs' difference={-200}  total={8530.1} />
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