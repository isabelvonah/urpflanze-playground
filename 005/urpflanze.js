
const scene = new Urpflanze.Scene({
	height: 750,
	width: 750
})

const line = new Urpflanze.Line({
	repetitions: 75,
	rotateZ: Urpflanze.toRadians(60),

	distance: propArguments => propArguments.repetition.offset * 70,
    scale: propArguments =>  propArguments.repetition.offset
})

const line_2 = new Urpflanze.Line({
	repetitions: 75,
	rotateZ: Urpflanze.toRadians(-50),

	distance: propArguments => propArguments.repetition.offset * 70,
    scale: propArguments =>  propArguments.repetition.offset,

	drawer: { 
		lineWidth: .5,
		stroke: '#888',
	}
})

const group = new Urpflanze.Group({})

group.add(line, line_2)

const container = new Urpflanze.Shape({
	shape: group,
	rotateZ: Urpflanze.toRadians(-98),
	//rotateY: Urpflanze.toRadians(180)
})



scene.add(container)

const drawer = new Urpflanze.DrawerCanvas(scene, document.body)
drawer.draw() // Draw scene on canvas