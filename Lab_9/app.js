var albumsApp = angular.module('albumsApp', []);

albumsApp.factory('albumsFactory', function($http){
	return{
		getAlbumsAsync: function(callback){
			$http.get('albums.json').success(callback);
		},
	};
});

albumsApp.controller('albumController', function($scope, albumsFactory){
    albumsFactory.getAlbumsAsync(function(results){
    	console.log('albumController async returned value');
    	$scope.albums = results.albums;
    });
	
});