app.controller("managehomeController", ["$scope", "NgTableParams",
    function ($scope,NgTableParams) {
        //#region [Field]
        //#endregion
        $scope.value = new Date();
        //#region [Event]
        $scope.$on("$viewContentLoaded", function () {
            
            $.ajax({
                url: "/api/ChotHoaDon",
                type: "GET",
                datatype:"json",
                success: function (result) {
                    var data = JSON.parse(result.Data);                   
                    $scope.tableconfirmed = new  NgTableParams({}, { dataset: data })                  
                }
            });
        });
        //#endregion
    }
]);
