import React from 'react'
import mountVR from './userRig'

class UserRig extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      entityType: null
    }
  }
  componentDidMount () {
    mountVR()
  }
  render () {
    return (
      <a-box
        id='user-rig'
        width='1'
        height='1'
        depth='1'
        wasd-controls='acceleration:150;'
        look-controls='enabled:true'
        position='0 1.5 0'
        style={{ dispaly: 'hidden' }}
        raycaster='objects: .collidable'
      >
        <a-entity id='user-view' camera='active:true' position='0 1.5 0' />
      </a-box>
    )
  }
}

export default UserRig
