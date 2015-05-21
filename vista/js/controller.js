angular.module("CustomDirective")
.controller("ReposController", function($scope, $http){
  $scope.repos =[];

  $http.get("http://api.github.com/users/urielhdz/repos")
  .success(function(data){
    for (var i = data.length - 1;  i >= 1; i--) {
      var repo =  data[i];
      $scope.repos.push(repo.name);
    };
  })
  .error(function(err){

  });
  $scope.optionSelected = function(data){
    $scope.$apply(function(){
      $scope.main_repo = data;
    })
  }
})

.controller("RepoController", function($scope, $http){
  $scope.repos ={};

  $http.get("http://api.github.com/repos/twitter/" +$routeParams.name)
  .success(function(data){
      $scope.repo= data;
  })
  .error(function(err){

  });

});




