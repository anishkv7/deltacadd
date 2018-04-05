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

	$('body').on('click', "#sales_button,#request_button,#support_button", function(){
		$(this).toggleClass('active');
		openModal();

	})
	
	$("#footer").load("include/footer.html?v=" + date.getMilliseconds()); 

	var id = $("body").attr("id");
	



	
	$.getJSON("../data/" + id + ".json?rnd="+Math.random(), function(data) {

/*	$.getJSON("../data/index.json", function(data) { */

		$('[type=x-tmpl-mustache]').each(function(i,val){
			var tmplId = $(val).attr('id');
			var tmpl = $(val).html();
			$('#' + tmplId.substring(0, tmplId.length-1) ).html(Mustache.to_html(tmpl, data));
			if($('[type=x-tmpl-mustache]').length -1 == i) {
				$('.loader').fadeOut();
			}
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

	$(document).on('click', '.close', function() {
		$('.modal').toggle();
	})
	$(document).on('click', '.requestmodal', function() {
		openModal();
	})


});

function openModal() {
	var tmpl = $('#modalC').html();
	$('.modal .container' ).html(Mustache.to_html(tmpl, ''));
	$('.modal').toggle();
}

function postData() {
	var prp = "";
	$('#sendinginfo').toggle();
	if($('body').attr('id') == 'contact') {
		prp = "&Purpose="
		switch ($('.contactbutton.active').attr('id')){
			case "sales_button":
				prp += "Sales";
				break;
			case "request_button":
				prp += "Request Demo";
				break;	
			case "support_button":
				prp += "Support";
				break;	
		}
		$('.contactbutton.active').toggleClass("active");
	}
	var url = " https://script.google.com/macros/s/AKfycbxMs_yf2IW5DGsPZ232HJixWjJCVO-vcEo2YSzgXdqyHqCde00/exec";
	url += "?Name=" + $("#fname").val() + "&Phone=" + $("#phonenumber").val() + (prp != "" ? prp : "")
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

