console.log("sono dentro");
var scene= document.querySelector('#scene');
//var numOfcurves= input;
var line= document.createElement('a-curve');
line.setAttribute('id','line');

var startingPoint=document.createElement('a-curve-point');
startingPoint.setAttribute('position','-4 1 -3');
var s=document.createElement('a-sphere');
s.setAttribute('radius','1');
startingPoint.appendChild(s);

var point1=document.createElement('a-curve-point');

var x= Math.random()*10 -5;
point1.setAttribute('position.x',x);
console.log("posizione x "+ x + "\n");


var y = Math.random()*10 -5;
point1.setAttribute('position.y',y);
console.log("posizione y "+ y + "\n");

var z = Math.random()*10*(-1)-3;
point1.setAttribute('position.z',z);
console.log("posizione z "+ z + "\n");

var endingPoint=document.createElement('a-curve-point');
endingPoint.setAttribute('position','4 2 -3');

line.appendChild(startingPoint);
line.appendChild(point1);
line.appendChild(endingPoint);

scene.appendChild(line);

var curve=document.createElement('a-draw-curve');
curve.setAttribute('curveref','#line');

curve.setAttribute('class','collidable');
curve.setAttribute('collider-check');
scene.appendChild(curve);
console.log("ho finito");

var sp= document.createElement('a-sphere');
sp.setAttribute('visible', false);
sp.setAttribute('radius', '1');
scene.appendChild(sp);
var raycaster=document.querySelector('#rc');

curve.addEventListener('raycaster-intersected', function(){
    console.log('collisione');
    sp.setAttribute('visible',true);
})

/*var intersects=raycaster.intersectEls(curve, true);
var currentIntersected
curve.addEventListener('raycaster-intersected',function(){
   if ( intersects.length > 0 ) {
       if ( currentIntersected !== undefined ) {
           currentIntersected.material.linewidth = 1;
		}
       currentIntersected = intersects[ 0 ].object;
       currentIntersected.material.linewidth = 5;
       sp.visible = true;
       sp.position.copy( intersects[ 0 ].point );
        } else {
            if ( currentIntersected !== undefined ) {
                currentIntersected.material.linewidth = 1;
            }
            currentIntersected = undefined;
            sp.visible = false;
            }
       // renderer.render( scene, camera );
})*/
