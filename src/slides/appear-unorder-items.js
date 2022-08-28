import { Slide, Heading, UnorderedList, Appear, ListItem, FlexBox, Notes } from 'spectacle'

const AppearUnOrderItems = ({ slide=true, title, items, note }) => {
  const appearUnOrderList = (
    <UnorderedList>
      {
        Array.isArray(items) && (
          items.map((item, index) => (
            <Appear key={'item-' + index}>
              <ListItem>{item}</ListItem>
            </Appear>
          ))
        )
      }
    </UnorderedList>
  )

  if (!slide) {
    return appearUnOrderList 
  }
  return (
    <Slide>
      {title && (
        <Heading margin="0px" fontSize="48px">
          {title}
        </Heading>
      )}
      <FlexBox height="100%" justifyContent="left">
        {appearUnOrderList}
      </FlexBox>
      {note && (
        <Notes>
          {note()}
        </Notes>
      )}
    </Slide>
  )
}

export default AppearUnOrderItems 
