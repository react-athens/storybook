import React from "react"

import Colors from '../Color/colors.js'

const styles = {
  panel: {
    padding: 20,
    backgroundColor: 'white'
  },
  shadow: {
    boxShadow: `0 0 5px 0 ${Colors.shade5}`,
  },
  border: color => {
    return { border: `1px solid ${color}` }
  },
  borderTop: color => {
    return { borderTop: `4px solid ${color}` }
  },
}

const ContentBox = ({ children, hasShadow = false, borderTopColor, borderColor }) => {
  let style = styles.panel
  if (hasShadow) {
    style = {
      ...style,
      ...styles.shadow
    }
  }
  if (borderColor) {
    style = {
      ...style,
      ...styles.border(borderColor)
    }
  }
  if (borderTopColor) {
    style = {
      ...style,
      ...styles.borderTop(borderTopColor)
    }
  }

  return (
    <div style={style} >
      {children}
    </div>
  )
}

export default ContentBox