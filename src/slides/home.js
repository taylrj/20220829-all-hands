import React from 'react'
import {
  Box,
  FlexBox,
  Heading,
  Slide,
  Notes,
  Image,
} from 'spectacle'

// assets
import Logo from '../assets/theReporterLogo.png'

const Home = () => ( 
  <Slide backgroundColor="backgroundColor">
    <FlexBox height="100%" flexDirection="column">
      <Box marginBottom="30px">
        <Image alt="The Reporter" src={Logo} width="400px" />
      </Box>
      <Heading margin="0px" fontSize="96px">
        ✨<i>我們</i> 如何防護網路攻擊？
      </Heading>
      <Heading margin="16px 32px" color="primary" fontSize="24px">
        08.29, 2022 &nbsp;&nbsp;&nbsp;&nbsp; 🙋&nbsp;報告人: 方泰鈞 
      </Heading>
    </FlexBox>
    <Notes>
      簡單帶過大綱:
      <ol>
        <li>近期的資安事件</li>
        <li>DDoS</li>
        <li>報導者網站如何防護網路攻擊</li>
        <li>我們如何防護網路攻擊</li>
      </ol>
    </Notes>
  </Slide>
)


export default Home 
