studentApp.controller("studentControl",["$scope","$http","Flash",function($scope,$http,Flash){
  $scope.grade={}
  $scope.errors=null
  $scope.newGrade={}
        $http.get("grades")
             .then(function(response){
                $scope.grades=response.data
  })

  $scope.deleteGrade=function(data){
    $http.delete("grades/"+data.id)
         .then(function(response){
                $scope.grades=response.data
                var message = '<strong>Deleted !</strong> Your Grade is successfully Deleted.';
                Flash.create('danger', message);
              })
  }

  $scope.addGrade=function(grade){
    if (grade.id!=undefined){
      console.log(grade)
        $http.put("grades/"+grade.id,{grade})
           .then(function(response){
             $scope.grades=response.data
             var message = '<strong>Updated !</strong> Your Grade is successfully Updated.';
             Flash.create('success', message);
             $scope.newGrade={}
             $scope.errors=null
           },function(response) {
             if (response.status===404){
                $scope.errors=response.data
              }
           })

    }else {
      console.log("in save:\n "+grade)
      $http.post("grades/",{grade})
      .then(function(response){
        $scope.grades=response.data
        var message = '<strong>Saved !</strong> Your Grade is successfully Saved.';
        Flash.create('success', message);

        $scope.newGrade={}
        $scope.errors=null
      },function(response) {
        if (response.status===404){
           $scope.errors=response.data
         }
      })
    }
  }

  $scope.updateGrade=function(grade){
    // console.log(grade.id==undefined)
    grade.examdate=new Date(grade.examdate)
    $scope.newGrade=grade
  }

}]);
