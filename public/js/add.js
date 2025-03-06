
function addPointLight() {
	var color = 0xffffff;
	var intensity = 1;
	var distance = 0;

	var light = new THREE.PointLight( color, intensity, distance )
	light.position.set(0,0,parseFloat(distance));
	light.name = 'PointLight ';
	// light.castShadow = true; // default false
//Set up shadow properties for the light
// 	light.shadow.mapSize.width = 512; // default
// 	light.shadow.mapSize.height = 512; // default
// 	light.shadow.camera.near = 0.5; // default
// 	light.shadow.camera.far = 500; // default
	add_set_select(light);

	// const helper = new THREE.CameraHelper( light.shadow.camera );
	// scene.add( helper );
}

	// SpotLight
function addSpotLight() {

	var color = 0xffffff;
	var intensity = 1;
	var distance = 0;
	var angle = Math.PI * 0.1;
	var penumbra = 0;

	var light = new THREE.SpotLight( color, intensity, distance, angle, penumbra );
	light.name = 'SpotLight ';
	light.target.name = 'SpotLight  Target';

	light.position.set( 5, 10, 7.5 );

	add_set_select(light);
}

	// DirectionalLight
function addDirectionalLight() {
		var color = 0xffffff;
		var intensity = 1;

		var light = new THREE.DirectionalLight( color, intensity );
		light.name = 'DirectionalLight ';
		light.target.name = 'DirectionalLight Target';

		light.position.set( 5, 10, 7.5 );

	add_set_select(light);
}
	// HemisphereLight
function addHemisphereLight() {

		var skyColor = 0x00aaff;
		var groundColor = 0xffaa00;
		var intensity = 1;

		var light = new THREE.HemisphereLight( skyColor, groundColor, intensity );
		light.name = 'HemisphereLight ';

		light.position.set( 0, 10, 0 );

	add_set_select(light);
}

	// AmbientLight
function addAmbientLight() {

		var color = 0x222222;

		var light = new THREE.AmbientLight( color );
		light.name = 'AmbientLight ';

	add_set_select(light);
}

// PerspectiveCamera
function addPerspectiveCamera() {
	var camera = new THREE.PerspectiveCamera( 50, 1, 1, 10000 );
	camera.name = 'PerspectiveCamera';

	// scene.add( camera ) ;
	// objects.push(camera);
	add_set_select(camera);
}
function add_set_select(obj) {
	sceneAdd(obj);
	select_obj(obj);

	$('.option').removeClass('active');
	$('.option').each(function() {
		// console.log(selectedObject.id + " === "+this.id);
		if( ('listScene'+selectedObject.id) == this.id ) {
			$(this).addClass('active');
		}
	})
}