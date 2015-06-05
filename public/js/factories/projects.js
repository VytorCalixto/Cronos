cronos.factory('Projects', [function() {
    var projects = [];

    return {
        all: function() {
            return projects;
        },

        get: function(key) {
            return projects[key];
        },

        push: function(project) {
            projects[projects.length] = project;
            if(!project.private) {
                // TODO: propagate to server
                console.log('To server: ');
                console.log(project);
            }
        },

        update: function(project, key) {
            projects[key] = project;
            if(!project.private) {
                // TODO: propagate to server
                console.log('To server: ');
                console.log(project);
            }
        },

        delete: function(key) {
            var project = projects[key];
            delete projects[key];
            if(!project.private) {
                // TODO: propagate to server
                console.log('To server: ');
                console.log(project);
            }
        }
    };
}]);
