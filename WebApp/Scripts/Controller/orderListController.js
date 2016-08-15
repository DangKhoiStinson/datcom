app.controller("orderListController", ["$scope", "NgTableParams",
    function ($scope, NgTableParams) {
        //#region [Field]

        //#endregion

        //#region [Event]

        $scope.$on("$viewContentLoaded", function () {
        });
        var data = [{ 'time': '08-08-2016', 'person': 'Phong', 'food': 'cơm gà', 'price': 25000 },
            { 'time': '08-08-2016', 'person': 'nam', 'food': 'cơm bò', 'price': 25000 },
            { 'time': '09-08-2016', 'person': 'sơn', 'food': 'cơm súc xích', 'price': 25000 },
            { 'time': '10-08-2016', 'person': 'Tuấn', 'food': 'cơm heo', 'price': 25000 },
            { 'time': '07-08-2016', 'person': 'Lực', 'food': 'Mì xào', 'price': 25000 },
            { 'time': '06-08-2016', 'person': 'long', 'food': 'cơm hải sản', 'price': 25000 },
            { 'time': '04-08-2016', 'person': 'Khánh', 'food': 'bún bò', 'price': 25000 },
            { 'time': '10-08-2016', 'person': 'Hoàng', 'food': 'cá lóc', 'price': 25000 },
            { 'time': '10-08-2016', 'person': 'Tuấn', 'food': 'cơm canh chua', 'price': 25000 },
            { 'time': '13-08-2016', 'person': 'Tuấn', 'food': 'cơm heo quay', 'price': 25000 },
            { 'time': '12-08-2016', 'person': 'Tuấn', 'food': 'cơm gà luộc', 'price': 25000 },
            { 'time': '10-08-2016', 'person': 'Tuấn', 'food': 'cơm ba rói', 'price': 25000 },
        ]
        $scope.tableUsers = new NgTableParams({}, { dataset: data })
        //#endregion
    }
]);