$(function(){
	var date = new Date();

	$("#header").load("include/header.html?v=" + date.getMilliseconds() , function(){
		 	$('.hamburger, .topnav').on('click', function() { 
	        $('.topnav, .hamburger').toggleClass('fs');
	        //$('.hamburger').text() == "☰" ? $('.hamburger').text('✕') : $('.hamburger').text('☰');
	    });
	}); 
	
	$("#footer").load("include/footer.html?v=" + date.getMilliseconds() ); 

	var id = $("body").attr("id");
	console.log("../data/" + id + ".json");
	
	$.getJSON("../data/" + id + ".json", function(data) {

/*	$.getJSON("../data/index.json", function(data) { */

		$('[type=x-tmpl-mustache]').each(function(i,val){
			var tmplId = $(val).attr('id');
			console.log(tmplId);
			var tmpl = $(val).html();
			console.log(Mustache.to_html(tmpl, data))
			$('#' + tmplId.substring(0, tmplId.length-1) ).html(Mustache.to_html(tmpl, data));
		})

		if(id == 'index') {
			simpleslider.getSlider({
		      container: document.getElementById('carousel'),
		      init: -100,
		      show: 0,
		      end: 100,
		      unit: '%'
		    });
		}

		


	});



});


