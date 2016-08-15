// Declare application
var app = angular.module("app", [
    "ngRoute",
    "ngAnimate",
    "ngCookies",
    "ngSanitize",
    "ui.bootstrap",
    "ui-notification",
    "ui.select",
    "dibari.angular-ellipsis",
    'ngResource',
    "ngTable"
]);

// Application config
app.config([
    "$locationProvider", "$routeProvider", "$sceDelegateProvider", "$uibTooltipProvider", "NotificationProvider",
    function ($locationProvider, $routeProvider, $sceDelegateProvider, $uibTooltipProvider, notificationProvider) {
        $locationProvider.html5Mode(true).hashPrefix("!");

        // Tooltip default
        $uibTooltipProvider.options({
            appendToBody: true
        });

        // Whitelist url
        $sceDelegateProvider.resourceUrlWhitelist([
            "self"
        ]);

        // Moment
        moment.locale("vi");

        // List url
        $routeProvider
            .when("/", {
                templateUrl: function (params) { return "Layouts/View/Index.html"; },
                controller: "homeController",
                css: "Styles/View/Home.min.css",
                activetab: 'home',
            })
            .when("/error", {
                templateUrl: function (params) { return "Layouts/View/Error.html"; },
                caseInsensitiveMatch: true,
                controller: "errorController",
                css: "Styles/View/Error.min.css"
            })
            .when("/quan-li", {
                templateUrl: function (params) { return "Layouts/View/Management/Dashboard.html"; },
                controller: "dashboardController",
                css: "",
                activetab: 'quan-li',
            })
            .when("/danh-sach-dat-com", {
                templateUrl: function (params) { return "Layouts/View/OrderList.html"; },
                controller: "orderListController",
                css: "",
                controllerAs:"orderList",
                activetab:"ds-dat-com"
            })
             .when("/tien-gui-va-lich-su", {
                 templateUrl: function (params) { return "Layouts/View/SaveMoney.html"},
                 controller: "",
                 css: "Styles/View/SaveMoney.min.css",
                 activetab: "tien-gui"
             })
            .when("/quan-li-home", {
                templateUrl: function (params) { return "Layouts/View/Management/ManageHome.html" },
                controller: "managehomeController",
                css: "Styles/View/ManageHome.min.css",
                activetab: "ql-home"
            })
            .when("/quan-li-nguoi-dat", {
                templateUrl: function (params) { return "Layouts/View/Management/ManageOrderPerson.html" },
                controller: "manageorderpersonController",
                css: "Styles/View/ManageOrderPerson.min.css",
                activetab: "ql-nguoi-dat"
            })
            .when("/quan-li-mon-an", {
                templateUrl: function (params) { return "Layouts/View/Management/ManageDish.html" },
                controller: "managedishController",
                css: "Styles/View/ManageDish.min.css",
                activetab: "ql-mon-an"
            })
            .when("/doi-mat-khau", {
                templateUrl: function (params) { return "Layouts/View/Management/DoiMK.html" },
                controller: "doimkController",
                css: "Styles/View/DoiMK.min.css",
                activetab: "doi-mk"
            })
            .otherwise({
                redirectTo: "/error"
            });

        // Notification
        notificationProvider.setOptions({
            delay: 5000,
            startTop: 20,
            startRight: 10,
            verticalSpacing: 20,
            horizontalSpacing: 20,
            positionX: "center",
            positionY: "top"
        });
    }
]);

// Run Application
app.run(["$rootScope",
    function ($rootScope) {
    }
]);