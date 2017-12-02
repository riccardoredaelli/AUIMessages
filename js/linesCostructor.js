

var sp= document.createElement('a-sphere');
sp.setAttribute('radius', '0.5');
sp.setAttribute('visible', false);
sp.setAttribute('color', 'yellow');

var spStop= document.createElement('a-sphere');
spStop.setAttribute('radius', '1');
spStop.setAttribute('visible', true);
spStop.setAttribute('color', 'red');
spStop.setAttribute('position', '-20 5 -15');


scene.appendChild(sp);
scene.appendChild(spStop);
var raycaster=document.querySelector('#rc');
var mouse=Boolean;
mouse=false;
raycaster.setAttribute('objects','#curve');
var curve=document.querySelector('#curve');



scene.addEventListener('mousedown', function(){
    mouse=true;
    console.log('mouse cliccato e var mouse= '+ mouse);
})


scene.addEventListener('mouseup', function(){
    mouse=false;
    console.log('mouse rilasciato e var mouse= '+ mouse);        
})

curve.addEventListener('raycaster-intersected', e=>{
    spStop.setAttribute('visible', false);
    console.log('intersection');
    sp.setAttribute('visible', true);
    sp.setAttribute('position', e.detail.intersection.point);

})



curve.addEventListener('raycaster-intersected-cleared', function(){
    spStop.setAttribute('visible', true);
    console.log('visibile!');
    spStop.setAttribute('position', sp.getDOMAttribute('position'));
    console.log('intersection cleared');
    sp.setAttribute('visible', false);
 
})

/*curve.addEventListener('raycaster-intersected', function(){
    intersected=true;
    console.log('raggi intersecati e intersected= '+ intersected);
})

curve.addEventListener('raycaster-intersected', (e) =>{
    intersected=true;
    sp.setAttribute('visible', true);
    sp.setAttribute('color', 'yellow');
    curve.addEventListener('mouseenter', function(){
console.log('MOUSEENTER----intersected= '+ intersected);                    
            if(intersected==true){
                sp.setAttribute('color', 'green');
                sp.setAttribute('position', e.detail.intersection.point); 
                curve.addEventListener('mouseup', function(){
console.log('MOUSEUP----intersected= '+ intersected);                    
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
    console.log('raggi non più intersecati e intersected= '+ intersected);
})*/

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
