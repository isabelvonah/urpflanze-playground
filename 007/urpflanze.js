
const scene = new Urpflanze.Scene({
	height: 2150,
	width: 2150
})

const form_1 = new Urpflanze.Triangle({
	sideLength: 40,
	type: "hello",
	//skewY: 1.1,
	//skewX: 1.1,
	squeezeX: 4,

	repetitions: 75,
	rotateZ: Urpflanze.toRadians(60),

	distance: propArguments => propArguments.repetition.offset * 70,
    scale: propArguments =>  propArguments.repetition.offset,

	drawer: { 
		
		lineWidth: 5,
		stroke: '#fff',
		fill: '#111'
	}
})

const form_2 = new Urpflanze.Line({
	repetitions: 200,
	rotateZ: Urpflanze.toRadians(-50),

	distance: propArguments => propArguments.repetition.offset * 200,
    scale: propArguments =>  propArguments.repetition.offset,

	drawer: { 
		lineWidth: 4,
		stroke: '#555',
	}
})

const group = new Urpflanze.Group({})

group.add(form_2,form_1)

const container = new Urpflanze.Shape({
	shape: group,
	rotateZ: Urpflanze.toRadians(-95),
	scale: 6,
	translate: [125,75]
})



scene.add(container)

const drawer = new Urpflanze.DrawerCanvas(scene, document.body)
drawer.draw() // Draw scene on canvas