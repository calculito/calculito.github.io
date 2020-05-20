function dot() {
 var where = document.getElementById("dots");
 var what = document.getElementById("title1");
what.style.visibility = "hidden";
 where.style.visibility = "visible";
 var time = setTimeout(function(){ 
where.style.height = "55px";
where.style.width = "55px";
  where.style.border = "3px solid whitesmoke";
  }, 50);
time = setTimeout(function(){ 
where.style.height = "45px";
 where.style.width = "45px";
 where.style.border = "1px solid whitesmoke";
 where.style.visibility = "hidden";
 what.style.visibility = "visible";
}, 100);

}