import Intro from './intro-slide'
import React from 'react'
import {
  FlexBox,
  Box,
  Heading,
  Slide,
  Notes,
} from 'spectacle'


const Timeline = () => {
  return (
    <Slide>
      <iframe src="https://codesandbox.io/embed/tender-spence-3x6vz0?fontsize=14&hidenavigation=1&theme=dark&view=preview"
        width="100%"
        height="95%"
        title="tender-spence-3x6vz0"
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
    </Slide>
  )
}

const RecentAttacks = () => (
  <>
    <Intro 
      title="近期的資安事件"
      subtitle="臺灣8月初網路攻擊事件"
    />
    <Timeline />
  </>
)

export default RecentAttacks  
