
const scene = new Urpflanze.Scene({
	height: 1200,
	width: 1200
})

for (let i = 0; i < 20; i++) {

	const ovale_1 = new Urpflanze.Circle({

		sideLength: 300,

		//rotateX: Urpflanze.toRadians(60),
		distance: Urpflanze.Animation.Simple({
			from: 1200,
			to: 0,
			duration: 3000,
			delay: i * 1500,
		}),

		drawer: { 
			lineWidth: 2,
			stroke: Urpflanze.Animation.Simple({
				from: '#fff',
				to: '#000',
				duration: 3000,
				delay: 500 + i * 1500
			})
		},

		repetitions: 50,

	})

	scene.add(ovale_1)

}

const drawer = new Urpflanze.DrawerCanvas(scene, document.body)
drawer.startAnimation() 