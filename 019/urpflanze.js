
const scene = new Urpflanze.Scene({
	height: 1200,
	width: 1200
})

const lissa = new Urpflanze.Lissajous({
	repetitions: 80,
	sideLength: 1500,

	scale: propArguments => propArguments.repetition.offset,

	//wx: 7,
	//wy: 8,

	wy: Urpflanze.Animation.Loop({
		from: 1,
		to: 3,
		duration: 15000,
	})
})

scene.add(lissa)

const drawer = new Urpflanze.DrawerCanvas(scene, document.body)
drawer.startAnimation() // Draw scene on canvas