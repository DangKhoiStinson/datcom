app.controller("managedishController", ["$scope", "NgTableParams",
    function ($scope, NgTableParams) {
        //#region [Field]

        //#endregion
        //#region [Event]
        $scope.$on("$viewContentLoaded", function () {

            $.ajax({
                url: "/api/monAn",
                type: "GET",
                datatype: "json",
                success: function (result) {
                    var data = JSON.parse(result.Data);
                    console.log(data)
                    $scope.tabledish = new NgTableParams({}, { dataset: data })
                }
            });
        });
        //#endregion
    }
]);