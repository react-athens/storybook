import React from "react"

import Colors from '../Color/colors.js'
import Arrow from './Arrow'

const Up = ({ style }) => (
  <Arrow style={{ display: 'block' }} />
)

const Down = ({ style }) => (
  <Arrow style={{ display: 'block', transform: 'rotate(180deg)' }} />
)

export default {
  Down,
  Up
}