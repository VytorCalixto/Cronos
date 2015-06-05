cronos.controller('ProjectsCtrl', ['$scope', 'Projects', function($scope, Projects) {
    $scope.projects = Projects.all();

    $scope.new = function(project) {
        var p = {};
        p.name = project.name;
        p.private = (project.private) ? true: false;
        p.tasks = [];
        p.timeExpent = 0;
        p.timeAdded = new Date();
        Projects.push(p);
        project.name = '';
        project.private = false;
    };
}]);
