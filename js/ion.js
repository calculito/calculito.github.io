function hidecookies() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
//mobile menu
function mymenu() {
  var x = document.getElementById("myLinks");
  var y = document.getElementById("menumob2");
  var z = document.getElementById("menumob1");
   var w = document.getElementById("firma");
  if (x.style.display === "block") {
    x.style.display = "none";
    y.style.display = "block";
    z.style.display = "none";
    w.style.display = "block";
  } else {
    x.style.display = "block";
    y.style.display = "none";
    z.style.display = "block";
    w.style.display = "none";
  }
  
}
//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
