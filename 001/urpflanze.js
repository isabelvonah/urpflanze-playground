
const scene = new Urpflanze.Scene({
	height: 1200,
	width: 1200
})

scene.add()

const drawer = new Urpflanze.DrawerCanvas(scene, document.body)
drawer.draw() // Draw scene on canvas