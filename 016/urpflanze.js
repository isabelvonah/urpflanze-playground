
const scene = new Urpflanze.Scene({
	height: 1200,
	width: 1200
})

for (let i = 0; i < 20; i++) {

	const ovale_1 = new Urpflanze.Circle({

		sideLength: Urpflanze.Animation.Simple({
			from: 1700,
			to: 0,
			duration: 3000,
			delay: i * 1500,
		}),

		rotateX: Urpflanze.toRadians(60),

		drawer: { lineWidth: 2},

		repetitions: Urpflanze.Animation.Simple({
			from: 50,
			to: 60,
			duration: 3000,
			delay: i * 1500,
		}),

	})

	scene.add(ovale_1)

}

const drawer = new Urpflanze.DrawerCanvas(scene, document.body)
drawer.startAnimation() 