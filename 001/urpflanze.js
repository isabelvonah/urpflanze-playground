
const scene = new Urpflanze.Scene({
	height: 750,
	width: 750
})

const drawer = new Urpflanze.DrawerCanvas(scene, document.body)
drawer.draw() // Draw scene on canvas