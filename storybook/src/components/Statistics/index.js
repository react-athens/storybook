import React from "react"

import Colors from '../Color/colors.js'
import TextWithIcon from '../TextWithIcon'
import Typography from '../Typography'
import Icon from '../Icon'

export default ({ label, difference, total }) => {
  const color = difference >= 0 ? Colors.green : Colors.red
  const icon = difference >= 0 ? <Icon.Up /> : <Icon.Down />
  return (
    <div style={{ width: 150 }}>
      <div style={{ display: 'flex', alignItems: 'center', height: 24, ...(difference ? { justifyContent: 'space-around' } : {}) }}>
        <div>
          <Typography.Label>{label}</Typography.Label></div>
        {difference &&
          <div style={{ color: color }}><TextWithIcon icon={icon} text={<Typography.Header5>{`$ ${difference}`}</Typography.Header5>} /></div>
        }
      </div>
      <div>
        <Typography.Header1>{`$ ${total}`}</Typography.Header1>
      </div>
    </div >
  )
}