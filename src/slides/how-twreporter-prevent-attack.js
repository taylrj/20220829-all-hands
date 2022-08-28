import ImageWithTitle from './image-with-title'
import Intro from './intro-slide'
import { 
  Appear, 
  Box, 
  FlexBox, 
  Heading, 
  Image, 
  Slide,
  Notes,
} from 'spectacle'

// assets
import cloudflareNews from '../assets/cloudflare.png'
import gcloudNews from '../assets/gcloud.png'

const HowTwReporterPreventAttack = () => (
  <>
    <Intro 
      title="報導者網站如何防護網路攻擊？"
    />
    <ImageWithTitle 
      source={"https://www.cloudflare.com/img/learning/what-is-cloudflare/simple-connection.svg"} 
      title="報導者網站如何防護 DDoS 攻擊？"
      note={() => (
        <>
          <ol>
            <li>報導者網站如何防護 DDoS 攻擊？</li>
          </ol>
        </>
      )} 
    />
    <ImageWithTitle 
      source={"https://upload.wikimedia.org/wikipedia/zh/thumb/a/a2/Cloudflare_logo.svg/812px-Cloudflare_logo.svg.png?20190703103246"} 
      title="報導者網站如何防護 DDoS 攻擊？（續）"
    />
    <ImageWithTitle 
      source={"https://www.cloudflare.com/img/learning/what-is-cloudflare/with-cloudflare.svg"} 
      title="報導者網站如何防護 DDoS 攻擊？（續）"
    />
    <Slide backgroundColor="backgroundColor">
      <FlexBox height="100%" flexDirection="column">
        <Box marginBottom="50px">
          <Image 
            src={cloudflareNews} 
            width="100%"
            height="auto"
          />
        </Box>
        <Appear>
          <Image 
            src={gcloudNews} 
            width="100%%"
            height="auto"
          />
        </Appear>
      </FlexBox>
      <Notes>
        <>
          <ol>
            <li>每秒4,600萬次的請求有多龐大？就如同把全球一整天對維基百科（Wikipedia）發出請求的次數集中在10秒內</li>
          </ol>
        </>
      </Notes>
    </Slide>
  </>
)

export default HowTwReporterPreventAttack
