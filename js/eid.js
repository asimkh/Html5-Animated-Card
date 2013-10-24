// JavaScript Document

  $(document).ready(function() {
	  
	  var frames = [
          "images/jug/animation0001.png",
          "images/jug/animation0002.png",
          "images/jug/animation0003.png",
          "images/jug/animation0004.png",
          "images/jug/animation0005.png",
          "images/jug/animation0006.png",
          "images/jug/animation0007.png",
          "images/jug/animation0008.png",
          "images/jug/animation0009.png",
          "images/jug/animation0010.png",
          "images/jug/animation0011.png",
          "images/jug/animation0012.png",
          "images/jug/animation0013.png",
          "images/jug/animation0014.png",
          "images/jug/animation0015.png",
          "images/jug/animation0016.png",
          "images/jug/animation0017.png",
          "images/jug/animation0018.png",
          "images/jug/animation0019.png",
          "images/jug/animation0020.png",
          "images/jug/animation0021.png",
          "images/jug/animation0022.png",
          "images/jug/animation0023.png",
          "images/jug/animation0024.png",
          "images/jug/animation0025.png",
          "images/jug/animation0026.png",
          "images/jug/animation0027.png",
          "images/jug/animation0028.png",
          "images/jug/animation0029.png",
          "images/jug/animation0030.png",
          "images/jug/animation0031.png",
          "images/jug/animation0032.png",
          "images/jug/animation0033.png",
          "images/jug/animation0034.png",
          "images/jug/animation0035.png",
          "images/jug/animation0036.png",
          "images/jug/animation0037.png",
          "images/jug/animation0038.png",
          "images/jug/animation0039.png",
          "images/jug/animation0040.png",
          "images/jug/animation0041.png",
          "images/jug/animation0042.png",
          "images/jug/animation0043.png",
          "images/jug/animation0044.png",
          "images/jug/animation0045.png",
          "images/jug/animation0046.png",
          "images/jug/animation0047.png",
          "images/jug/animation0048.png",
          "images/jug/animation0049.png",
          "images/jug/animation0050.png",
		  "images/jug/animation0051.png",
          "images/jug/animation0052.png",
          "images/jug/animation0053.png",
          "images/jug/animation0054.png",
          "images/jug/animation0055.png",
          "images/jug/animation0056.png",
          "images/jug/animation0057.png",
          "images/jug/animation0058.png",
          "images/jug/animation0059.png",
          "images/jug/animation0060.png",
          "images/jug/animation0061.png",
          "images/jug/animation0062.png",
          "images/jug/animation0063.png",
          "images/jug/animation0064.png",
          "images/jug/animation0065.png",
          "images/jug/animation0066.png",
          "images/jug/animation0067.png",
          "images/jug/animation0068.png",
          "images/jug/animation0069.png",
		  "images/jug/animation0070.png",
		  "images/jug/animation0071.png",
          "images/jug/animation0072.png",
          "images/jug/animation0073.png",
          "images/jug/animation0074.png",
          "images/jug/animation0075.png",
          "images/jug/animation0076.png",
          "images/jug/animation0077.png",
          "images/jug/animation0078.png",
          "images/jug/animation0079.png",
          "images/jug/animation0080.png",
		  "images/jug/animation0081.png",
          "images/jug/animation0082.png",
          "images/jug/animation0083.png",
          "images/jug/animation0084.png",
          "images/jug/animation0085.png",
          "images/jug/animation0086.png",
          "images/jug/animation0087.png"
        ];
	  
	  
	  $("#360frames").spritespin({
        width     : 450,
        height    : 500,
        frames    : 68,
        source    : frames,
		animate   : false,
		 behavior  : "none",
        loop      : false,
		loopFrame : 67
		
	    });
		
   var obj = 1;
   $( "#div-left" ).delay( 1200 ).fadeIn( "slow");
   $( "#div-center" ).delay( 800 ).fadeIn( "slow");
   $( "#div-right" ).delay( 2000 ).fadeIn( "slow");
   
  
   $( ".selector" ).draggable({containment:"article"});
   $( "#j" ).droppable({
			  drop: function(event, ui) {
				 
				 

				//$(ui.draggable).css( "width", "20%");
				$(ui.draggable).remove();
				  $("#txt1").fadeIn( "slow");
				  
				  if(obj==1){item1(); $("#txt1").text( (obj) + " ingredient dropped!!!")   }
				  if(obj==2){item2(); $("#txt1").text( (obj) + " ingredients dropped!!!")  }
  				  if(obj==3){item3(); $("#txt1").text( (obj) + " ingredients dropped!!!")  }
				  
				  
				  
					  if(obj==3){
						 // item3();
						  $('#j').fadeOut();
						   $('#div-right').fadeOut();
						   $('#div-left').fadeOut();
						  // $("#txt1").fadeIn();
						   
						   $("#jarbutton").fadeIn();
						   $("#txt1").fadeOut();
						   //$("#txt1").text( "click to start!!!").css("cursor","pointer");
						  
						   $("#jarbutton").click(function(){
								 $("#jtext").fadeOut();
								 shakejar();
								 $("#jarbutton").fadeOut();
								 
								 $("#txt1").delay( 3000 ).fadeIn( "slow")
								 $("#txt1").text( "Replay!!!").css("cursor","pointer").css("color","#333");
								 
										 $("#txt1").click(function(){
											 location.reload();
										 $("#txt1").delay( 500 ).fadeOut( "slow");
										 
												}); 

								 }); 
						  }
						  else
						  { $("#txt1").delay( 500 ).fadeOut( "slow");  }
	obj++;
			  }

	    });
		
		// button to start/pause the animation
  function shakejar() {
  $("#360frames").spritespin({
        width     : 450,
        height    : 500,
        frames    : 87,
     	animate   : true,
        loop      : false,
		 behavior  : "none",
		loopFrame : 86
		
	    });
  };
  
  // button to stop the animation and return to first frame
  function item1() {
	$("#360frames").spritespin({
        width     : 450,
        height    : 500,
        frames    : 68,
     	animate   : true,
		 behavior  : "none",
        loop      : false,
		loopFrame : 15
		
	    });
  };
  
  function item2() {
    $("#360frames").spritespin({
        width     : 450,
        height    : 500,
        frames    : 68,
		frame	 : 15,
     	animate   : true,
		 behavior  : "none",
        loop      : false,
		loopFrame : 25
		
	    });
  };
  
  // button jumping to next frame
 function item3(){
    $("#360frames").spritespin({
        width     : 450,
        height    : 500,
        frames    : 68,
		frame	 : 25,
     	animate   : true,
		 behavior  : "none",
        loop      : false,
		loopFrame : 34
		
	    });
  };
  
	
		
  });

	