

var scene=document.querySelector('#scene');

var c1=document.createElement('a-torus');
c1.setAttribute('id','c1');
c1.setAttribute('opacity','0.2');
c1.setAttribute('position', '0 0 0 ');
c1.setAttribute('color', 'green');
c1.setAttribute('radius', '8');
c1.setAttribute('radiusTubolar', '0.2');
c1.setAttribute('rotation', '90 3 0');
c1.setAttribute('arc','80');
c1.setAttribute('class', 'clickable');
scene.appendChild(c1);

var c2=document.createElement('a-torus');
c2.setAttribute('id','c2');
c2.setAttribute('position', '0 0 0 ');
c2.setAttribute('color', 'green');
c2.setAttribute('radius', '8');
c2.setAttribute('radiusTubolar', '0.2');
c2.setAttribute('rotation', '90 127 0');
c2.setAttribute('arc','40');
c2.setAttribute('class', 'clickable');
scene.appendChild(c2);

var c3=document.createElement('a-torus');
c3.setAttribute('id','c3');
c3.setAttribute('position', '0 0 0 ');
c3.setAttribute('color', 'green');
c3.setAttribute('radius', '8');
c3.setAttribute('radiusTubolar', '0.2');
c3.setAttribute('rotation', '0 0 -2');
c3.setAttribute('arc','37');
c3.setAttribute('class', 'clickable');
scene.appendChild(c3);

var c4=document.createElement('a-torus');
c4.setAttribute('id','c4');
c4.setAttribute('position', '0 0 0 ');
c4.setAttribute('color', 'green');
c4.setAttribute('radius', '8');
c4.setAttribute('radiusTubolar', '0.2');
c4.setAttribute('rotation', '0 90 -2');
c4.setAttribute('arc', '37');
c4.setAttribute('class', 'clickable');
scene.appendChild(c4);

var c5=document.createElement('a-torus');
c5.setAttribute('id','c5');
c5.setAttribute('position', '0 4.5 0 ');
c5.setAttribute('color', 'green');
c5.setAttribute('radius', '6.6');
c5.setAttribute('radiusTubolar', '0.2');
c5.setAttribute('rotation', '90 0 -93');
c5.setAttribute('arc', '96');
c5.setAttribute('class', 'clickable');
scene.appendChild(c5);

var house=document.createElement('a-entity');
house.setAttribute('obj-model','obj: url(models/House/House.obj); mtl: url(models/House/House.mtl);');
house.setAttribute('position','1.5 -1 8');
house.setAttribute('scale','2 2 2');
house.setAttribute('rotation','0 220 0');
scene.appendChild(house);

var gift=document.createElement('a-gltf-model');
gift.setAttribute('obj-model','obj: url(models/singleGift/model.obj); mtl: url(models/singleGift/materials.mtl);');
gift.setAttribute('position','-4.1  -0.5 -6.3');
gift.setAttribute('scale','1 1 1');
gift.setAttribute('rotation','0 40 0');
scene.appendChild(gift);