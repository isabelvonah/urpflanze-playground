
const scene = new Urpflanze.Scene({
	height: 1200,
	width: 1200
})

const circle = new Urpflanze.Circle({
	repetitions: [15],

	distance: 50,

    scale: propArguments =>  propArguments.repetition.offset * .4,

	drawer: { fill: '#fff'},
})

const shape = new Urpflanze.Shape({
	shape: circle,
	rotateZ: Urpflanze.toRadians(20),
	translate: [5,-30]
})

scene.add(shape)

const drawer = new Urpflanze.DrawerCanvas(scene, document.body)
drawer.draw() // Draw scene on canvas