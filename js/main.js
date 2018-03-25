$(function(){
	var date = new Date();

	$("#header").load("include/header.html?v=" + date.getMilliseconds() ); 
	
	$("#footer").load("include/footer.html?v=" + date.getMilliseconds() ); 
	
	$.getJSON("../data/index.json", function(data) {
		var carousel = $('#carouselT').html();
  		$('#myslider').html(Mustache.to_html(carousel, data));

  		var featurelist = $('#featurelistT').html();
  		$('.featurelist').html(Mustache.to_html(featurelist, data));

  		var clients = $('#clientsT').html();
  		$('.clients').html(Mustache.to_html(clients, data));

  		var testimonials = $('#testimonialsT').html();
  		$('.testimonials').html(Mustache.to_html(testimonials, data));

  		var products = $('#productsT').html();
  		$('.products').html(Mustache.to_html(products, data));


  		simpleslider.getSlider({
	      container: document.getElementById('myslider'),
	      init: -100,
	      show: 0,
	      end: 100,
	      unit: '%'
	    });



	});

});


