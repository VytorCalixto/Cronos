cronos.controller('WelcomeCtrl', ['$scope', '$location', '$rootScope', function ($scope, $location, $rootScope) {

    $scope.login = function(user) {
        // TODO: Validate user
        $rootScope.currentUser = user;
        $location.path('/app/home');
    };
}]);
