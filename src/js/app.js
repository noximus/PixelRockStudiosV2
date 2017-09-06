angular.module('PixelRockStudios', [
  'ngRoute',
  'mobile-angular-ui',
  'PixelRockStudios.controllers.Main'
])

.config(function($routeProvider) {
  $routeProvider.when('/', {templateUrl:'home.html',  reloadOnSearch: false});
});