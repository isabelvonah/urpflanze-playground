
const scene = new Urpflanze.Scene({
	height: 2000,
	width: 2000
})

const line = new Urpflanze.Line({
	repetitions: 75,
	rotateZ: Urpflanze.toRadians(60),

	distance: propArguments => propArguments.repetition.offset * 70,
    scale: propArguments =>  propArguments.repetition.offset,

	drawer: { 
		lineWidth: 5,
	}
})

const line_2 = new Urpflanze.Line({
	repetitions: 75,
	rotateZ: Urpflanze.toRadians(-50),

	distance: propArguments => propArguments.repetition.offset * 70,
    scale: propArguments =>  propArguments.repetition.offset,

	drawer: { 
		lineWidth: 3,
		stroke: '#555',
	}
})

const group = new Urpflanze.Group({})

group.add(line_2, line)

const container = new Urpflanze.Shape({
	shape: group,
	rotateZ: Urpflanze.toRadians(-98),
	scale: 6
})



scene.add(container)

const drawer = new Urpflanze.DrawerCanvas(scene, document.body)
drawer.draw() // Draw scene on canvas