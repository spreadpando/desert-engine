const mountVR = () => {
  const AFRAME = window.AFRAME
  const THREE = AFRAME.THREE
  AFRAME.registerComponent('terrain', {
    schema: {
      width: { type: 'number', default: 1 },
      height: { type: 'number', default: 1 },
      depth: { type: 'number', default: 1 },
      color: { type: 'color', default: '#AAA' }
    },

    /**
     * Initial creation and setting of the mesh.
     */
    init: function () {
      var data = this.data
      var el = this.el
      var self = this
      this.loader = new THREE.GLTFLoader()
      // Load a glTF resource
      this.loader.load(
        // resource URL
        '/assets/desert-terrain.gltf',
        // called when the resource is loaded
        function (gltf) {
          console.log(gltf)
          self.model = gltf.scene || gltf.scenes[0]
          self.model.animations = gltf.animations
          el.setObject3D('mesh', self.model)
          el.emit('model-loaded', { format: 'gltf', model: self.model })
        },
        // called while loading is progressing
        function (xhr) {
          console.log('terrain ' + (xhr.loaded / xhr.total) * 100 + '% loaded')
        },
        // called when loading has errors
        function (error) {
          console.log('An error happened: ' + error)
        }
      )
    }
  })
  const entity = document.querySelector('#terrain')
  entity.setAttribute('terrain', '')
}

export default mountVR
