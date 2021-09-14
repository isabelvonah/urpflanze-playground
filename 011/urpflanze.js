
const scene = new Urpflanze.Scene({
	height: 1200,
	width: 1200
})

const circle = new Urpflanze.Circle({
	sideLength: 120,
	drawer: {
		lineWidth: 5,
		stroke: 'hsla(42, 100%, 50%, .4)'
	}
})

const rects = new Urpflanze.Rect({
	repetitions: 5,
	sideLength: 150,
	drawer: { fill: 'hsla(42, 100%, 50%, .15)' }
})

const group = new Urpflanze.Group({})

group.add(circle, rects)

const container = new Urpflanze.Shape({
	shape: group,

	scale: .4,

	repetitions: [5],
	distance: 200
})

const outer_container = new Urpflanze.Shape({
	shape: container,

	scale: .4,
	
	repetitions: [2],
	distance: 500
})

scene.add(outer_container)

const drawer = new Urpflanze.DrawerCanvas(scene, document.body)
drawer.draw() // Draw scene on canvas