 var i = 0;
		$('#category').click(function(){	
			i++;
			var src = $("#category span:eq(1)");
		    if(i%2 == 0){
		    	
		    	 src.removeClass('glyphicon-menu-right');
		    	 src.addClass('glyphicon-menu-down');
		    	 
		    }else{
		    	
		    	src.removeClass('glyphicon-menu-down');
		    	src.addClass('glyphicon-menu-right');		    	
		    } 
});