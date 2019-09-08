import React from 'react'
import mountVR from './terrain'
class Terrain extends React.Component {
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
    return <a-entity id='terrain' />
  }
}

export default Terrain
