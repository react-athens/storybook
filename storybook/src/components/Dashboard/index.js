import React from "react"

import Colors from '../Color/colors.js'
import Panel from '../Panel'

const Container = ({ children }) => (
  <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'stretch', height: '100%' }}>
    {children}
  </div>
)

const SideBar = ({ children }) => (
  <div style={{ backgroundColor: Colors.shade1, flex: '0 0 80px', height: '100%', color: Colors.white }}>
    {children}
  </div>
)

const Content = ({ header, children }) => (
  <div style={{ flex: '1 0 auto', display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}>
    <div style={{ height: 60 }}>
      <Panel hasShadow hasPadding> {header}</Panel>
    </div>
    <div style={{ flex: '1 0 auto', display: 'flex', alignItems: 'stretch' }}>
      {children}
    </div>
  </div>
)

export default { Container, Content, SideBar }