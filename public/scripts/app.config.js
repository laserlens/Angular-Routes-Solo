angular.module('routeApp')
        .config(function ($routeProvider, $locationProvider) {
          $routeProvider.when('/burke',{
            templateUrl: 'views/burke.html'
          }).when('/gekko',{
            templateUrl: 'views/gekko.html'
          }).when('/trump',{
            templateUrl: 'views/trump.html'
          });//end of whens
          //lets us use normal looking links i.e. /home
          //to use html5mode have to use <base href="/" /> in index
          $locationProvider.html5Mode(true);
        });//end of module
