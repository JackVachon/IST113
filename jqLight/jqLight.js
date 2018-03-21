var switchOff = true;

$(function() {
			myClickFunction();
});

function myClickFunction() {
	$("#button").on("click", function() {
	switchOff = !switchOff;
	if (switchOff == true) {
		$("#body").on("click", function() {
		$(this).css("background-color", "black");
		$(this).css("color", "white");
		$("#lightswitch").css("float", "right");
		$("#button").text("Off");
		});
	}
	else {
		$("#body").css("background-color", "white");
		$("#body").css("color", "black");
		$("#lightswitch").css("float", "left");
		$("#button").text("On");
	}
	});
};

