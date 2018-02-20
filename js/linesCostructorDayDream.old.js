var focused=false;
var controller=document.querySelector("#controller");

var spStop= document.createElement('a-sphere');
spStop.setAttribute('visible', true);
spStop.setAttribute('color', 'red');
spStop.setAttribute('position', '-20 5 -15');
console.log("Creata sfera rossa visibile");

var scene=document.querySelector("#scene");
scene.appendChild(spStop);

       spStop.addEventListener('raycaster-intersected', function () {
            if (focused) return;
            focused = true;
            console.log('intersecati!');
            spStop.setAttribute('color','green');
            });
        spStop.addEventListener('raycaster-intersected-cleared', function () {
            focused = false;
            spStop.setAttribute('color','orange');
        });

controller.addEventListener('trackpaddown', function raycaster(e) {
    console.log("trackpad DOWN");
    if(focused){
        console.log('focused and trackpaddown');
            spStop.setAttribute("visible", false)
            sp.setAttribute('position', e.detail.intersection.point);
            sp.setAttribute('visible', true);
            
            controller.addEventListener('trackpadup', function(){
                console.log('focused and trackpadup');
                spStop.setAttribute('position', sp.getDOMAttribute('position'));
                spStop.setAttribute('visible',true);
                sp.setAttribute('visible', false);
                //curve.removeEventListener('raycaster-intersected-cleared', roadExit);
                //curve.removeEventListener('raycaster-intersected', raycaster);
            })
    }
})









/*function roadExit(){
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
        sp.addEventListener('trackpadup', function(){
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

spStop.addEventListener('trackpaddown', function(){
    spStop.setAttribute('visible',false);
    intersection();
})*/