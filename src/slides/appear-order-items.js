import { Slide, Heading, OrderedList, Appear, ListItem, FlexBox, Notes } from 'spectacle'

const AppearOrderItems = ({ slide=true, title, items, note }) => {
  const appearOrderList = (
    <OrderedList>
      {
        Array.isArray(items) && (
          items.map((item, index) => (
            <Appear key={'item-' + index}>
              <ListItem>{item}</ListItem>
            </Appear>
          ))
        )
      }
    </OrderedList>
  )

  if (!slide) {
    return appearOrderList 
  }
  return (
    <Slide>
      {title && (
        <Heading margin="0px" fontSize="48px">
          {title}
        </Heading>
      )}
      <FlexBox height="100%" justifyContent="left">
        {appearOrderList}
      </FlexBox>
      {note && (
        <Notes>
          {note()}
        </Notes>
      )}
    </Slide>
  )
}

export default AppearOrderItems 
