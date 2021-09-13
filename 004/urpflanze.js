
const scene = new Urpflanze.Scene({
	height: 750,
	width: 750
})

const group = new Urpflanze.Group({})

const y_circles = new Urpflanze.Circle({
	repetitions: 16,
	distance: 300,
	sideLength: 125,
	drawer: { fill: 'hsla(52, 100%, 50%, .2)' }
})

const o_circles = new Urpflanze.Circle({
	repetitions: 8,
	distance: 50,
	sideLength: 400,
	drawer: { fill: 'hsla(41, 100%, 50%, .15)' }
})

const w_circles = new Urpflanze.Circle({
	repetitions: 128,
	distance: 300,
	sideLength: 40,
})

const b_circles = new Urpflanze.Circle({
	repetitions: 64,
	distance: 300,
	sideLength: 40,
	drawer: { fill: 'hsla(41, 100%, 0%, .08)' }
})

group.add(y_circles, w_circles)

const container1 = new Urpflanze.Shape({
	// SceneChild to apply properties and transformations to
	shape: o_circles,

	repetitions: [2],
	distance: 750,

	// I scale the past shape so that it fits into the scene
	scale: .65
})

const container2 = new Urpflanze.Shape({
	// SceneChild to apply properties and transformations to
	shape: group,

	repetitions: 11,
	distance: 225,

	// I scale the past shape so that it fits into the scene
	scale: .65
})

const container3 = new Urpflanze.Shape({
	// SceneChild to apply properties and transformations to
	shape: b_circles,

	repetitions: 11,
	distance: 225,
	rotateZ: Urpflanze.toRadians(2),

	// I scale the past shape so that it fits into the scene
	scale: .65
})


scene.add(container1, container2, container3)

const drawer = new Urpflanze.DrawerCanvas(scene, document.body)
drawer.draw() // Draw scene on canvas