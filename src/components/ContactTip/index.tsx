import Tooltip from 'react-bootstrap/Tooltip'

export default function renderContactTip(props: any) {
  return (
    <Tooltip {...props}>
      You can also message me on Twitter! 🙂
    </Tooltip>
  )
}