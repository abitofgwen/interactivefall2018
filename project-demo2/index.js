//randomize button position when load window
var ranTop = 50 * Math.random() + "vw";
var ranLeft = 80 * Math.random() + "vh";
document.getElementById("win13").style.top=ranTop;
document.getElementById("win13").style.left=ranLeft;
//randomize windows, fetch each window id and assign random position.
for (var i = 1; i <= 12; i++) {
  ranTop = 40 * Math.random() + "vw";
  ranLeft = 100 * Math.random() + "vh";
  document.getElementById("win" + i).style.top=ranTop;
  document.getElementById("win" + i).style.left=ranLeft;
}
// turn on and off sticky windows
var isWindowShown = true;
function HideOrShowWindow() {
  var allWindows = document.getElementsByClassName('frame');
  for (var i = 0; i <= 11; i++) {
    if (isWindowShown) {
      allWindows[i].style.visibility = 'hidden';
    } else {
      allWindows[i].style.visibility = 'visible';
    }
  }
  if (!isWindowShown) {
    $('#b1').html('hide all windows');
  } else {
    $('#b1').html('show all windows');
  }

  isWindowShown = !isWindowShown;
}

function streetView() {
    var panoramas = [];
    panoDivs = document.getElementsByClassName('view');
    $(".view").each(function(idx, el) {
        var panorama = new google.maps.StreetViewPanorama(
          el, {
          position: {
              lat: parseFloat($(this).data("lat")),
              lng: parseFloat($(this).data("lng"))
          },
          pov: {
              heading: parseFloat($(this).data("heading")),
              pitch: 0
          },
          visible: true
          });
    panoramas.push(panorama);
  });
}
google.maps.event.addDomListener(window, "load", streetView);

// movable frame
$('.frame').mousedown(function(){
			$(".onTop").removeClass("onTop");
			$(this).addClass("onTop");
		});
$('.frame').draggable({
		handle: ".topbar"
});

		//MAXIMIZED
		//$('.maxbtn').click(function(){
		//	$(this).parent().parent().toggleClass("maximized");
		//});

		//CLOSE
		$('.xbtn').click(function(){
			$(this).parent().parent().remove();
		});
