import React from 'react'
import mountVR from './environment'
const Environment = () => {
  mountVR()
  return <a-entity environment='preset:yavapai;' />
}

export default Environment
