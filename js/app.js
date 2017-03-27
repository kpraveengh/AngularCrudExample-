var myApp = angular.module("myApp", []);
myApp.controller("crudController", function ($scope) {
	console.log("Angular started");
	$scope.newUser ={};
	$scope.users=[
	{ name:"praveen", email:"praveen@gmail.com", mobile:"9989684875"},
	{ name:"Charan", email:"charan@gmail.com", mobile:"9989684875"},
	{ name:"Kiran", email:"kiran@gmail.com", mobile:"9989684875"}
	];

	$scope.saveUser=function(){
		$scope.users.push($scope.newUser);
		$scope.newUser={};
	};
	$scope.selectUser=function(user){
		console.log(user);
		$scope.clickedUser=user;
	};
	$scope.updateUser=function(){
		console.log(user);
	};
	$scope.deleteUser=function(){
		$scope.users.splice($scope.users.indexOf($scope.clickedUser),1);
	};
});