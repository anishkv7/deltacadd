$(function(){
	var date = new Date();

	$("#header").load("include/header.html?v=" + date.getMilliseconds() ); 
	
	$("#footer").load("include/footer.html?v=" + date.getMilliseconds() ); 
	
	$.getJSON("../data/index.json", function(data) {

		$('[type=x-tmpl-mustache]').each(function(i,val){
			var tmplId = $(val).attr('id');
			var tmpl = $(val).html();
			console.log(Mustache.to_html(tmpl, data))
			$('#' + tmplId.substring(0, tmplId.length-1) ).html(Mustache.to_html(tmpl, data));
		})

		simpleslider.getSlider({
	      container: document.getElementById('carousel'),
	      init: -100,
	      show: 0,
	      end: 100,
	      unit: '%'
	    });


	});

});


