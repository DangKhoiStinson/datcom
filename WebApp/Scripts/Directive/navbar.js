/// <reference path="C:\Users\Admin\Desktop\Project Lunch\Lunch\WebApp\Layouts/Navbar/Navbar.html" />
'use strict';

  app.directive('navbar', () => ({
      templateUrl: '/Layouts/Template/Navbar.html',
      restrict: 'E',
      controller: 'navbarController',
      controllerAs:'nav'
  }));
  app.controller("navbarController",["$scope","$route", function ($scope, $route) {
      $scope.$route = $route;
  }]);