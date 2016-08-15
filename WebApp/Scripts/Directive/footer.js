/// <reference path="C:\Users\Admin\Desktop\Project Lunch\Lunch\WebApp\Layouts/Navbar/Navbar.html" />
'use strict';

app.directive('dfoodter', () => ({
    templateUrl: '/Layouts/Template/Footer.html',
    restrict: 'E',
    controller: 'footerController',
    controllerAs: 'footer'
}));

app.controller("footerController", function () {

});