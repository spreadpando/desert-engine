import React from 'react';
import 'aframe';
import Environment from './components/environment/';

function App() {
  return (
      <a-scene>
          {/* <a-box color="red" position="0 2 -5" rotation="0 45 45" scale="2 2 2"></a-box> */}
          <Environment></Environment>
      </a-scene>
  );
}

export default App;
