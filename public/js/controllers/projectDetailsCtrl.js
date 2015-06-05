cronos.controller('ProjectDetailsCtrl', ['$scope', '$stateParams', 'Projects',
function($scope, $stateParams, Projects) {
    $scope.project = Projects.get($stateParams.id);
}]);
