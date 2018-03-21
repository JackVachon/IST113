
function testDom() {

  $("#buttonElement").on("click", function() {
    
    var contentValue = $("#taskInput").val();

    $newElem = $("<li></li>").text(contentValue);

	
	$("#RunningTasks").append($newElem);
	
	var DeleteButton = $('<button>',
	{
		text: "End Task",
		click: function () {
			this.parentNode.remove();
		}
	});
	
	($newElem).append(DeleteButton);
	
  });
} 
testDom();