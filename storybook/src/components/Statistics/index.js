import React from "react"

import Colors from '../Color/colors.js'
import TextWithIcon from '../TextWithIcon'
import Typography from '../Typography'
import Icon from '../Icon'

export default ({ label, difference, total }) => {
  const color = difference >= 0 ? Colors.green : Colors.red
  const icon = difference >= 0 ? <Icon.Up /> : <Icon.Down />
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ marginRight: 10 }}><Typography.Label>{label}</Typography.Label></div>
        {difference != null && <div style={{ color }}><TextWithIcon icon={icon} text={difference} /></div>}
      </div>
      <div><Typography.Header1>{`$ ${total}`} </Typography.Header1></div>
    </div>
  )
}