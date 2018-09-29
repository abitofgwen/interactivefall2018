// use delay function in jquery to solve delay animation function.
//	$("#target").click(function(){
//    for (var i = 1; i <= 9; i++) {
//      var name = "#hey" + i;
//      $(name).delay(1000).startBounce(name);
//    }
//	});


function startBounceOne(id) {
  var element = document.getElementById(id);
  var color = document.getElementById("background");
  var animationName = "bounce";
  if (id == "hey8") {
    animationName = "drop";
  } else if (id == "hey4") {
    animationName = "bounceLeft";
  } else if (id == "hey6") {
    animationName = "bounceRight";
  } else if (id == "hey5" || id == "hey1" || id == "hey3" || id == "hey7" || id == "hey9") {
    animationName  = "shrink";
  }
  element.classList.remove(animationName);
  element.offsetWidth = element.offsetWidth;
  element.classList.add(animationName);
  //Could use only one of the line below, or together.
  element.style.backgroundColor = generateColor();
  color.style.backgroundColor = generateColor();
}

function startAnimation(id) {
  var name = id;
  for (var i = 1; i <= 9; i++) {
    name = "hey" + i;
    startBounceOne(name);
  }
}

//generate color string.
function generateColor() {
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += getHex();
  }
  return color;
}

// generate random hex
function getHex() {
  var output = "";
  var num = Math.ceil(Math.random() * 15);
  if (num == 10) {
    output = "a";
  } else if (num == 11) {
    output = "b";
  } else if (num == 12) {
    output = "c"
  } else if (num == 13) {
    output = "d";
  } else if (num == 14) {
    output = "e";
  } else if (num == 15) {
    output = "f";
  }
  return output;
}
