$(function(){
	var date = new Date();

	$("#header").load("include/header.html?v=" + date.getMilliseconds() ); 
});

simpleslider.getSlider({
      container: document.getElementById('myslider'),
      init: -100,
      show: 0,
      end: 100,
      unit: '%'
    });