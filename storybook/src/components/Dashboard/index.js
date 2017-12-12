import React from "react"

import Colors from '../Color/colors.js'

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
    <div style={{ boxShadow: '4px 0 5px 0 rgba(51,51,51,0.2)', flex: '0 0 60px', marginBottom: 5, backgroundColor: Colors.white }}>
      {header}
    </div>
    <div style={{ flex: '1 0 auto', display: 'flex', alignItems: 'stretch' }}>
      {children}
    </div>
  </div>
)

export default { Container, Content, SideBar }