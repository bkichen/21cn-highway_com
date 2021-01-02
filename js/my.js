
$(function(){
	$('.sjwx').click(function(){
		$(this).find('img').slideToggle();
	});
	
	$(window).scroll(function() {
		ST = $(window).scrollTop();
		w_height = $(window).height();

		if (ST > 300)
		{
			$('.backTop').fadeIn(500);
			$('.backTop').click(function(){
				$('body,html').stop().animate({'scrollTop' : 0},500);
			});
		}
		else{
			$('.backTop').fadeOut(500);
		}
		
	});
	
});

