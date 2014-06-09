// Module is a container for the different parts of the app – controllers, services, filters, directives, etc.
// It one dependancy injected which is ngRoute, a module responsible for routing sub-pages
angular.module('myModule', ['ngRoute'])
	
	.config(function($routeProvider){
		
		// Used by ngRoute for configuring routes
		$routeProvider.

			// Declare URI to templates that will be send to the view by each controller
			when('/', {templateUrl:'js/partials/todo.html', controller:'basicController'}).
			when('/urgent', {templateUrl:'js/partials/urgent.html', controller:'urgentController'}).
	        when('/relax', {templateUrl:'js/partials/relax.html', controller:'relaxController'});

	});





	// Controller containes logic and items that will be sent to the view. 
	// $scope will inject an object when a controller is used
	function basicController($scope){

		// will be displayed through directive in the template
		$scope.title = 'Create ToDo list';
		
		// All data from model goes into array, it will by presented in the view
		$scope.toDo = [
						{item: 'sample data'},
						{item: 'tick to delete'}
					];

			// Takes onsubmit events binded by ng-submit and pushes (updates) into array toDo 
			$scope.newToDoList = function(){
				$scope.toDo.push({
					item: $scope.newToDo.item,
				});
				$scope.newToDo = ''
			}

		// Allowes filter and delete data
		$scope.clearCompleted = function() {
			$scope.toDo = $scope.toDo.filter(function(item){
				return !item.done
			});
		}
	};


	function urgentController($scope){
			
			$scope.title = 'Create Urgent list';
			
			$scope.toDo = [
							{item: 'sample data'},
							{item: 'tick to delete'}
						];

			$scope.newToDoList = function(){
				$scope.toDo.push({
					item: $scope.newToDo.item,
				});
				$scope.newToDo = ''
			}

			$scope.clearCompleted = function() {
				$scope.toDo = $scope.toDo.filter(function(item){
					return !item.done
				});
			}
	}

	function relaxController($scope){
		
		$scope.title = 'Create Can-Wait list';
		
		$scope.toDo = [
						{item: 'sample data'},
						{item: 'tick to delete'}
					];
			
			$scope.newToDoList = function(){
				$scope.toDo.push({
					item: $scope.newToDo.item,
				});
				$scope.newToDo = ''
			}

			$scope.clearCompleted = function() {
				$scope.toDo = $scope.toDo.filter(function(item){
					return !item.done
				});
			}
}