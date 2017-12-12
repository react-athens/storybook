import React, { Component } from 'react';

import logo from './logo.svg';
import Dashboard from './components/Dashboard'
import Panel, { PanelHeader } from './components/Panel'
import Typography from './components/Typography'
import Colors from './components/Color/colors'
import Statistics from './components/Statistics'

class App extends Component {
  render() {
    return (
      <div style={{ height: '100%', backgroundColor: Colors.shade5 }}>
        <Dashboard.Container>
          <Dashboard.SideBar>
            <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
              <div>Dashboard SideBar</div>
            </div>
          </Dashboard.SideBar>
          <Dashboard.Content header='Dashboard Header'>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'auto  300px',
              gridTemplateRows: '80px auto',
              gridGap: '15px 15px',
              margin: 15,
              width: '100%'
            }}>
              <div style={{ gridColumn: '1 / 2', gridRow: '1 / 2', backgroundColor: Colors.blue }}>header</div>
              <div style={{ gridColumn: '2 / 3', gridRow: '1 / 3', backgroundColor: Colors.white }}>
                Right Side bar
              </div>
              <div style={{ gridColumn: '1 / 2', gridRow: '2 / 3' }}>
                <Panel hasShadow>
                  <PanelHeader title='Overview' />
                  <Panel hasPadding>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                      <Statistics label='Total' difference={200} total={8530.1} />
                      <Statistics label='Sales' total={8012.10} />
                      <Statistics label='Costs' difference={-87.02} total={1503.1} />
                    </div>
                  </Panel>
                </Panel>
              </div>
            </div>

          </Dashboard.Content>
        </Dashboard.Container>
      </div>
    );
  }
}

export default App;
