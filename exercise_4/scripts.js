// use delay function in jquery to solve delay animation function.
//	$("#target").click(function(){
//    for (var i = 1; i <= 9; i++) {
//      var name = "#hey" + i;
//      $(name).delay(1000).startBounce(name);
//    }
//	});

function startBounce(id) {
  var element = document.getElementById(id);
  var animationName = "bounce";
  if (id == "hey7" || id == "hey8" || id == "hey9") {
    animationName = "drop";
  } else if (id == "hey4") {
    animationName = "bounceLeft";
  } else if (id == "hey6") {
    animationName = "bounceRight";
  } else if (id == "hey5") {
    animationName  = "shrink";
  }
  element.classList.remove(animationName);
  element.offsetWidth = element.offsetWidth;
  element.classList.add(animationName);
}

function startAnimation(id) {
  var name = id;
  for (var i = 1; i <= 9; i++) {
    name = "hey" + i;
    startBounce(name);
  }
}
