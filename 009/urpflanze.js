
const scene = new Urpflanze.Scene({
	height: 1200,
	width: 1200
})

const spiral = new Urpflanze.Spiral({
	repetitions: [8],
	distance: 125,

	rotateZ: Urpflanze.toRadians(40),
	rotateY: () => scene.currentTime * Urpflanze.PI2 / 4000,
	
})

scene.add(spiral)

const drawer = new Urpflanze.DrawerCanvas(scene, document.body)

//drawer.timeline.setFramerate(4) // Set animation framerate
//drawer.timeline.setDuration(4000) // Set animation duration

drawer.startAnimation()