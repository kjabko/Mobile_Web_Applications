/*var name = "car";

$(document).ready(function(){
	$("#button").click(function(){
(function(){
var flickerAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
$.getJSON(flickerAPI, {
	tags: name,
	tagmode: "any",
	format: "json",
})

.done(function(data){
	
	$.each(data.items, function(i, item) {
		$("<img>").attr("src", item.media.m).appendTo("#images");
		if (i === 6) {
		return false;
	}
	
});
});
})();

});
});
*/
//var value =$("#form").prev("form").find("input").val("text");
//alert(value);
$(document).ready(function() {

	$("#button").click(function() {
		$("#images").empty();
	
		var word = $("#form").val();
		var limit = 20;

		var flickerAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";

		$.getJSON(flickerAPI,
		{
			tags: word,
			tagmode: "any",
			format: "json"
		}, function(data) {
			$.each(data.items, function(i, item) {
				$("<img/>").attr("src", item.media.m).appendTo("#images");
				if (i === limit) {
					return false;
				}

			});
		});

		return false;	
	});

});
	/*
	




});


});

});
});

*/