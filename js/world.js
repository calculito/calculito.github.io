 var mother = document.getElementById("container");
 var where = document.getElementById("dots");
 var what = document.getElementById("title1");
 var whitebg = document.getElementById("whitebg");
 var titleseite = document.getElementById("titleseite");
 var arrowleft = document.getElementById("arrowleft");
 var a1 = document.getElementById("a1");


document.addEventListener('click', printMousePos, true);
function printMousePos(e){
cursorX = e.pageX-17;
cursorY = e.pageY-17;
 where.style.display = "flex";
 where.style.visibility = "visible";
where.style.position = "fixed";
where.style.left = cursorX+"px";
 where.style.top = cursorY + "px";

 var time = setTimeout(function () { 
where.style.height = "55px";
where.style.width = "55px";
  where.style.border = "3px solid whitesmoke";
 }, 200);

 time = setTimeout(function(){ 
where.style.height = "65px";
where.style.width = "65px";
where.style.border = "4px solid whitesmoke";
 }, 400);

 time = setTimeout(function(){ 
where.style.height = "75px";
 where.style.width = "75px";
 where.style.border = "1px solid whitesmoke";
 where.style.display = "none";
 }, 900);

      time = setTimeout(function(){ 
where.style.height = "35px";
 where.style.width = "35px";
}, 2000);
}


function dot(index) {
 var abild = document.getElementById(index + "bild");
 var atext = document.getElementById(index+"text");
 what.style.visibility = "hidden";
 mother.style.filter = "grayscale(90%)";

time = setTimeout(function(){ 
 what.style.visibility = "visible";
 mother.style.display = "none";
 titleseite.style.display = "none";
 whitebg.style.display = "flex";
 whitebg.style.height = "0vh";
 whitebg.style.position = "absolute";
 whitebg.style.bottom = "85px";
 whitebg.style.left = "160px";
 arrowleft.style.display = "flex";
}, 900);

   time = setTimeout(function(){ 
    whitebg.style.height = "40vh";
    a1.style.display = "flex";
   }, 1000);
    time = setTimeout(function(){ 
     abild.style.position = "absolut";
     atext.style.display = "flex";
    abild.style.top = "22vw";
    }, 1700);
     time = setTimeout(function(){ 
     abild.style.position = "inherit";
}, 2000);
}