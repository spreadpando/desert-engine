import React from 'react'
import 'aframe'
import Terrain from './components/terrain/'
import Environment from './components/environment/'
function App () {
  return (
    <a-scene>
      <Terrain />
      <Environment />
    </a-scene>
  )
}

export default App
