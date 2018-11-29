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
		$('.maxbtn').click(function(){
			$(this).parent().parent().toggleClass("maximized");
		});

		//CLOSE
		$('.xbtn').click(function(){
			$(this).parent().parent().remove();
		});
