import React, { Component } from 'react';

import logo from './logo.svg';
import Dashboard from './components/Dashboard'
import Panel from './components/Panel'
import Colors from './components/Color/colors'
import Overview from './dashboards/Overview'

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
          <Dashboard.Content
            header='Dashboard Header'
          >
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'auto  300px',
              gridTemplateRows: '80px auto',
              gridGap: '15px 15px',
              margin: 15,
              width: '100%'
            }}>
              <div style={{ gridColumn: '2 / 3', gridRow: '1 / 3' }}>
                <Panel hasShadow hasPadding> Right Side bar</Panel>
              </div>
              <div style={{ gridColumn: '1 / 2', gridRow: '1 / 3' }}>
                <Overview />
              </div>
            </div>

          </Dashboard.Content>
        </Dashboard.Container>
      </div>
    );
  }
}

export default App;
