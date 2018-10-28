	  $(document).ready(function(){

 /*
	$("#thumbMagnifier").magnifier({ 
	    overlap: false, 
		distance: 150,
		magnification: 1.2,
		items: 'img',
		baseline: 0
	});
*/


	var height = $("#thumbMagnifier img").attr("height")


		$("#thumbMagnifier a").click(function(ev){

			if ($(this).hasClass("more") )
				return true;

			var largePath = $(this).attr("href");
			
			var caption = $(this).children().attr("alt");
			
			var startingLargePath = $("#bigImg").attr("src");
			
			if (largePath==startingLargePath)
				return false;
				
			$("#footer").hide();
				
			$("#imageWrap").addClass("loading");
			
			
			
			$("#bigImg").fadeOut('fast', function(){
				
				$("#loader").show();
				
				$("#bigImg").attr({ src: largePath, alt: caption}).load(function() {
					$("#loader").hide();
					$("#imageWrap").removeClass("loading");
					$("#bigImg").fadeIn('fast');

					$("#caption").html(caption+'').parent().show();
				}
				);
				 });
			
			
						
			
			
			
		
		

			return false;
		});

/*
		if(!($.browser.msie))
		$("#bigImg").wrap("<div class='shadow nw'><div class='shadow ne'><div class='shadow sw'><div class=' shadow se'></div</div></div</div>");
*/

		});