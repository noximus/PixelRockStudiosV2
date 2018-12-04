angular.module('PixelRockStudios', [
  'ngRoute',
  'mobile-angular-ui',
  'PixelRockStudios.controllers.Main'
])

.config(function($routeProvider) {
  $routeProvider.when('/', {templateUrl:'home.html',  reloadOnSearch: false});
  $routeProvider.when('/portfolio', {templateUrl:'portfolio.html',  reloadOnSearch: false});
  $routeProvider.when('/project', {templateUrl:'project.html',  reloadOnSearch: false});
  $routeProvider.when('/contact', {templateUrl:'contact.html',  reloadOnSearch: false});
});
/*.config(function($stateProvider) {
  var helloState = {
    name: 'Home',
    url: '/',
    template: 'home.html'
  }

  var portfolioState = {
    name: 'portfolio',
    url: '/portfolio',
    template: '<h3>Its the UI-Router hello world app!</h3>'
  }

  $stateProvider.state(helloState);
  $stateProvider.state(portfolioState);
});*/