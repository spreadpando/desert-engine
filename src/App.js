import React from 'react'
import 'aframe'
import 'aframe-physics-system'
import 'aframe-teleport-controls'
import Environment from './components/environment/'
import Terrain from './components/terrain/'
import UserRig from './components/userRig/'
function App () {
  return (
    <div>
      <h1>hello werld</h1>
      <a-scene physics='debug:true;gravity:-9.8;'>
        {/* <Terrain /> */}
        <Environment />
        <UserRig />
      </a-scene>
    </div>
  )
}

export default App
