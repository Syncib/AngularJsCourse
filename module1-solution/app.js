(function () {
    "use strict";
    angular.module("LunchCheck", []).controller("LunchCheckController", lunchitems);
    lunchitems.$inject = ['$scope'];
    function lunchitems($scope) {
        $scope.dishes = "";
        $scope.dishmsg = "";
        $scope.displaymsg = function () {
            if ($scope.dishes) {
                var c = calcstring($scope.dishes);
                if (c <= 3) {
                    $scope.dishmsg = "Enjoy!"
                }
                else {
                    $scope.dishmsg = "Too Much!"
                }
            }
            else {
                $scope.dishmsg = "Please enter data first"
            }
        }
    }

    function calcstring(string) {
        var a = string.split(",");
        var b = a.length;
        return b;
    }



})();

