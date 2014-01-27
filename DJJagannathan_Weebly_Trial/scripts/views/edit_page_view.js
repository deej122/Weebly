//View for the Page
Weeblys.WeeblysView = Ember.View.extend({
	didInsertElement: function() {

	$("#gridSwitch").click(function(){
 	$("#gridSwitch").toggleClass("switchedOn");
 	$("#gridSwitch").toggleClass("switchedOff");
	});

	$("#delete").hover(function(){
	$("#pageControl").toggleClass("removePage");
	$("#edit").toggleClass("invisible");
	});

  	$(function() {
    	$( ".resizableImage" ).resizable({
    		maxWidth: 1100,
    		minWidth: 300,
    		maxHeight: 500,
    		minHeight: 250
    	});
  	}); 
  	$(function() {
    	$( ".resizableTitle" ).resizable({
    		maxWidth: 510,
    		minWidth: 207,
    		maxHeight: 70,
    		minHeight: 37
    	});
  	}); 
  	$(function() {
    	$( ".resizableText" ).resizable({
    		maxWidth: 1100,
    		minWidth: 500,
    		minHeight: 100
    	});
  	});   	  	

  $(function() {
    $( "#addTitle" ).draggable({revert: "invalid"});
    $( ".droppableTitle" ).droppable({
      drop: function( event, ui ) {
      	$("<h3 class='title resizableTitle'/>").html("Add Title Here").appendTo("#titleContent");
      	 $( ".resizableTitle" ).resizable({
    		minWidth: 207,
    		maxHeight: 70,
    		minHeight: 37
    	});
      	$("h3.title").addClass("after");      	 
      	$("#addTitle").draggable({revert:true});      	 
      }
    });    
  });	

  $(function() {
    $( "#addText" ).draggable({revert: "invalid"});
    $( ".droppableText" ).droppable({
      drop: function( event, ui ) {
      	$("<textarea class='body after' rows='200' cols='50'/>").html("Start Typing Here").appendTo("#bodyContent");
      	 $( ".resizableTitle" ).resizable({
    		maxWidth: 1100,
    		minWidth: 500,
    		minHeight: 100
    	});
      	$("span.body").addClass("after");
      	$("#addText").draggable({ revert:true});  
      }
    });    
  });

  $(function() {
    $( "#addImage" ).draggable({revert: "invalid"});
    $( ".droppableImage" ).droppable({
      drop: function( event, ui ) {
       	$("<span class='image resizableImage new'/>").html("<img id='picture' src='assets/sprites/image-Placeholder.png'/><br><p id='upload'>ADD IMAGE +</p>").appendTo("#imageContent");
      	 $( ".resizableImage" ).resizable({
    		maxWidth: 1100,
    		minWidth: 300,
    		maxHeight: 500,
    		minHeight: 250
    	});
      	$("span.image").addClass("after2");
      	$("html").add(".image.image").css("display", "inline-block"); 
      	$("#addImage").draggable({ revert:true});
      }
    });    
  });

  $(function() {
    $( "#addNav" ).draggable({revert: "invalid"});
    $( ".droppableNav" ).droppable({
      drop: function( event, ui ) {
      	$("#addNav").draggable({ revert:true});    	
      }
    });    
  }); 

/*$('#picture').click(function() {
  $('#fileUpload').click();
});

	function readURL(input) {
      if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
        $('#picture').attr('src', e.target.result);
      }

      reader.readAsDataURL(input.files[0]);
    	}
  	}

  		$("#fileUpload").change(function(){
  		readURL(this);
	});
*/
	}

});

//View for Editing Page Title(s)
Weeblys.EditPageView = Ember.TextField.extend({
	didInsertElement: function () {
		this.$().focus();
	}
});

Ember.Handlebars.helper('edit-pages', Weeblys.EditPageView);




