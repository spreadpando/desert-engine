import React from 'react'
import mountVR from './terrain'
const Terrain = () => {
  mountVR()
  return <a-entity id='t' terrain depth='3' width='3' height='3' color='red' />
}

export default Terrain
