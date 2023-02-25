

$(function(){

    $("#phone").mask("7(999) 999-9999");
  });


  $(document).ready(function() {

	$('.header__bureger').click(function(event) {
        $('.header__bureger,.header__content-info,.navigation').toggleClass('active');
		
		$('body').toggleClass('lock');
	});
    
});
    