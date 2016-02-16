studentApp.config(function($routeProvider,$locationProvider){
  $routeProvider
   .when("/grades/",{
     templateUrl:"/students/grades/index"
   })
   .when("/achievement/",{
     templateUrl:"/students/achievements/index"

   });
 //   $locationProvider.html5Mode({
 //  	enabled: true,
 //  	requireBase: false
	// });
   // $locationProvider.html5Mode(true)
});
