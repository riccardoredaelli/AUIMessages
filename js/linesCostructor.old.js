// funzione per mettere insieme due event listener o più 
function addMultipleListeners(element,events,handler,useCapture,args){
  if (!(events instanceof Array)){
    throw 'addMultipleListeners: '+
          'please supply an array of eventstrings '+
          '(like ["click","mouseover"])';
  }
  //create a wrapper to be able to use additional arguments
  var handlerFn = function(e){
    handler.apply(this, args && args instanceof Array ? args : []);
  }
  for (var i=0;i<events.length;i+=1){
    element.addEventListener(events[i],handlerFn,useCapture);
  }
}


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
raycaster.setAttribute('objects','#curve');
var curve=document.querySelector('#curve');

function roadExit(){
    console.log('uscito dal percorso');
    spStop.setAttribute('visible', true);
    sp.setAttribute('visible', false);
    spStop.setAttribute('position', '-20 5 -15');
    //curve.removeEventListener('raycaster-intersected', raycaster);
    console.log('eseguito road exit prima del remove event listener');
    curve.removeEventListener('raycaster-intersected-cleared', roadExit);
    console.log('eseguito road exit con il remove event listener teoricamente non dovrei vederlo?');
}

function intersection(){
    curve.addEventListener('raycaster-intersected', function raycaster(e) {
        console.log('sono dentro al raycaster intersected');
        sp.setAttribute('visible', true);
        sp.setAttribute('position', e.detail.intersection.point);
        sp.addEventListener('mouseup', function(){
            console.log('sono dentro al rilascio del mouse');
            spStop.setAttribute('position', sp.getDOMAttribute('position'));
            spStop.setAttribute('visible',true);
            sp.setAttribute('visible', false);
            curve.removeEventListener('raycaster-intersected-cleared', roadExit);
            curve.removeEventListener('raycaster-intersected', raycaster);
        })
    })
    curve.addEventListener('raycaster-intersected-cleared', roadExit);
    console.log('eseguito e tornato su funzione intersection');    
    curve.removeEventListener('raycaster-intersected', raycaster);
    console.log('eseguito e teoricamente rimosso il controllo dei raycaster');
    return;
}

spStop.addEventListener('mousedown', function(){
    spStop.setAttribute('visible',false);
    intersection();
})

/*function doit(){
    spStop.addEventListener('mousedown',function(e){
        spStop.setAttribute('visible', false);
        console.log('intersection and click');
        sp.setAttribute('visible', true);
        spStop.setAttribute('visible', false);
        sp.addEventListener('mouseup', function(){
            console.log('dentro mouse up');
            spStop.pause();
            curve.pause();
            restartListener();
        })
    })
}



curve.addEventListener('raycaster-intersected', e=>{
    sp.setAttribute('position', e.detail.intersection.point);
    doit(e);
    console.log('intersezione');
})

function restartListener(){
    console.log('restart listener partito');
    spStop.start();
}


//spStop.setAttribute('position', sp.getDOMAttribute('position'));
//curve.addEventListener('raycaster-intersected', (e) => console.log(e.detail.intersection.point));

function handler(e) {
    console.log('sono in handler');
  spStop.setAttribute('color', 'green');
};


addMultipleListeners(
    curve,
    ['raycaster-intersected','mouseup'],
    handler,
    false);
*/
