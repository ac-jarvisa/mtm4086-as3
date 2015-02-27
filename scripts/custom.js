		$(document).ready(function() {

			 
			
		$('pre code').each(function(i, block) {
   		 hljs.highlightBlock(block);

   		 

  		});

		$("code").mCustomScrollbar({
					axis:"x",
					theme:"minimal-dark",
					autoExpandScrollbar:true,
					advanced:{autoExpandHorizontalScroll:true}
				});
  		  
		

		$("body").mCustomScrollbar({
					
					mouseWheel:{scrollAmount:170},
					theme:"rounded-dots-dark",
					scrollbarPosition:"inside",
					autoExpandScrollbar:true,
					snapAmount:0,
					snapOffset:20
				});
  		  
		});