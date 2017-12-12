import React from "react"

import Colors from '../Color/colors.js'
import Typography from '../Typography'

const styles = {
  panel: {
    display: 'flex',
    alignItems: 'stretch',
    flexDirection: 'column',
    backgroundColor: Colors.white,
    height: '100%',
  },
  padding: {
    padding: 20,
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

const Panel = ({ children, hasShadow = false, borderTopColor, borderColor, hasPadding = false, }) => {
  let style = styles.panel
  if (hasShadow) {
    style = {
      ...style,
      ...styles.shadow
    }
  }
  if (hasPadding) {
    style = {
      ...style,
      ...styles.padding
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

export default Panel

export const PanelHeader = ({ title, children }) => (
  <div style={{ borderBottom: `1px solid ${Colors.shade4}`, flex: '0 0 auto' }}>
    <Panel hasShadow hasPadding >
      {title &&
        <Typography.Header5>
          {title}
        </Typography.Header5>
      }
      {children}
    </Panel>
  </div>
)

export const PanelContent = ({ title, children }) => (
  <div style={{ overflowY: 'auto', flex: '0 1 auto', hasPadding: false }}>
    <Panel hasPadding>
      {children}
    </Panel>
  </div>
)