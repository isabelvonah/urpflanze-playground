
const scene = new Urpflanze.Scene({
	height: 1200,
	width: 1200
})

const side_length = 50;

const square = new Urpflanze.Rect({
	sideLength: side_length,

	drawer: { lineWidth: 3}
})

const squircle = new Urpflanze.Rect({
	sideLength: side_length,
	modifiers: [new Urpflanze.Modifiers.Smooth({ level:3, tension: 0.65 })],

	drawer: { fill: '#fff' },
})

const circle_1 = new Urpflanze.Circle({
	sideLength: side_length,

	drawer: { fill: '#000'}
})

const circle_2 = new Urpflanze.Circle({
	sideLength: side_length - 5,
})

const circle_3 = new Urpflanze.Circle({
	sideLength: side_length - 10,
})

const circle_4 = new Urpflanze.Circle({
	sideLength: side_length - 15,

	drawer: { fill: '#fff'}
})

//group and container 1

const group_1 = new Urpflanze.Group({
	rotateZ: () => scene.currentTime * Urpflanze.PI2 / 4000,
	scale: Urpflanze.Animation.Loop({
		from: .1,
		to: 1.2,
		duration: 2000,
		delay: 250
	})
})

group_1.add(square, squircle, circle_1, circle_2, circle_3, circle_4)

const container_1 = new Urpflanze.Shape({
	shape: group_1,

	repetitions: [4,10],
	distance: 40,
	scale: propArguments =>  propArguments.repetition.offset * .5 +.2
})

//group and container 2

const group_2 = new Urpflanze.Group({
	rotateZ: () => scene.currentTime * Urpflanze.PI2 / -4000,
	scale: Urpflanze.Animation.Loop({
		from: .1,
		to: .5,
		duration: 2000,
		delay: 250
	})
})

group_2.add(square, squircle, circle_1, circle_2, circle_3, circle_4)

const container_2 = new Urpflanze.Shape({
	shape: group_2,

	repetitions: [3,6],
	distance: 30,
	scale: propArguments =>  propArguments.repetition.offset * .1 +.1
})

//outer_containers

const outer_container_1 = new Urpflanze.Shape({
	shape: container_1,

	repetitions: 10,
	distance: 400,
	scale: .9,

	rotateZ: () => scene.currentTime * Urpflanze.PI2 / 4000
})

const outer_container_2 = new Urpflanze.Shape({
	shape: container_2,

	repetitions: 12,
	distance: 120,
	scale: .5,

	rotateZ: Urpflanze.toRadians(60)
})

scene.add(outer_container_1, outer_container_2)

const drawer = new Urpflanze.DrawerCanvas(scene, document.body)
drawer.startAnimation() // Draw scene on canvas