/**
 * Creating a scene with a rhombus and a line in the center
 */
 const scene = new Urpflanze.Scene({
	color: '#f42',
	background: '#6ca'
})

 const rect = new Urpflanze.Rect()
 const line = new Urpflanze.Line({
	 // When a property is present the Group will not modify it
	 rotateZ: Urpflanze.toRadians(90)
 })
 
 const group = new Urpflanze.Group({
	 repetitions: 8,
	 sideLength: 30,
	 distance: 130,
	 rotateZ: Urpflanze.toRadians(45)
 })
 
 // Propagate the proprieties to `rect` and `line`
 group.add(rect, line)

 const container = new Urpflanze.Shape({
	// SceneChild to apply properties and transformations to
	shape: group,

	repetitions: 10,
	distance: 150,

	// I scale the past shape so that it fits into the scene
	scale: .20
})
 
 // Add the group to the scene
 scene.add(container)
 
 // Draw the scene
 const drawer = new Urpflanze.DrawerCanvas(scene, document.body)
 drawer.draw()