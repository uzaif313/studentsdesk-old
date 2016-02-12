studentApp.controller("achievementController",["$scope","$http","Flash",function($scope,$http,Flash){

    $scope.newAchievement={}
    $scope.achievements={}
    $scope.errors=null
    $http.get("students/achievements")
         .then(function(response){
            console.log(response.data)
            $scope.achievements=response.data
    })
    $scope.addAchievement=function(achievement){
      if (achievement.id!=undefined) {

          $http.put("students/achievements/"+achievement.id,{achievement})
               .then(function(response){
                 console.log(response.data)
                 $scope.achievements=response.data
                 var message = '<strong>Updated !</strong> Your Achievement is successfully Updated.';
                 Flash.create('success', message);

                 $scope.newAchievement={}
                 $scope.errors=null
           },function(response) {
             if (response.status===404){
                $scope.errors=response.data
              }
           })

      } else {

          $http.post("students/achievements/",{achievement})
          .then(function(response){
            $scope.achievements=response.data
            var message = '<strong>Saved !</strong> Your Achievement is successfully Saved.';
            Flash.create('success', message);

            $scope.newAchievement={}
            $scope.errors=null
          },function(response) {
            if (response.status===404){
               $scope.errors=response.data
             }
          })
      }

    }

    $scope.deleteAchievement=function(achievement){
      $http.delete("students/achievements/"+achievement.id)
            .then(function(response){
              $scope.achievements=response.data
              var message = '<strong>Deleted !</strong> Your Deleted is successfully Deleted.';
              Flash.create('danger', message);
        })
    }

    $scope.updateAchievement=function(achievement){
      achievement.achievment_date=new Date(achievement.achievment_date)
      $scope.newAchievement=achievement
    }

}]);
