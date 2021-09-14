
const scene = new Urpflanze.Scene({
	height: 2150,
	width: 2150
})

const form_1 = new Urpflanze.Triangle({
	sideLength: 15,
	type: "hello",
	//skewY: 1.1,
	skewX: 2,

	repetitions: 100,
	rotateZ: Urpflanze.toRadians(120),

	distance: propArguments => propArguments.repetition.offset * 70,
    scale: propArguments =>  propArguments.repetition.offset,

	drawer: { 
		
		lineWidth: 4,
		stroke: '#888',
	}
})

const form_2 = new Urpflanze.Line({

	repetitions: 200,
	rotateZ: Urpflanze.toRadians(-60),

	distance: propArguments => propArguments.repetition.offset * 160,
    scale: propArguments =>  propArguments.repetition.offset,

	drawer: { 
		lineWidth: 4,
		stroke: '#555',
	}
})

const form_3 = new Urpflanze.Line({
	repetitions: 300,
	rotateZ: Urpflanze.toRadians(30),

	distance: propArguments => propArguments.repetition.offset * 260,
    scale: propArguments =>  propArguments.repetition.offset,

	drawer: { 
		lineWidth: 3.5,
		stroke: '#333',
	}
})

const group = new Urpflanze.Group({})

group.add(form_3,form_2,form_1)

const container = new Urpflanze.Shape({
	shape: group,
	rotateZ: Urpflanze.toRadians(-95),
	scale: 3.8,
	translate: [300,275]
})



scene.add(container)

const test = new Urpflanze.Triangle({
	sideLength: 200,
	//squeezeX: 0.02,
	skewX: 8

})

//scene.add(test)

const drawer = new Urpflanze.DrawerCanvas(scene, document.body)
drawer.draw() // Draw scene on canvas