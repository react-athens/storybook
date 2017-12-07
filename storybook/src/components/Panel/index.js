import React from "react"

import Colors from '../Color/colors.js'
import ContentBox from '../ContentBox'
import Typography from '../Typography'

export default ContentBox

export const PanelHeader = ({ title, children }) => (
  <div style={{ borderBottom: `1px solid ${Colors.shade4}` }}>
    <ContentBox hasShadow hasPadding >
      <Typography.Header5>
        {title}
      </Typography.Header5>
      {children}
    </ContentBox>
  </div>
)