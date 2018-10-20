$(function(){
	// scroll effect
	pos = $('#about-me').offset().top;
	$(".scroll,.about-me").click(function(){
	    $("body,html").animate({scrollTop:pos},800);
	    return false;
	});
	
	$(".skill").click(function(){
	    $("body,html").animate({scrollTop:$('#skill').offset().top},800);
	    return false;
	});

	$(".work").click(function(){
	    $("body,html").animate({scrollTop:$('#work').offset().top},800);
	    return false;
	});

	$(".contact").click(function(){
	    $("body,html").animate({scrollTop:$('#contact').offset().top},800);
	    return false;
	});
	//end contact

})