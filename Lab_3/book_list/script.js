console.log("script starting...");

var xml;

$(document).ready(function(){

	$.ajax({
		type: "GET",
		url: "book_list.xml",
		dataType: "xml",
		success: xmlParser
		
		});
	});


	function xmlParser(data){
		console.log("here");
		xml = data;


	$(xml).find("book").each(function(){

		var id = $(this).attr("id");
		var title = $(this).find("title").text();
		var author = $(this).find("author").text();
		var genre = $(this).find("genre").text();
		var price = $(this).find("price").text();
		var publish_date = $(this).find("publish_date").text();
		var description = $(this).find("description").text();
		var image = $(this).find("image").text();

		$("#bookes").append('<li><a href="#' + id + '">' + title + '</a></li>').trigger("create").listview("refresh");


		$("#allPages").append('<div data-role="page" id="' + id + '"><div data-role="header"><h1>' + title + '</h1></div><div data-role="content"><p>' + description + '</p><img src="' + image + '"></div><div data-role="footer"><a href = "#page1">Home</a></div></div>');
	
	});
	
	}
	

















