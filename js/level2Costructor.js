var scene=document.querySelector('#scene');

var ass=document.createElement("a-assets");
var path=document.createElement("a-mixin");
path.setAttribute("id", "path");
path.setAttribute("material", "color: #7a0000; shader:flat");
path.setAttribute('position', '0 0 0');
path.setAttribute('class', 'clickable');
ass.appendChild(path);
scene.appendChild(ass);

var c1=document.createElement('a-torus');
c1.setAttribute('radius', '8');
c1.setAttribute('radius-tubular', '0.4');
c1.setAttribute("mixin", "path");
c1.setAttribute('id','c1');
c1.setAttribute('rotation', '90 3 -3');
c1.setAttribute('arc','80');
scene.appendChild(c1);

var c2=document.createElement('a-torus');
c2.setAttribute('radius', '8');
c2.setAttribute('radius-tubular', '0.4');
c2.setAttribute("mixin", "path");
c2.setAttribute('id','c2');
c2.setAttribute('rotation', '90 127 0');
c2.setAttribute('arc','43');
scene.appendChild(c2);

var c3=document.createElement('a-torus');
c3.setAttribute('radius', '8');
c3.setAttribute('radius-tubular', '0.4');
c3.setAttribute("mixin", "path")
c3.setAttribute('id','c3');
c3.setAttribute('rotation', '0 0 -2');
c3.setAttribute('arc','42');
scene.appendChild(c3);

var c4=document.createElement('a-torus');
c4.setAttribute("mixin", "path");
c4.setAttribute('id','c4');
c4.setAttribute('radius', '8');
c4.setAttribute('radius-tubular', '0.4');
c4.setAttribute('rotation', '0 90 -2');
c4.setAttribute('arc', '42');
c4.setAttribute('class', 'clickable');
scene.appendChild(c4);

var c5=document.createElement('a-torus');
c5.setAttribute("mixin", "path");
c5.setAttribute('id','c5');
c5.setAttribute('position', '0 4.5 0 ');
c5.setAttribute('radius', '6.7');
c5.setAttribute('radius-tubular', '0.4');
c5.setAttribute('rotation', '90 0 -96');
c5.setAttribute('arc', '102');
c5.setAttribute('class', 'clickable');
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

var finalPosition='3.2 -1.6 8.15';

var giftFinal=document.createElement('a-entity');
giftFinal.setAttribute('obj-model','obj: url(models/singleGift/model.obj); mtl: url(models/singleGift/materials.mtl);');
giftFinal.setAttribute('position',finalPosition);
giftFinal.setAttribute('scale','0.7 0.7 0.7');
giftFinal.setAttribute('rotation','40 180 0');
giftFinal.setAttribute('visible',false);
giftFinal.setAttribute('id','giftFinal');
scene.appendChild(giftFinal);