  $(document).ready(function(){ 
		   $(window).scroll(function(){ 
		     var scroll = $(window).scrollTop();
		      if(scroll>50){
			     $("#nav-bar").css("background","skyblue");
			  }
			  else{
			    $("#nav-bar").css("background","transparent");
			  }
		   })
		})