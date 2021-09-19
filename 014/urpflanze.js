
const scene = new Urpflanze.Scene({
	height: 1200,
	width: 1200
})

const lissa = new Urpflanze.Lissajous({
	repetitions: 40,
	sideLength: 100,
	distance: 200,

	drawer: {
		stroke: Urpflanze.Animation.Loop({
			from: 'hsl(0, 100%, 30%)',
            to: 'hsl(140, 100%, 30%)',
            colorTransitionMode: 'rgb',
			duration: 10000
		})
	}
})

const container = new Urpflanze.Shape({
	shape: lissa,

	repetitions: Urpflanze.Animation.Loop({
		from: 5,
		to: 15,
		duration: 6540,
	}),
	distance: Urpflanze.Animation.Loop({
		from: 50,
		to: 300,
		duration: 4176,
	}),
	scale: Urpflanze.Animation.Loop({
		from: .6,
		to: 1.4,
		duration: 10562,
	}),
	perspective: Urpflanze.Animation.Loop({
		from: 1,
		to: 4,
		duration: 8362,
	}),
	rotateY: Urpflanze.toRadians(65)

})

scene.add(container)

const drawer = new Urpflanze.DrawerCanvas(scene, document.body)
drawer.startAnimation() // Draw scene on canvas