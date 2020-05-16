function AddOnloadEvent(f) {  //hier ist die funktion zum aufrufen mehrerer funktionen beim OnLoad
if(typeof window.onload != 'function') { window.onload = f; }
else {
   var cache = window.onload;
   window.onload = function() {
      if(cache) { cache(); }
      f();
      };
   }
}
AddOnloadEvent(loader); //hier wird die erste funktion beim OnLoad aufgerufen
//AddOnloadEvent(blackwhite); //hier wird die zweite funktion beim OnLoad aufgerufen
AddOnloadEvent(game);   //hier wird die dritte funktion beim OnLoad aufgerufen

var myVar;   //funktion für den loader
var myInterv;  
function loader() {
  myVar = setTimeout(showPage, 3000);
  blackwhite();
}
function showPage() {
  document.getElementById("loaddiv").style.display = "none";
  clearInterval(myInterv);
}
function blackwhite() {
  var x = 50;
  var y = 50;
  var z = 0;
  myInterv = setInterval(function () {
 
    //document.getElementById("load1").style.height = x - 1 + "vh";
   // x--;
    
    document.getElementById("load2").style.height = z + 1 + "vw";
    document.getElementById("load1").style.opacity = 1 - (z / 100);
    document.getElementById("load3").style.opacity = 1-(z/100);
    z++;
    
   // document.getElementById("load3").style.height = y - 1 + "vh";
    //y--;
    }
   , 20); 
  
}



function hidecookies1() {
  var x = document.getElementById("myDIV1");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
//mobile menu
function mymenu1() {
  var x = document.getElementById("myLinks1");
  var y = document.getElementById("menumob31");
  var z = document.getElementById("menu-menu1");
  var n = document.getElementById("navigaid1");
  var e = document.getElementById("titelganz1");
  var u = document.getElementById("titelmenu1");
  var u1 = document.getElementById("titelmenu2");
  var b = document.getElementById("myBtn1");
  u.style.display = "none";
  e.style.display = "block";
  u1.style.display = "none";
  e.className = "";
  if (x.style.display === "flex") {
    x.style.display = "none";
    y.style.display = "flex";
   z.style.display = "none";
  } else {
    x.style.display = "flex";
    y.style.display = "none";
    z.style.display = "flex";
     b.style.display = "none";
  }
}

function game() {
  var tg = document.getElementById("titelganz1");
  var tm1 = document.getElementById("titelmenu1");
  var tm2 = document.getElementById("titelmenu2");
  setInterval(function () {
    tg.style.display = "block";
    tg.className = "";
    tm1.style.display = "none";
    tm2.style.display = "none";
  
    setTimeout(function () {
      tg.className = "box1";
         setTimeout(function () {
    tg.style.display = "none";
    tm1.style.display = "block";
           tm2.style.display = "none";
               setTimeout(function () {
    tg.style.display = "none";
    tm1.style.display = "none";
    tm2.style.display = "block";
    }, 3000);
  }, 3000);
     }, 500);
    },8000);
}


 


function mune1() {
  var e = document.getElementById("titelganz1");
  var u = document.getElementById("titelmenu1");
    e.style.display = "none";
    u.style.display = "block";
}

//Get the button:
mybutton = document.getElementById("myBtn1");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction1()};

function scrollFunction1() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction1() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
