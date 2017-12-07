import React from "react"

import Colors from '../Color/colors.js'

export default ({ icon, text }) => (
  <span style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
    <span style={{marginRight: '0.3em'}}>{icon}</span>
    <span>{text}</span>
  </span>
)