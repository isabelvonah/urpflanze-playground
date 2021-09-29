
const scene = new Urpflanze.Scene({
	height: 1200,
	width: 1200
})

const circles = new Urpflanze.Rect({
	
	repetitions: [7],
	sideLength: 30,
	distance: 100,

	modifiers: [new Urpflanze.Modifiers.Smooth({ level:4, tension: 1.5 })],

	transformOrigin: [-2,10],

	//bClosed: false,

	scale: Urpflanze.Animation.Loop({
		from: 0.3,
		to: 4.5,
		duration: 3000,
	}),

	drawer: { 
		fill: 'hsla(46, 100%, 50%, 35%)',
	},

	translate: [-100,935]
	

})

scene.add(circles)

const drawer = new Urpflanze.DrawerCanvas(scene, document.body)
drawer.startAnimation() // Draw scene on canvas