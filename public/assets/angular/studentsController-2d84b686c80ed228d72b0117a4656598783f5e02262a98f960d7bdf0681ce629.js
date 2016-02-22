teacherApp.controller("teacherController",["$scope","$http",function($scope,$http){
    $scope.id
    $scope.grades
    $scope.achievements
    $scope.isActive=false
    $scope.getDetail=function(id){
      $scope.id=id
      $scope.isActive=true
      $http.get("/teachers/grades/"+id)
           .then(function(response){
             $scope.grades=response.data
           })
           
      $http.get("/teachers/achievements/"+id)
                 .then(function(response){
                  //  console.log(response.data)
                   $scope.achievements=response.data
       })

    }



}]);
