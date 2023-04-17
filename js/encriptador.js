EYES = {};
EYES.stack = [];
//
EYES.follow = function (eye) {
var el1 = document.getElementById (eye);
var el2 = el1.getElementsByTagName ("IMG");
el2 = el2[0];
el2.centre = (el1.offsetWidth - el2.offsetWidth) / 2;
el2.style.margin = el2.centre + "px 0 0 " + el2.centre + "px";
el1.maxDist = 6 * el1.offsetWidth;
EYES.stack.push ([el1, el2]);
};
EYES.mousemove = function (e) {
if (!EYES.stack.length) {
return;
}
//
var mouseX = mouseY = 0;
if (!e) var e = window.event;
if (e.pageX || e.pageY) {
mouseX = e.pageX;
mouseY = e.pageY;
} else if (e.clientX || e.clientY) {
mouseX = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
mouseY = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
}
//

for (var e=0, l=EYES.stack.length; e<l; e++) {
var el = EYES.stack[e];
var elX = elY = 0;
if (el[0].offsetParent) {
obj = el[0];
do {
elX += obj.offsetLeft;
elY += obj.offsetTop;
} while (obj = obj.offsetParent);
}
el[0].centreX = elX + Math.round (el[0].offsetWidth / 2);
el[0].centreY = elY + Math.round (el[0].offsetHeight / 2);
var difX = mouseX - el[0].centreX;
var difY = mouseY - el[0].centreY;
var dTan = Math.atan2 (difX, difY);
var dist = Math.sqrt ((difX * difX) + (difY * difY));
dist = Math.sin ((dist > el[0].maxDist ? 1 : dist / el[0].maxDist));

var newX = el[1].centre + Math.round (Math.sin (dTan) * el[1].centre * dist);

var newY = el[1].centre + Math.round (Math.cos (dTan) * el[1].centre * dist);
el[1].style.margin = newY + "px 0 0 " + newX + "px";
}
};

if (window.attachEvent) document.attachEvent ("onmousemove", EYES.mousemove);
else document.addEventListener ("mousemove", EYES.mousemove, false);

