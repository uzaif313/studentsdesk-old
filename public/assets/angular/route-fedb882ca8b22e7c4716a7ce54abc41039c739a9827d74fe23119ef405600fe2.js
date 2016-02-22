studentApp.config(function($routeProvider,$locationProvider){
  $routeProvider
   .when("/grades/",{
     templateUrl:"/grades/index"
   })
   .when("/achievement/",{
     templateUrl:"/achievements/index"

   });
 //   $locationProvider.html5Mode({
 //  	enabled: true,
 //  	requireBase: false
	// });
   // $locationProvider.html5Mode(true)
});
