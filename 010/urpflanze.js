
const scene = new Urpflanze.Scene({
	height: 1200,
	width: 1200
})

const spiral = new Urpflanze.Rect({
	repetitions: 200,

	scale: propArguments =>  propArguments.repetition.offset,
	sideLength: propArguments => propArguments.repetition.offset * 300,

	drawer: {
		stroke: propArguments => {
			const hue = propArguments.repetition.col.offset * 360
			const offset = scene.currentTime / 50 + 300 * propArguments.repetition.row.offset

			const h = Math.floor(hue + offset)
			return `hsl(${h % 360}, 100%, 50%)`
		},
	},
})

scene.add(spiral)

const drawer = new Urpflanze.DrawerCanvas(scene, document.body)
drawer.startAnimation()