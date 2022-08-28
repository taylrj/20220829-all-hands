import DDoS from './ddos'
import Home from './home'
import HowTwReporterPreventAttack from './how-twreporter-prevent-attack'
import Intro from './intro-slide'
import RecentAttacks from './recent-attacks'
import SocialEngineeringAttack from './social-engineering-attack'
import React from 'react'
import {
  FlexBox,
  Heading,
  Slide,
  Notes,
} from 'spectacle';

const Slides = () => (
  <>
    <Home />
    <RecentAttacks />
    <DDoS />
    <HowTwReporterPreventAttack />
    <SocialEngineeringAttack />
    <Intro title="謝謝聆聽 ✨" />
  </>
)


export default Slides
