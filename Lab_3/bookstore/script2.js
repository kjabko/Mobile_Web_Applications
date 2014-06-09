console.log("starting....");

$(document).ready(function(){
$.ajax({
	type: "GET",
	url: "bookstoreDoc.xml",
	dataType: "xml",
	success: function(data){
		$(data).find("book").each(function(){
			var title = $(this).attr("title");
			
		
			$("#books").append("<li>" + title + "</li>")

		});
	$(data).find("userComment").each(function(){
		var comment = $(this).attr("comment");

		$("#books").append("<li>" + comment + "</li>")
	});

	},
	error: function(){
		$("#books").text("Failed to get feed");
		
	}

});
});