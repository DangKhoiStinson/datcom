app.directive("head", [
    "$rootScope", "$compile",
    function ($rootScope, $compile) {
        return {
            restrict: "E",
            link: function (scope, element) {
                var html = "<link type='text/css' rel='stylesheet' ng-repeat='(routeCtrl, cssUrl) in routeStyles' ng-href='{{cssUrl}}' />";
                element.append($compile(html)(scope));

                scope.routeStyles = {};
                $rootScope.$on("$routeChangeStart", function (e, next, current) {
                    if (current && current.$$route && current.$$route.css) {
                        if (!angular.isArray(current.$$route.css))
                            current.$$route.css = [current.$$route.css];
                        angular.forEach(current.$$route.css, function (sheet) {
                            delete scope.routeStyles[sheet];
                        });
                    }
                    if (next && next.$$route && next.$$route.css) {
                        if (!angular.isArray(next.$$route.css))
                            next.$$route.css = [next.$$route.css];
                        angular.forEach(next.$$route.css, function (sheet) {
                            scope.routeStyles[sheet] = sheet;
                        });
                    }
                });
            }
        };
    }
]);