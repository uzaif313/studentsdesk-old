studentApp.config(function($routeProvider,$locationProvider){
  $routeProvider
   .when("/grades/",{
     templateUrl:"/students/grades/index"
   })
   .when("/achievement/",{
     templateUrl:"/students/achievements/index"

   })

});
