import React from 'react'
import {
  Box,
  FlexBox,
  FullScreen,
  AnimatedProgress,
} from 'spectacle'

const Template = () => (
  <FlexBox
    justifyContent="space-between"
    position="absolute"
    bottom={0}
    width={1}
  >
    <Box padding="0 1em">
      <FullScreen />
    </Box>
    <Box padding="1em">
      <AnimatedProgress />
    </Box>
  </FlexBox>
)

export default Template
