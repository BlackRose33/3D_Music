window.addEventListener("keydown", keyDown, false);

var isMoving = false;
var isGrowing = false;

// init
var scene = new THREE.Scene();

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var red = new THREE.MeshBasicMaterial( { color: 0xC0392B } );
var C_a = new THREE.Mesh( geometry, red );
C_a.geometry.dynamic = true;
var violet = new THREE.MeshBasicMaterial( { color: 0x8e44ad } );
var Cs_w = new THREE.Mesh( geometry, violet );
Cs_w.geometry.dynamic = true;
var blue = new THREE.MeshBasicMaterial( { color: 0x0000ff } );
var D_s = new THREE.Mesh( geometry, blue );
D_s.geometry.dynamic = true;
var yellow = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
var Ds_e = new THREE.Mesh( geometry, yellow );
Ds_e.geometry.dynamic = true;
var orange = new THREE.MeshBasicMaterial( { color: 0xd35400 } );
var E_d = new THREE.Mesh( geometry, orange );
E_d.geometry.dynamic = true;
var white = new THREE.MeshBasicMaterial( { color: 0xffffff } );
var F_f = new THREE.Mesh( geometry, white );
F_f.geometry.dynamic = true;
var aqua = new THREE.MeshBasicMaterial( { color: 0x00ffff } );
var Fs_t = new THREE.Mesh( geometry, aqua );
Fs_t.geometry.dynamic = true;
var lime = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var G_g = new THREE.Mesh( geometry, lime );
G_g.geometry.dynamic = true;
var pink = new THREE.MeshBasicMaterial( { color: 0xff00ff } );
var Gs_y = new THREE.Mesh( geometry, pink );
Gs_y.geometry.dynamic = true;
var silver = new THREE.MeshBasicMaterial( { color: 0xc0c0c0 } );
var A_h = new THREE.Mesh( geometry, silver );
A_h.geometry.dynamic = true;
var green = new THREE.MeshBasicMaterial( { color: 0x008000 } );
var As_u = new THREE.Mesh( geometry, green );
As_u.geometry.dynamic = true;
var peach = new THREE.MeshBasicMaterial( { color: 0xFFA07A } );
var B_j = new THREE.Mesh( geometry, peach );
B_j.geometry.dynamic = true;


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

var camera = new THREE.PerspectiveCamera( 30, window.innerWidth / window.innerHeight, 1, 1000 );
camera.position.z = 60;
controls = new THREE.OrbitControls( camera, renderer.domElement );
controls.enableDamping = true;
controls.dampingFactor = 0.25;
controls.enableZoom = false;

// initialize starting positions
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


var render = function () {
	requestAnimationFrame( render );
	
	movebox();

	renderer.render(scene, camera);
};

render();

var moveRate = 0.1;
var scaleRate = 0.1;

function movebox() {
	if(isMoving) {
		C_a.position.x += moveRate;
		C_a.scale.x += scaleRate;
	}
}

function keyDown(e) {
	var keyCode = e.keyCode;
	if(keyCode===65) {
		isMoving = true;
		isGrowing = true;
	}
}

function keyUp(e) {
	var keyCode = e.keyCode;
	if(keyCode===65) {
		isMoving = true;
		isGrowing = false;
	}
}