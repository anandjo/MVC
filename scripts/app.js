var myapp = angular.module('myapp', ['ngRoute']);
myapp.config(function($routeProvider){
    $routeProvider.when('/',{
            controller: "homeController",
            templateUrl: "views/home.html"
    });
    
    $routeProvider.when('/about-us',{
            controller: "aboutUsController",
            templateUrl: "views/about_us.html"
    });
    
    $routeProvider.when('/news',{
            controller: "newsController",
            templateUrl: "views/news.html"
    });
    
    $routeProvider.otherwise({
            redirectTo: "/"
    });
});