import {
  Slide,
  Notes,
} from 'spectacle'

const Iframe = ({ width="100%", height="95%", title="", source, note }) => {
  if (!source) {
    return
  }
  return (
    <Slide>
      <iframe
        width={width}
        height={height}
        title={title}
        src={source}
      />
      {note && (
        <Notes>
          {note()}
        </Notes>
      )}
    </Slide>
  )
}

export default Iframe  
