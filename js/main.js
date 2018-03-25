$(function(){
	var date = new Date();

	$("#header").load("include/header.html?v=" + date.getMilliseconds() ); 
	

	$.getJSON("../data/index.json", function(data) {
		var carousel = $('#carouselT').html();
  		$('#myslider').html(Mustache.to_html(carousel, data));

  		var featurelist = $('#featurelistT').html();
  		$('.featurelist').html(Mustache.to_html(featurelist, data));

  		simpleslider.getSlider({
	      container: document.getElementById('myslider'),
	      init: -100,
	      show: 0,
	      end: 100,
	      unit: '%'
	    });



	});

});


