$(document).ready(function(){

var listItems = [];
var complete = [];

// Add a new To-Do item and reset the value of input
$("#add").on("click", function(){
	if ($("input").val().length > 0) {
		$(".list-group").append(
			'<div class="list-item"><li class="list-group-item list-group-item-danger">' + $("input").val() + '</li><button class="btn btn-danger list-button">Incomplete</button></div>'
		);

		// Add item to listItems
		var item = $("input").val(); 
		listItems.push(item);

		// Store listItems as a string in web storage

		$("input").val("");

		console.log(listItems);

	} else {
		alert("Please enter a To-Do item!");
	}
});

// Bind "Enter" key to submit the value of "input"
$( "input" ).keypress(function(event) {
	if(event.which == 13) {
		if ($("input").val().length > 0) {
		$(".list-group").append(
			'<div class="list-item"><li class="list-group-item list-group-item-danger">' + $("input").val() + '</li><button class="btn btn-danger list-button">Incomplete</button></div>'
		); 

		// add item to listItems
		var item = $("input").val(); 
		listItems.push(item);

		// Store listItems as a string in web storage
		
		$("input").val("");

		console.log(listItems);

		} else {
			alert("Please enter a To-Do item!");
		}
	}
});

// Change status of "Incomplete" To-Do items to "Complete"
$("body").on("click", ".btn-danger", function(){
	$(this).removeClass('btn-danger').addClass('btn-success').text("Complete");
	$(this).parent().children('.list-group-item-danger').removeClass('list-group-item-danger').addClass('list-group-item-success').css("text-decoration", "line-through");
});

// Change status of "Complete" items back to "Incomplete"
$("body").on("click", ".btn-success", function(){
	$(this).removeClass('btn-success').addClass('btn-danger').text("Incomplete");
	$(this).parent().children('.list-group-item-success').removeClass('list-group-item-success').addClass('list-group-item-danger').css("text-decoration", "none");
});

// Delete all completed items from list (after confirmation)
$("#delete").on("click", function(){
	alert("button works");
});
});

