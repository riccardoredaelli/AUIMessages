

var scene=document.querySelector('#scene');

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
c5.setAttribute('arc', '102');
c5.setAttribute('class', 'clickable');
c5.setAttribute('shader','flat');
scene.appendChild(c5);

var house=document.createElement('a-entity');
house.setAttribute('obj-model','obj: url(models/albero/model.obj); mtl: url(models/albero/materials.mtl);');
house.setAttribute('position','1.15 0 8');
house.setAttribute('scale','1 1 1');
house.setAttribute('rotation','0 220 0');
scene.appendChild(house);

var gift=document.createElement('a-entity');
gift.setAttribute('obj-model','obj: url(models/singleGift/model.obj); mtl: url(models/singleGift/materials.mtl);');
gift.setAttribute('position','-3  0. -5.3');
gift.setAttribute('scale','0.7 0.7 0.7');
gift.setAttribute('rotation','40 40 0');
gift.setAttribute('id','gift');
scene.appendChild(gift);