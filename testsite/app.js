(function () {
    "use strict";
    angular.module("myapp", []).controller("mycontroller", function ($scope, $filter) {
        $scope.name = "saqib"
        $scope.cvalue = 0;
        var upcase = $filter("uppercase");
        $scope.displaynumeric = function () {
            var uname = upcase($scope.name);
            $scope.name = uname;
        }

    })

})();