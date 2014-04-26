
$(document).ready(function(){

    $.getJSON("guitarists.json", function(data){
    	$.each(data, function(key, value){
    		
    		var array0 = value.music[0];
    		var array1 = value.music[1];
    		var array2 = value.music[2];
    		var array3 = value.music[3];
    		var array4 = value.music[4];

    		var valuesForArray0 = array0.number+' '+array0.track+' '+array0.album+' '+array0.date+' '+array0.time; 
    		var valuesForArray1 = array1.number+' '+array1.track+' '+array1.album+' '+array1.date+' '+array1.time;
    		var valuesForArray2 = array2.number+' '+array2.track+' '+array2.album+' '+array2.date+' '+array2.time;
			var valuesForArray3 = array3.number+' '+array3.track+' '+array3.album+' '+array3.date+' '+array3.time;
			var valuesForArray4 = array4.number+' '+array4.track+' '+array4.album+' '+array4.date+' '+array4.time;

			var videoPopup =  '<div data-role="popup" id="'+array0.number+'" data-overlay-theme="a" data-theme="d" data-tolerance="15,15" class="ui-content">'+
                   			'<iframe type="text/html" width="640" height="390" src="http://www.youtube.com/embed/LrHxOqMrt6M?enablejsapi=1&origin=http://example.com" frameborder="0"></iframe>'+
                    		'</div>';

			var createsSlidingPanelMenuLinks = "<li><a href='#"+value.id+"' data-transition='flip'>"+value.first_name+" "+value.last_name+"<img src='"+value.image+"'></a></li>";
			
			var createsPagesWithLinksToVideoClips = '<div data-role="page" id="'+value.id+'"><div data-role="header" data-position="fixed"><a href = "#pageone" data-transition="flip">Home</a><h1>' 
    												+value.first_name+' '+value.last_name+'</h1></div><div data-role="content" class="linksWrapper"><ul id="links" data-role="listview" data-filter="true"><li><a href="#"><img src="'
    		 										+array0.picture+'"></img> '+valuesForArray0+'</a></li><li><a href="#"><img src="'+array1.picture+'"></img> '+valuesForArray1+
													'</a></li><li><a href="#"><img src="'+array2.picture+'"></img> '+valuesForArray2+
													'</a></li><li><a href="#"><img src="'+array3.picture+'"></img> '+valuesForArray3+
													'</a></li><li><a href="#"><img src="'+array4.picture+'"></img> '+valuesForArray4+
													'</a></li></ul></div><div data-role="footer" data-position="fixed"></div></div>';
		
    		



    		$("#mainLinks").append( createsSlidingPanelMenuLinks ).trigger("create").listview("refresh");	
    		
    		$("#allPages").append( createsPagesWithLinksToVideoClips );


    	
    	});

    });


});

