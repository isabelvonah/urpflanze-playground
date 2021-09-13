
const scene = new Urpflanze.Scene({
	height: 750,
	width: 750
})

const line = new Urpflanze.Line({
	repetitions: 75,
	rotateZ: Urpflanze.toRadians(-60),

	distance: propArguments => propArguments.repetition.offset * 70,
    scale: propArguments =>  propArguments.repetition.offset
})

scene.add(line)

const line_2 = new Urpflanze.Line({
	repetitions: 75,
	rotateZ: Urpflanze.toRadians(-50),

	distance: propArguments => propArguments.repetition.offset * 70,
    scale: propArguments =>  propArguments.repetition.offset,

	drawer: { lineWidth: .5 }
})

scene.add(line, line_2)

const drawer = new Urpflanze.DrawerCanvas(scene, document.body)
drawer.draw() // Draw scene on canvas