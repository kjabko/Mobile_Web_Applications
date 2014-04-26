console.log("starting....");

var xml;

$(document).ready(function(){
	$.ajax({
		type: "GET",
		url: "lolcatz.xml",
		dataType: "xml",
		success: xmlParser 
	});
});

function xmlParser(data){
	xml=data;

	$(xml).find("kitteh").each(function(){

		kitteh = $(this);
		var name = $(kitteh).find("name").text();
		var url = $(kitteh).find("url").text();
		var id = $(kitteh).find("id").text();

		$("#myList").append("<li><a href='#" + id + "'>" + name + "</a></li>")


	})

}

