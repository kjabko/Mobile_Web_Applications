
/*
* Author: Krzysztof Jablonski

* Assignment: WE3.1 Mobile Web Applications, Digital Skills Academy

* Student ID: D13126785

* Date : 2014/05/08



Code reuse

Ref:


In my JSON file I have created data for six guitarists but due to slow process of gathering data for arrays I have crated only tracks and info for two 
artists Pat Metheny and Mike Stern, then I used this data for every other artist. So some musicians have not their own pices appended 
to them. 
*/

//jquery function tells the browser to load script once the DOM is ready
$(document).ready(function(){ 
    //loads JSON-encoded data from the server (here local from file "guitarists.json") using a GET HTTP request
            $.getJSON("guitarists.json", function(data){    
                //loop used for smooth iteration over objects and arrays in json file
                $.each(data, function(key, value){
            //storing values from json file in variables so they can be called later
            var array0 = value.music[0];
            var array1 = value.music[1];
            var array2 = value.music[2];
            var array3 = value.music[3];
            var array4 = value.music[4];

            var valuesForArray0 = array0.number+' '+array0.track+' | '+array0.album+' | '+array0.date+' | '+array0.time; 
            var valuesForArray1 = array1.number+' '+array1.track+' | '+array1.album+' | '+array1.date+' | '+array1.time;
            var valuesForArray2 = array2.number+' '+array2.track+' | '+array2.album+' | '+array2.date+' | '+array2.time;
            var valuesForArray3 = array3.number+' '+array3.track+' | '+array3.album+' | '+array3.date+' | '+array3.time;
            var valuesForArray4 = array4.number+' '+array4.track+' | '+array4.album+' | '+array4.date+' | '+array4.time;

            //these two variables meant to be empty and only get value from json when appropriate link is clicked,  
            //this behaviour supposed to be controlled by conditional statement, I couldn't get conditionals working to update
            //variables when different link is clicked
            // ... please read below for more explanation 
            var popUpLink = array0.number;
            var youtubeUrl = array0.url;


            // variable containing pop up functionality with iframe displaying youtube video, the two variables mentioned above are used in here
            //when a particular link is clicked a set of videos matching cryteria should be pulled and appended (for example when link first
            //is clicked, suitable videos pointed in json are pulled for and appended to every first link in each artist). The problem is
            //that videos are pulled and appended but I can get only one link working with video poping up, it is always the first artist on top
            //Multiple popups works fine when links are hard coded but they seem to crash when appended through script. I tried to hard code iframe 
            //but then they don't popup but appear between appended links, dialog boxes gave me even more headache). After spending too
            //many hours trying to solve this problem I realized that I'm falling behind with other work so had to give up 
            //although I wanted to try some other things that could work. Any advice on how to append videos to links so they pop up
            //would be very appreciated. 

            //at the moment all videos are appended to every first link under each artist, it is hard coded this way, 
            //but only first link for first artist works
            var videoPopup =  '<div data-role="popup" id="'+popUpLink+'"><div data-role="header"><h1>'+value.first_name+' '+value.last_name+'</h1></div><div class="video-container" data-role="content" data-overlay-theme="e" data-theme="c" data-tolerance="15,15" class="ui-content">'+
                            '<iframe type="text/html" width="640" height="390" src="http://www.youtube.com/embed/'+youtubeUrl+'?enablejsapi=1" frameborder="0"></iframe>'+
                            '</div></div>';

                                                    
            //variable containing links with guitarists names and pictures to be appended to main menu in sliding panel on front page, 
            //when a link is clicked it takes user to other, also appended, page with more links to this artist's music
            
            var createsSlidingPanelMenuLinks = '<li><a href="#'+value.id+'" data-transition="flip">'+value.first_name+' '+value.last_name+'<img src="'+value.image+'""></a></li>';
            
            //variable storing new dynamically appended pages with links to music of each artists, variables created before are called here 
            //they get updated for new value from json when a one of the guitarists from main menu on front page is clicked
            var createsPagesWithLinksToVideoClips = '<div data-role="page" id="'+value.id+'"><div data-role="header" data-position="fixed">'+
                                                    '<a href="#pageone" data-transition="flip">Home</a><h1>'+
                                                    value.first_name+' '+value.last_name+'</h1></div><div data-role="content" class="linksWrapper">'+
                                                    '<ul id="links" data-role="listview" data-filter="true"><li><a href="#'+array0.number+'" data-rel="popup" data-transition="pop"><img src="'+
                                                    array0.picture+'"></img> '+valuesForArray0+'</a></li>'+
                                                    '<li><a href="#'+array1.number+'" data-rel="popup" data-position-to="window"><img src="'+array1.picture+'"></img> '+valuesForArray1+
                                                    '</a></li><li><a href="#'+array2.number+'" data-rel="popup" data-position-to="window"><img src="'+array2.picture+'"></img> '+valuesForArray2+
                                                    '</a></li><li><a href="#'+array3.number+'" data-rel="popup" data-position-to="window"><img src="'+array3.picture+'"></img> '+valuesForArray3+
                                                    '</a></li><li><a href="#'+array4.number+'" data-rel="popup" data-position-to="window"><img src="'+array4.picture+'"></img> '+valuesForArray4+
                                                    '</a></li></ul>'+videoPopup+'</div><div data-role="footer" data-position="fixed"></div></div>';
        
            
            //jquery functions used to append variables above to the page
            //I used trigger and listview functions to fix my links as per JQM documentation
            $("#frontMenuLinks").append( createsSlidingPanelMenuLinks ).trigger("create").listview("refresh");  

            
            $("#linksPages").append( createsPagesWithLinksToVideoClips ).trigger("create");

            

        
        });

    });


});

