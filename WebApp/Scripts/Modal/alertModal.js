app.factory("alertModal", ["$uibModal",
    function ($uibModal) {
        var service = new function () {
            this.show = function (o) {
                if (o === undefined || o === null)
                    o = {};
                if (o.title === undefined)
                    o.title = "";
                if (o.buttons && o.buttons.constructor !== Array)
                    throw "buttons must be array type";
                if (o.buttons === undefined)
                    o.buttons = [];
                if (o.buttons.length === 0)
                    o.buttons.push({
                        text: "Đóng",
                        style: "btn-default",
                        closeModal: true
                    });
                if (o.onClose !== undefined && typeof o.onClose !== "function") {
                    throw "onClose must be function type";
                }

                var modal = $uibModal.open({
                    animation: true,
                    keyboard: false,
                    backdrop: "static",
                    templateUrl: "/Layouts/Modal/Alert.html",
                    controller: "alertModalController",
                    windowClass: "modal-alert",
                    resolve: {
                        data: function () {
                            return o;
                        }
                    }
                });

                modal.result.then(function () {
                    if (o.onClose)
                        o.onClose();
                }, function () {
                    if (o.onClose)
                        o.onClose();
                });
            };
        };
        return service;
    }
]);

app.controller("alertModalController", ["$scope", "$uibModalInstance", "data",
    function ($scope, $uibModalInstance, data) {
        //#region [Field]

        $scope.title = data.title;
        $scope.message = data.message;
        $scope.buttons = data.buttons;

        //#endregion

        //#region [Event]

        $scope.onButtonClick = function (index) {
            var btn = $scope.buttons[index];
            if (typeof btn.onClick === "function")
                btn.onClick();
            if (btn.closeModal)
                $uibModalInstance.dismiss();
        };

        //#endregion
    }
]);