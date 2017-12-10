

var scene=document.querySelector('#scene');

var c1=document.createElement('a-torus');
c1.setAttribute('position', '0 0 0 ');
c1.setAttribute('color', 'green');
c1.setAttribute('radius', '8');
c1.setAttribute('radiusTubolar', '0.2');
c1.setAttribute('rotation', '90 1 0');
c1.setAttribute('arc','40');
//c1.setAttribute('position', '0 0 0 ');
scene.appendChild(c1);

var c2=document.createElement('a-torus');
c2.setAttribute('position', '0 0 0 ');
c2.setAttribute('color', 'green');
c2.setAttribute('radius', '8');
c2.setAttribute('radiusTubolar', '0.2');
c2.setAttribute('rotation', '90 130 0');
c2.setAttribute('arc','40');
scene.appendChild(c2);

var c3=document.createElement('a-torus');
c3.setAttribute('position', '0 0 0 ');
c3.setAttribute('color', 'green');
c3.setAttribute('radius', '8');
c3.setAttribute('radiusTubolar', '0.2');
c3.setAttribute('rotation', '-30 0 0');
c3.setAttribute('arc','92');
scene.appendChild(c3);

var c4=document.createElement('a-torus');
c4.setAttribute('position', '0 0 0 ');
c4.setAttribute('color', 'green');
c4.setAttribute('radius', '8');
c4.setAttribute('radiusTubolar', '0.2');
c4.setAttribute('rotation', '0 90 0');
c4.setAttribute('arc', '63');
scene.appendChild(c4);