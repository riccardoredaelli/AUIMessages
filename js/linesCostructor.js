

var geometry = new THREE.SphereGeometry( 5 );
var material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
var container= document.querySelector('#scene');
var sky= document.querySelector('#sky');

init();

function init(){
    var container, stats;
    var camera, scene, raycaster, renderer, parentTransform, sphereInter;
    
    camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 10000 );
    scene = new THREE.Scene();
    scene.background = new THREE.Color( 0xf0f0f0 );
    var geometry = new THREE.SphereGeometry( 5 );
    var material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
    sphereInter = new THREE.Mesh( geometry, material );
    sphereInter.visible = false;
    scene.add( sphereInter );
    
    
    var geometry = new THREE.Geometry();
    var point = new THREE.Vector3();
    var direction = new THREE.Vector3();
    
    
    for ( var i = 0; i < 50; i ++ ) {
        direction.x += Math.random() - 0.5;
        direction.y += Math.random() - 0.5;
        direction.z += Math.random() - 0.5;
					
        direction.normalize().multiplyScalar( 10 );
        point.add( direction );
        geometry.vertices.push( point.clone() );
        
    }
    
    parentTransform = new THREE.Object3D();
    
    parentTransform.position.x = Math.random() * 40 - 20;
    parentTransform.position.y = Math.random() * 40 - 20;
    parentTransform.position.z = Math.random() * 40 - 20;
    
    parentTransform.rotation.x = Math.random() * 2 * Math.PI;
    parentTransform.rotation.y = Math.random() * 2 * Math.PI;
    parentTransform.rotation.z = Math.random() * 2 * Math.PI;
    
    parentTransform.scale.x = Math.random() + 0.5;
    parentTransform.scale.y = Math.random() + 0.5;
    parentTransform.scale.z = Math.random() + 0.5;
    
    for ( var i = 0; i < 50; i ++ ) {
        var object;
        if ( Math.random() > 0.5 ) {
				object = new THREE.Line( geometry );
        } else {
                object = new THREE.LineSegments( geometry );
        }
    object.position.x = Math.random() * 400 - 200;
    object.position.y = Math.random() * 400 - 200;
    object.position.z = Math.random() * 400 - 200;
    object.rotation.x = Math.random() * 2 * Math.PI;
    object.rotation.y = Math.random() * 2 * Math.PI;
    object.rotation.z = Math.random() * 2 * Math.PI;
    object.scale.x = Math.random() + 0.5;
    object.scale.y = Math.random() + 0.5;
    object.scale.z = Math.random() + 0.5;
    parentTransform.add( object );
        }
    
    scene.add( parentTransform );
        raycaster = new THREE.Raycaster();
        raycaster.linePrecision = 3;
        renderer = new THREE.WebGLRenderer( { antialias: true } );
        renderer.setPixelRatio( window.devicePixelRatio );
        renderer.setSize( window.innerWidth, window.innerHeight );
}