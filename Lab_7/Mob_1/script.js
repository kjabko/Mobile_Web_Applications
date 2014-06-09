function myController($scope) {
	$scope.jazzmen = [
						{ fname:"Pat", lname:"Martino"},
						{ fname:"Pat", lname:"Metheny"},
						{ fname:"Allan", lname:"Holdsworth"}
					];




$scope.newJazzmen = function(){

	$scope.jazzmen.push({

		fname: $scope.newJazzer.fname,
		lname: $scope.newJazzer.lname
		
		});


}

$scope.delete = function(index) {
	$scope.jazzmen.splice(index, 1)

};

}
