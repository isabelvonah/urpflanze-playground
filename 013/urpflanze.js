
const scene = new Urpflanze.Scene({
	height: 1200,
	width: 1200
})

const lissa = new Urpflanze.Lissajous({
	repetitions: 50,
	sideLength: 100,
	distance: 200,	
})

const container = new Urpflanze.Shape({
	shape: lissa,

	repetitions: Urpflanze.Animation.Loop({
		from: 4,
		to: 15,
		duration: 3000,
	}),
	distance: Urpflanze.Animation.Loop({
		from: 50,
		to: 300,
		duration: 2000,
	}),
	scale: Urpflanze.Animation.Loop({
		from: .6,
		to: 1.4,
		duration: 5000,
	}),

	perspective: 0.90,
	rotateY: Urpflanze.toRadians(60)

})

scene.add(container)

const drawer = new Urpflanze.DrawerCanvas(scene, document.body)
drawer.startAnimation() // Draw scene on canvas