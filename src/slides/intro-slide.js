import React from 'react'
import {
  FlexBox,
  Box,
  Heading,
  Slide,
  Notes,
} from 'spectacle'

const Intro = ({ title, subtitle, note }) => ( 
  <Slide backgroundColor="backgroundColor">
    <FlexBox height="100%" flexDirection="column">
      <Heading margin="0px" fontSize="84px">
        {title} 
      </Heading>
      <Heading margin="16px 32px" color="secondary" fontSize="24px">
        {subtitle} 
      </Heading>
    </FlexBox>
    {note && (
      <Notes>
        {note()}
      </Notes>
    )}
  </Slide>
)

export default Intro  
