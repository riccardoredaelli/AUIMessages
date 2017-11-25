console.log("sono dentro");
var scene= document.querySelector('#scene');
//var numOfcurves= input;
var line= document.createElement('a-curve');
line.setAttribute('id','line');

var startingPoint=document.createElement('a-curve-point');
startingPoint.setAttribute('position','-10 0 -5');

/*var point1=document.createElement('a-curve-point');

var x= Math.random()*10 -5;
point1.setAttribute('position.x',x);
console.log("posizione x "+ x + "\n");


var y = Math.random()*10 -5;
point1.setAttribute('position.y',y);
console.log("posizione y "+ y + "\n");

var z = Math.random()*10*(-1)-3;
point1.setAttribute('position.z',z);
console.log("posizione z "+ z + "\n");*/

var point1=document.createElement('a-curve-point');
point1.setAttribute('position','0 0 -5');

var point2=document.createElement('a-curve-point');
point2.setAttribute('position','0 0 -5');

var endingPoint=document.createElement('a-curve-point');
endingPoint.setAttribute('position','10 0 -5');

line.appendChild(startingPoint);
line.appendChild(point1);
line.appendChild(point2);
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
sp.setAttribute('radius', '0.3');
scene.appendChild(sp);
var raycaster=document.querySelector('#rc');
var intersected=Boolean;
intersected=false;

curve.addEventListener('raycaster-intersected', (e) =>{
    intersected=true;
    sp.setAttribute('visible', true);
    sp.setAttribute('color', 'yellow');
    curve.addEventListener('mouseenter', function(){
            if(intersected==true){
                sp.setAttribute('color', 'green');
                sp.setAttribute('position', e.detail.intersection.point);
                
                curve.addEventListener('mouseup', function(){
                    if (intersected==true){
                        sp.setAttribute('color','yellow');
                        return;
                    }
                    else
                        sp.setAttribute('color','red');
                })
            return;
            }
            else return;
    })
})

curve.addEventListener('raycaster-intersected-cleared', function(){
    intersected=false;
})

//curve.addEventListener('raycaster-intersected', (e) => console.log(e.detail.intersection.point));

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
