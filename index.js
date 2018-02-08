imgchar = "centerimg"
var newheight = 100
var posy = 0;
var posx = 0;

document.getElementById("avatar1").addEventListener("click", function() {

	document.getElementById(imgchar).src="img/ava1.png"
});
document.getElementById("avatar2").addEventListener("click", function() {

	document.getElementById(imgchar).src="img/ava2.png"
});

document.getElementById('menubutton').addEventListener("click", function() {
	document.getElementById('menu').style.right = "0px"
});

document.getElementById('plus').addEventListener("click", function() {
	newheight++
	document.getElementById(imgchar).style.height = (newheight + "%");
});

document.getElementById('minus').addEventListener("click", function() {
	newheight--
	document.getElementById(imgchar).style.height = (newheight + "%");
});

document.getElementById("upB").addEventListener("click", function() {
    posy += 7;
    document.getElementById("center").style.bottom = posy + "px";
});
document.getElementById("downB").addEventListener("click", function() {
    posy -= 7;
    document.getElementById("center").style.bottom = posy + "px";
});
document.getElementById("leftB").addEventListener("click", function() {
    posx -= 7;
    document.getElementById("center").style.left = posx + "px";
});

document.getElementById("rightB").addEventListener("click", function() {
    posx += 7;
    document.getElementById("center").style.left = posx + "px";
});

document.getElementById("centerimg").addEventListener("click", function() {
    document.getElementById("leftB").style.display = "none";
    document.getElementById("rightB").style.display = "none";
    document.getElementById("upB").style.display = "none";
    document.getElementById("downB").style.display = "none";
    document.getElementById("avatar1").style.display = "none";
    document.getElementById("avatar2").style.display = "none";
    document.getElementById("plus").style.display = "none";
    document.getElementById("minus").style.display = "none";
});

document.getElementById("header").addEventListener("click", function() {
    document.getElementById("avatar1").style.display = "inline-block";
    document.getElementById("avatar2").style.display = "inline-block";
    document.getElementById("plus").style.display = "inline-block";
    document.getElementById("minus").style.display = "inline-block";
    document.getElementById("leftB").style.display = "block";
    document.getElementById("rightB").style.display = "block";
    document.getElementById("upB").style.display = "block";
    document.getElementById("downB").style.display = "block";
    
});

document.getElementById("hatbut").addEventListener("click", function() {
    document.getElementById("hat").style.display = "block";
});
document.getElementById("shirtbut").addEventListener("click", function() {
    document.getElementById("shirt").style.display = "block";
});
document.getElementById("bowbut").addEventListener("click", function() {
    document.getElementById("bow").style.display = "block";
});