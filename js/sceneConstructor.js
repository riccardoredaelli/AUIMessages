var scene= document.querySelector('#scene');

var line= document.createElement('a-curve');
line.setAttribute('id','line')

var startingPoint=document.createElement('a-curve-point');
startingPoint.setAttribute('id','startingPoint');
startingPoint.setAttribute('position','-20 5 -15');

var point1=document.createElement('a-curve-point');
point1.setAttribute('position','-15 10 -15');

var point2=document.createElement('a-curve-point');
point2.setAttribute('position','8 15 -15');

var endingPoint=document.createElement('a-curve-point');
endingPoint.setAttribute('id','endingPoint');
endingPoint.setAttribute('position','20 5 -15');

line.appendChild(startingPoint);
line.appendChild(point1);
line.appendChild(point2);
line.appendChild(endingPoint);

scene.appendChild(line);

var curve=document.createElement('a-draw-curve');
curve.setAttribute('curveref','#line');

curve.setAttribute('class','collidable');
curve.setAttribute('collider-check');
curve.setAttribute('id','curve');
curve.setAttribute('recursive',false);
scene.appendChild(curve);

console.log('posizione del initial point' + startingPoint.getAttribute('position'));

var home=document.querySelector('#casa');
home.setAttribute('position','20 5 -15' );
