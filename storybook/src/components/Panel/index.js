import React from "react"

import Colors from '../Color/colors.js'
import ContentBox from '../ContentBox'
import Typography from '../Typography'

export default ContentBox

export const PanelHeader = ({ title, children }) => (
  <ContentBox>
    <Typography.Header3>
      {title}
    </Typography.Header3>
    {children}
  </ContentBox>
)