
function testDom() {

  $("#buttonElement").on("click", function() {
    
    let contentValue = $("#taskInput").val();

    $newElem = $("<li></li>").text(contentValue);

    $newElem.on("click", function() {
      this.remove();
    });
	
	$("#RunningTasks").append($newElem);
	
	var DeleteButton = $('<button>',
	{
		text: "End Task",
		click: function () {
			$newElem.remove();
		}
	});
	
	($newElem).append(DeleteButton);
	
	$("#RunningTasks").append($newElem); 
  });
} 
testDom();