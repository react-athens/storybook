import React, { Component } from 'react';

import logo from './logo.svg';
import Dashboard from './components/Dashboard'
import Panel, { PanelHeader } from './components/Panel'
import Typography from './components/Typography'
import Colors from './components/Color/colors'

class App extends Component {
  render() {
    return (
      <div style={{ height: '100%' }}>
        <Dashboard.Container>
          <Dashboard.SideBar>
            SideBar
          </Dashboard.SideBar>
          <Dashboard.Content header='Header Component'>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'auto  300px',
              gridTemplateRows: '80px auto',
              gridGap: '15px 15px',
              margin: 15,
              width: '100%'
            }}>
              <div style={{ gridColumn: '1 / 2', gridRow: '1 / 2', backgroundColor: Colors.blue }}>header</div>
              <div style={{ gridColumn: '2 / 3', gridRow: '1 / 3', backgroundColor: Colors.green }}>Right Side bar</div>
              <div style={{ gridColumn: '1 / 2', gridRow: '2 / 3' }}>
                <Panel>
                  <PanelHeader title='Overview' />
                  <Panel>
                    <Typography.Label>Total</Typography.Label>
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
