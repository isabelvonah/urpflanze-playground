
const scene = new Urpflanze.Scene({
	height: 1200,
	width: 1200
})

//forms

const triangle = new Urpflanze.Triangle({

	sideLength: 50,
	skewY: 20,


	translate: [0,-50],
	rotateZ: Urpflanze.toRadians(90),

	drawer: { fill: 'hsla(35, 100%, 50%, 25%)'},

	repetitions: 6,

	//modifiers: [new Urpflanze.Modifiers.Smooth({ level:10, tension: 5 })]
})

const group = new Urpflanze.Group({})
group.add(triangle)

// ----------------------------------------------------

const container = new Urpflanze.Shape({
	shape: group,
	scale: Urpflanze.Animation.Loop({
		from: .6,
		to: .9,
		duration: 2000,
	}),

	repetitions: [3],
	distance: 300,

	rotateZ: Urpflanze.Animation.Loop({
		from: Urpflanze.toRadians(0),
		to: Urpflanze.toRadians(180),
		duration: 2000,
	})
})

const outer_container = new Urpflanze.Shape({
	shape: container,

	rotateZ: Urpflanze.Animation.Loop({
		from: Urpflanze.toRadians(0),
		to: Urpflanze.toRadians(90),
		duration: 2000,
		delay: 2000,
		afterDelay: 2000
	}),

	drawer: {
		stroke: Urpflanze.Animation.Loop({
			from: '#fff',
			to: '#000',
			duration: 2000,
			delay: 2000,
		})
	}
})

scene.add(outer_container)

const drawer = new Urpflanze.DrawerCanvas(scene, document.body)
drawer.startAnimation() // Draw scene on canvas