angular.module('myModule', ['ngRoute']).

config(function($routeProvider){
	$routeProvider.

	when('/', {templateUrl:'pages/home.html', controller:'basicController'}).
	when('/about', {templateUrl:'pages/about.html', controller:'aboutController'}).
	when('/contact', {templateUrl:'pages/contact.html', controller:'contactController'});


});

function mainController($scope){

}


function basicController($scope){
	$scope.message = 'Everyone come and see how good I look!!!';
}

function aboutController($scope){
		$scope.message = 'Look I am an about page.';
}
function contactController($scope){
	$scope.message = 'Contact us!!! This is just a demo.';
}