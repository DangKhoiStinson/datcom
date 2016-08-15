app.controller("dashboardController", ["$scope", function ($scope) {
    $scope.formsubmit = function () {
         $.ajax({
            url: "/api/ThanhVien",
            type: "GET",
            success: function (result) {           
                x = JSON.parse(result.Data)
                var k = 0;
                for (var i = 0; i < x.length; i++) {
                    if (x[i].matkhau == $("#mk").val()) {
                        window.location = "/quan-li-home";
                        alert("Đăng Nhập thành công");
                        k = k + 1;
                    }
                }
                if (k == 0) {
                    alert("Mật khẩu sai. Vui lòng nhập lại");
                    window.location = "/quan-li";
                }               
            }
         });
    }
}]);

