$(document).ready(function() {
	
	$('.show-suscribe').click(function(){
  	$('.subscribe-form').css({'bottom':'0','opacity':'1'});
  	$('#theinput').focus();
  	$("html, body").animate({ scrollTop: 0 }, "slow");
	});
	
	$('.no-thanks').click(function(){
  	$('.subscribe-form').css({'bottom':'-400px','opacity':'0'});
  	$('#theinput').val('');
	});
	$('.subscribe-form').css({'bottom':'-200px','opacity':'0'});
	if (window.isMobile){
		$('body').addClass('mobile');
	}
});