import React from 'react'
import defaultTheme from './theme/default-theme'
import defaultTemplate from './template/default-template'
import Slides from './slides'
import { Deck, Slide, Heading, FlexBox } from 'spectacle'

function App() {
  return (
    <Deck theme={defaultTheme} template={defaultTemplate}>
      <Slides />
    </Deck>
  )
}

export default App
