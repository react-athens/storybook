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
      {label} {difference} {total}
    </div>
  )
}