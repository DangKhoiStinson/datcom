app.controller("homeController", ["$scope", "alertModal",
function ($scope, alertModal) {
        //#region [Field]
    $scope.isBusy = true;
        //#endregion

        //#region [Event]

        $scope.$on("$viewContentLoaded", function () {
            $.ajax({
                url: "/api/monAn",
                type: "GET",
                success: function (result) {
                    $scope.foods = JSON.parse(result.Data)
                    $scope.$apply();
                    console.log($scope.foods)
                }
            });
        });


        $scope.onShowAlert = function () {
            $scope.isBusy = true;
            alertModal.show({
                title: "Alert's Title",
                message: "Alert's message",
                buttons: [
                {
                    text: "Thoát",
                    style: "btn-default",
                    closeModal: true
                }],
                onClose: function() {
                    $scope.isBusy = false;
                }
            });
        }

    /* check active*/
        var food;
        $scope.check = false;
        $scope.isCheck = function (item) {
            $scope.check = true;
            food = item;
            $scope.isActive = function (cid) {
                if (item.id == cid) {
                    return true;
                }
                return false;
            }
            $scope.active = function (aid) {
                if (item.id == aid) {
                    return true;
                }
                return false;
            }
            
        }

    /*handle order*/
        $scope.Order = function (check) {
            if (check) {
                console.log(food)
            }
            else {
                
            }
        }
    //#endregion
    }
]);