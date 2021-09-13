
const scene = new Urpflanze.Scene()

const rect = new Urpflanze.Rect({
	repetitions: [7,8],
	distance: 30,
	sideLength: 10,
})

const triangle = new Urpflanze.Triangle({
	repetitions: [5,6],
	distance: 30,
	sideLength: 5,
})

const circle = new Urpflanze.Circle({
	sideLength: 160,
})

scene.add(rect) // Add rect to scene
scene.add(triangle)
scene.add(circle)

const drawer = new Urpflanze.DrawerCanvas(scene, document.body)
drawer.draw() // Draw scene on canvas