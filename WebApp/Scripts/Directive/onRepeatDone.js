app.directive("onRepeatDone", ["$timeout",
    function ($timeout) {
        return {
            restrict: "A",
            require: "ngRepeat",
            link: function (scope, element, attrs) {
                if (scope.$last) {
                    $timeout(function () {
                        scope.$eval(attrs.onRepeatDone);
                    });
                }
            }
        };
    }
]);