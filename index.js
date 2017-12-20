
var onClick = function (e) {
var $el = e.target;

$el.style.backgroundColor = 'yellow';
setTimeout(function(){
    $el.style.backgroundColor = '';
}, 1000)

alert('CLICK!');
}

document.body.onclick = onClick;
box1.onclick = onClick;
box2.onclick = onClick;
box3.onclick = onClick;


var $a = document.getElementById("box3");
$a.addEventListener("click", stopping);
function stopping(e) {
    alert("stopPropagation препятствует продвижению события дальше, но на текущем элементе все обработчики отработают")
    e.stopPropagation();
}
// stopPropagation препятствует продвижению события дальше, но на текущем элементе все обработчики отработают.

var prevDef = document.querySelectorAll("div#boxa1, div#boxa2, div#boxa3");
console.log(prevDef);
for (var e = 0; e < prevDef.length; e++) {
    prevDef[e].addEventListener("click", myPrefDef)
}
function myPrefDef(e){
    console.log("bla");
    e.preventDefault();
};

var a = document.getElementById("contents")
a.addEventListener("click", foo);
function foo(e) {
    e.preventDefault();
    alert("event.PreventDefault() - для відміни дій брайзера")
}