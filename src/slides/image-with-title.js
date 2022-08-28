import { Slide, FlexBox, Heading, Image, Notes } from 'spectacle'

const ImageWithTitle = ({ 
  source, 
  title, 
  width = '65%',
  height = 'auto',
  note 
}) => (
  <Slide>
    {title && (
      <Heading margin="0px" fontSize="48px">
        {title}
      </Heading>
    )}
    <FlexBox height="100%">
      <Image alt={title} src={source} width={width} height={height} />
    </FlexBox>
    {note && (
      <Notes>
        {note()}
      </Notes>
    )}
  </Slide>
)

export default ImageWithTitle
