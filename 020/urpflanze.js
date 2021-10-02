
const scene = new Urpflanze.Scene({
	height: 1200,
	width: 1200
})

//forms

const triangle = new Urpflanze.Triangle({

	sideLength: 50,
	skewY: 45,


	translate: [0,-50],
	rotateZ: Urpflanze.toRadians(90),

	repetitions: 6,

	//modifiers: [new Urpflanze.Modifiers.Smooth({ level:10, tension: 5 })]
})

const group = new Urpflanze.Group({})
group.add(triangle)

// ----------------------------------------------------

for (let i = 0; i < 20; i++) {

	const container = new Urpflanze.Shape({
		shape: group,
		scale: Urpflanze.Animation.Simple({
			from: .6,
			to: .9,
			duration: 2000,
			delay: 2000 * i,
			afterDelay: 2000
		}),

		repetitions: [3],
		distance: 300,

		rotateZ: Urpflanze.Animation.Simple({
			from: Urpflanze.toRadians(0),
			to: Urpflanze.toRadians(180),
			duration: 2000,
			delay: 2000 * i,
			afterDelay: 2000
		})
	})

	const outer_container = new Urpflanze.Shape({
		shape: container,

		rotateZ: Urpflanze.Animation.Simple({
			from: Urpflanze.toRadians(i * 45),
			to: Urpflanze.toRadians(45 + i * 45),
			duration: 2000,
			delay: 2000 + 2000 * i,
			afterDelay: 2000
		}),

		drawer: {
			stroke: Urpflanze.Animation.Simple({
				from: '#000',
				to: '#fff',
				duration: 10,
				delay: 2000 + 2000 * i,
			})
		}
	})

	scene.add(outer_container)

}

const drawer = new Urpflanze.DrawerCanvas(scene, document.body)
drawer.startAnimation() // Draw scene on canvas