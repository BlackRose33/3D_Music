var meshes = [];
var pressedKeys = [];
var isPressed = [];

var isGrowing = false;

// init
var scene = new THREE.Scene();

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var geometry = new THREE.BoxGeometry( 1, 1, 1 );

var red = new THREE.MeshBasicMaterial( { color: 0xC0392B } );
var C_a = new THREE.Mesh( geometry, red );

var violet = new THREE.MeshBasicMaterial( { color: 0x8e44ad } );
var Cs_w = new THREE.Mesh( geometry, violet );

var blue = new THREE.MeshBasicMaterial( { color: 0x0000ff } );
var D_s = new THREE.Mesh( geometry, blue );

var yellow = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
var Ds_e = new THREE.Mesh( geometry, yellow );

var orange = new THREE.MeshBasicMaterial( { color: 0xd35400 } );
var E_d = new THREE.Mesh( geometry, orange );

var white = new THREE.MeshBasicMaterial( { color: 0xffffff } );
var F_f = new THREE.Mesh( geometry, white );

var aqua = new THREE.MeshBasicMaterial( { color: 0x00ffff } );
var Fs_t = new THREE.Mesh( geometry, aqua );

var lime = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var G_g = new THREE.Mesh( geometry, lime );

var pink = new THREE.MeshBasicMaterial( { color: 0xff00ff } );
var Gs_y = new THREE.Mesh( geometry, pink );

var silver = new THREE.MeshBasicMaterial( { color: 0xc0c0c0 } );
var A_h = new THREE.Mesh( geometry, silver );

var green = new THREE.MeshBasicMaterial( { color: 0x008000 } );
var As_u = new THREE.Mesh( geometry, green );

var peach = new THREE.MeshBasicMaterial( { color: 0xFFA07A } );
var B_j = new THREE.Mesh( geometry, peach );

/*
scene.add( C_a );
scene.add( Cs_w );
scene.add( D_s );
scene.add( Ds_e );
scene.add( E_d );
scene.add( F_f );
scene.add( Fs_t );
scene.add( G_g );
scene.add( Gs_y );
scene.add( A_h );
scene.add( As_u );
scene.add( B_j );
*/

var camera = new THREE.PerspectiveCamera(25, window.innerWidth / window.innerHeight, 1, 1000 );
camera.position.z = 75;
camera.position.y = 45;
camera.position.x = 45;
controls = new THREE.OrbitControls( camera, renderer.domElement );
controls.enableDamping = true;
controls.dampingFactor = 0.25;
controls.enableZoom = false;

// initialize starting positions
/*
C_a.position.set(-20,-11,0);
Cs_w.position.set(-20,-9,0);
D_s.position.set(-20,-7,0);
Ds_e.position.set(-20,-5,0);
E_d.position.set(-20,-3,0);
F_f.position.set(-20,-1,0);
Fs_t.position.set(-20,1,0);
G_g.position.set(-20,3,0);
Gs_y.position.set(-20,5,0);
A_h.position.set(-20,7,0);
As_u.position.set(-20,9,0);
B_j.position.set(-20,11,0);
*/

var render = function () {
	requestAnimationFrame( render );
	
	movebox();
	
	renderer.render(scene, camera);
};

render();

var moveRate = 0.2;
var scaleRate = 0.1;

function movebox() {
	for(var i=0; i<meshes.length; i++) {
		if(pressedKeys.indexOf(meshes[i]) > -1) {
			meshes[i].scale.x += scaleRate;
			meshes[i].position.x += moveRate/2;
		}
		else {
			meshes[i].position.x += moveRate;
		}
	}
}

document.onkeydown = function(e) {
	var keyCode = e.keyCode;
	if(keyCode===65) {
		if(!isPressed['a']) {
			isPressed['a'] = true;
			C_a = new THREE.Mesh( geometry, red );
			scene.add(C_a);
			C_a.position.set(-65,-45,0);
			meshes.push(C_a);
			pressedKeys.push(C_a);
		}
	}
	if(keyCode===87) {
		if(!isPressed['w']) {
			isPressed['w'] = true;
			Cs_w = new THREE.Mesh( geometry, violet );
			scene.add(Cs_w);
			Cs_w.position.set(-65,-40,0);
			meshes.push(Cs_w);
			pressedKeys.push(Cs_w);
		}
	}
	if(keyCode===83) {
		if(!isPressed['s']) {
			isPressed['s'] = true;
			D_s = new THREE.Mesh( geometry, blue );
			scene.add(D_s);
			D_s.position.set(-65,-35,0);
			meshes.push(D_s);
			pressedKeys.push(D_s);
		}
	}
	if(keyCode===69) {
		if(!isPressed['e']) {
			isPressed['e'] = true;
			Ds_e = new THREE.Mesh( geometry, yellow );
			scene.add(Ds_e);
			Ds_e.position.set(-65,-30,0);
			meshes.push(Ds_e);
			pressedKeys.push(Ds_e);
		}
	}
	if(keyCode===68) {
		if(!isPressed['d']) {
			isPressed['d'] = true;
			E_d = new THREE.Mesh( geometry, orange );
			scene.add(E_d);
			E_d.position.set(-65,-25,0);
			meshes.push(E_d);
			pressedKeys.push(E_d);
		}
	}
	if(keyCode===70) {
		if(!isPressed['f']) {
			isPressed['f'] = true;
			F_f = new THREE.Mesh( geometry, white );
			scene.add(F_f);
			F_f.position.set(-65,-20,0);
			meshes.push(F_f);
			pressedKeys.push(F_f);
		}
	}
	if(keyCode===84) {
		if(!isPressed['t']) {
			isPressed['t'] = true;
			Fs_t = new THREE.Mesh( geometry, aqua );
			scene.add(Fs_t);
			Fs_t.position.set(-65,-15,0);
			meshes.push(Fs_t);
			pressedKeys.push(Fs_t);
		}
	}
	if(keyCode===71) {
		if(!isPressed['g']) {
			isPressed['g'] = true;
			G_g = new THREE.Mesh( geometry, lime );
			scene.add(G_g);
			G_g.position.set(-65,-10,0);
			meshes.push(G_g);
			pressedKeys.push(G_g);
		}
	}
	if(keyCode===89) {
		if(!isPressed['y']) {
			isPressed['y'] = true;
			Gs_y = new THREE.Mesh( geometry, pink );
			scene.add(Gs_y);
			Gs_y.position.set(-65,-5,0);
			meshes.push(Gs_y);
			pressedKeys.push(Gs_y);
		}
	}
	if(keyCode===72) {
		if(!isPressed['h']) {
			isPressed['h'] = true;
			A_h = new THREE.Mesh( geometry, silver );
			scene.add(A_h);
			A_h.position.set(-65,0,0);
			meshes.push(A_h);
			pressedKeys.push(A_h);
		}
	}
	if(keyCode===85) {
		if(!isPressed['u']) {
			isPressed['u'] = true;
			As_u = new THREE.Mesh( geometry, green );
			scene.add(As_u);
			As_u.position.set(-65,5,0);
			meshes.push(As_u);
			pressedKeys.push(As_u);
		}
	}
	if(keyCode===74) {
		if(!isPressed['j']) {
			isPressed['j'] = true;
			B_j = new THREE.Mesh( geometry, peach );
			scene.add(B_j);
			B_j.position.set(-65,10,0);
			meshes.push(B_j);
			pressedKeys.push(B_j);
		}
	}
}

document.onkeyup = function(e) {
	var keyCode = e.keyCode;
	if(keyCode===65) {
		isGrowing = false;
		var index = pressedKeys.indexOf(C_a);
		pressedKeys.splice(index, 1);
		isPressed['a'] = false;
	}
	if(keyCode===87) {
		isGrowing = false;
		var index = pressedKeys.indexOf(Cs_w);
		pressedKeys.splice(index, 1);
		isPressed['w'] = false;
	}
	if(keyCode===83) {
		isGrowing = false;
		var index = pressedKeys.indexOf(D_s);
		pressedKeys.splice(index, 1);
		isPressed['s'] = false;
	}
	if(keyCode===69) {
		isGrowing = false;
		var index = pressedKeys.indexOf(Ds_e);
		pressedKeys.splice(index, 1);
		isPressed['e'] = false;
	}
	if(keyCode===68) {
		isGrowing = false;
		var index = pressedKeys.indexOf(E_d);
		pressedKeys.splice(index, 1);
		isPressed['d'] = false;
	}
	if(keyCode===70) {
		isGrowing = false;
		var index = pressedKeys.indexOf(F_f);
		pressedKeys.splice(index, 1);
		isPressed['f'] = false;
	}
	if(keyCode===84) {
		isGrowing = false;
		var index = pressedKeys.indexOf(Fs_t);
		pressedKeys.splice(index, 1);
		isPressed['t'] = false;
	}
	if(keyCode===71) {
		isGrowing = false;
		var index = pressedKeys.indexOf(G_g);
		pressedKeys.splice(index, 1);
		isPressed['g'] = false;
	}
	if(keyCode===89) {
		isGrowing = false;
		var index = pressedKeys.indexOf(Gs_y);
		pressedKeys.splice(index, 1);
		isPressed['y'] = false;
	}
	if(keyCode===72) {
		isGrowing = false;
		var index = pressedKeys.indexOf(A_h);
		pressedKeys.splice(index, 1);
		isPressed['h'] = false;
	}
	if(keyCode===85) {
		isGrowing = false;
		var index = pressedKeys.indexOf(As_u);
		pressedKeys.splice(index, 1);
		isPressed['u'] = false;
	}
	if(keyCode===74) {
		isGrowing = false;
		var index = pressedKeys.indexOf(B_j);
		pressedKeys.splice(index, 1);
		isPressed['j'] = false;
	}
}
