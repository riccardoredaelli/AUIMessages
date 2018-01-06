var scene=document.querySelector('#scene');

//posizioni iniziali e finale del percorso
var endingPoint=document.createElement("a-text");
endingPoint.setAttribute("value", '1.35 -1.1 8');
endingPoint.setAttribute("id","endingPoint");
endingPoint.setAttribute("visible", false);
scene.appendChild(endingPoint);

var startingPoint=document.createElement("a-text");
startingPoint.setAttribute("value", '-3  0 -5.3');
startingPoint.setAttribute("id","startingPoint");
startingPoint.setAttribute("visible", false);
scene.appendChild(startingPoint);

var c1=document.createElement('a-torus');
c1.setAttribute('id','c1');
c1.setAttribute('position', '0 0 0 ');
c1.setAttribute('color', '#7a0000');
c1.setAttribute('radius', '8');
c1.setAttribute('radius-tubular', '0.4');
c1.setAttribute('rotation', '90 3 -3');
c1.setAttribute('arc','80');
c1.setAttribute('class', 'clickable');
c1.setAttribute('fog', false);
c1.setAttribute('shader','flat');
scene.appendChild(c1);

var c2=document.createElement('a-torus');
c2.setAttribute('id','c2');
c2.setAttribute('position', '0 0 0 ');
c2.setAttribute('color', '#7a0000');
c2.setAttribute('radius', '8');
c2.setAttribute('radius-tubular', '0.4');
c2.setAttribute('rotation', '90 127 0');
c2.setAttribute('arc','43');
c2.setAttribute('class', 'clickable');
c2.setAttribute('shader','flat');
scene.appendChild(c2);

var c3=document.createElement('a-torus');
c3.setAttribute('id','c3');
c3.setAttribute('position', '0 0 0 ');
c3.setAttribute('color', '#7a0000');
c3.setAttribute('radius', '8');
c3.setAttribute('radius-tubular', '0.4');
c3.setAttribute('rotation', '0 0 -2');
c3.setAttribute('arc','42');
c3.setAttribute('class', 'clickable');
c3.setAttribute('shader','flat');
scene.appendChild(c3);

var c4=document.createElement('a-torus');
c4.setAttribute('id','c4');
c4.setAttribute('position', '0 0 0 ');
c4.setAttribute('color', '#7a0000');
c4.setAttribute('radius', '8');
c4.setAttribute('radius-tubular', '0.4');
c4.setAttribute('rotation', '0 90 -2');
c4.setAttribute('arc', '42');
c4.setAttribute('class', 'clickable');
c4.setAttribute('shader','flat');
scene.appendChild(c4);

var c5=document.createElement('a-torus');
c5.setAttribute('id','c5');
c5.setAttribute('position', '0 4.5 0 ');
c5.setAttribute('color', '#7a0000');
c5.setAttribute('radius', '6.7');
c5.setAttribute('radius-tubular', '0.4');
c5.setAttribute('rotation', '90 0 -96');
c5.setAttribute('arc', '62.5');
c5.setAttribute('class', 'clickable');
c5.setAttribute('shader','flat');
scene.appendChild(c5);

var c6=document.createElement('a-torus');
c6.setAttribute('id','c6');
c6.setAttribute('position', '0 0 0 ');
c6.setAttribute('color', '#7a0000');
c6.setAttribute('radius', '8');
c6.setAttribute('radius-tubular', '0.4');
c6.setAttribute('rotation', '40 38 -2');
c6.setAttribute('arc','50');
c6.setAttribute('class', 'clickable');
c6.setAttribute('fog', false);
c6.setAttribute('shader','flat');
scene.appendChild(c6);

var c7=document.createElement('a-torus');
c7.setAttribute('id','c7');
c7.setAttribute('position', '0 0 0 ');
c7.setAttribute('color', '#7a0000');
c7.setAttribute('radius', '8');
c7.setAttribute('radius-tubular', '0.4');
c7.setAttribute('rotation', '0 40 -5');
c7.setAttribute('arc','42');
c7.setAttribute('class', 'clickable');
c7.setAttribute('fog', false);
c7.setAttribute('shader','flat');
scene.appendChild(c7);

//posiziono oggetti partenza e arrivo
var endingObj=document.createElement('a-entity');
endingObj.setAttribute('obj-model','obj: url(models/House/House.obj); mtl: url(models/House/House.mtl);');
endingObj.setAttribute('position', endingPoint.getAttribute("value"));
endingObj.setAttribute('scale','2 2 2');
endingObj.setAttribute('rotation','0 220 0');
scene.appendChild(endingObj);

var startingObj=document.createElement('a-entity');
startingObj.setAttribute('obj-model','obj: url(models/factory/factory.obj); mtl: url(models/factory/factory.mtl);');
startingObj.setAttribute('position', startingPoint.getAttribute("value"));
startingObj.setAttribute('scale','0.7 0.7 0.7');
startingObj.setAttribute('rotation','40 40 0');
startingObj.setAttribute('id','startingObj');
scene.appendChild(startingObj);

var finalObj=document.createElement('a-entity');
finalObj.setAttribute('obj-model','obj: url(models/electricity/lightning.obj); mtl: url(models/electricity/lightning.mtl);');
finalObj.setAttribute('position','3.2 -1.6 8.15');
finalObj.setAttribute('scale','0.7 0.7 0.7');
finalObj.setAttribute('rotation','40 180 0');
finalObj.setAttribute('visible',false);
finalObj.setAttribute('id','finalObj');
scene.appendChild(finalObj);

var finalText=document.createElement('a-text');
finalText.setAttribute("id","finalText");
finalText.setAttribute('color', 'red');
finalText.setAttribute('position', '5 2.5 9');
finalText.setAttribute('rotation','0 180 0');
finalText.setAttribute('scale','3 3 3');
finalText.setAttribute('value', 'HAI VINTO!');
finalText.setAttribute('visible',false);
finalText.setAttribute("text", "font:https://raw.githubusercontent.com/etiennepinchon/aframe-fonts/master/fonts/crimsontext/CrimsonText-Regular.json;");
scene.appendChild(finalText);

//sfere inizio e fine
var spStop= document.createElement('a-sphere');
spStop.setAttribute("id", "spStop");
spStop.setAttribute('radius', '1');
spStop.setAttribute('visible', true);
spStop.setAttribute('color', 'red');
spStop.setAttribute('opacity','0.3');
spStop.setAttribute('class', 'clickable');
spStop.setAttribute('id', 'spStop');
scene.appendChild(spStop);
