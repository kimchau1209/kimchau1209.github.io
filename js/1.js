$(function(){
	// scroll effect
	pos = $('#about-me').offset().top;
	$(".scroll,.about-me").click(function(){
	    $("body,html").animate({scrollTop:pos},600);
	    return false;
	});
	
	$(".skill").click(function(){
	    $("body,html").animate({scrollTop:$('#skill').offset().top},600);
	    return false;
	});

	$(".work").click(function(){
	    $("body,html").animate({scrollTop:$('#work').offset().top},600);
	    return false;
	});

	$(".contact").click(function(){
	    $("body,html").animate({scrollTop:$('#contact').offset().top},600);
	    return false;
	});
	$(".home").click(function(){
	    $("body,html").animate({scrollTop:0},600);
	   	$( "a" ).removeClass( "active" );
	   	$("a.home").addClass("active");
	    return false;
	});
	//end scroll

	$(".nav-item").click(function(){
	    $( "a" ).removeClass( "active" );
	    $(this).addClass("active");
	});

	//wow effect
	new WOW().init();



})