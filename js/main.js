$(function(){
	var date = new Date();

	$("#header").load("include/header.html?v=" + date.getMilliseconds() , function(){
		 	$('.hamburger').on('click', function() { 
		        $('.topnav, .hamburger').toggleClass('fs');
		        $(".wrapper").toggleClass("menupadding");
		       
		    });

		    $(".dropbtn").on('click',function(){
		    	$("#submenu").toggle();

		    });
	}); 
	
	$("#footer").load("include/footer.html?v=" + date.getMilliseconds()); 

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

	$(document).on('click', '.close, .requestmodal', function() {
		$('.modal').toggle();
	})



});

function postData() {
	$('#sendinginfo').toggle();
	var url = " https://script.google.com/macros/s/AKfycbxMs_yf2IW5DGsPZ232HJixWjJCVO-vcEo2YSzgXdqyHqCde00/exec";
	url += "?Name=" + $("#fname").val() + "&Phone=" + $("#phonenumber").val()
    $.get(url, function(data, status){
   //     alert("Data: " + data + "\nStatus: " + status);
   		if($("#contactform").hasClass("modal-content")){
   			
   			$('.container').html('<h3>Thank you for your interest. We will get back to you soon!</h3>');
   		}else{

   			$("#message").html('<h3>Thank you for your interest. We will get back to you soon!</h3>');
   			$('#sendinginfo').toggle();
   			$("#contactform")[0].reset();
   			setTimeout(function(){ $("#message").html('') }, 4000);
   		}

    });
    return false;
}

