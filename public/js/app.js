var cronos = angular.module('cronos', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('welcome',{
        url: '/welcome',
        templateUrl: 'public/templates/welcome.html',
        controller: 'WelcomeCtrl',
        data: {
            requireLogin: false
        }
    })
    .state('app', {
        url: '/app',
        templateUrl: 'public/templates/app.html',
        abstract: true,
        data: {
            requireLogin: true
        }
    })
    .state('app.home', {
        url: '/home',
        templateUrl: 'public/templates/home.html',
        controller: 'HomeCtrl'
    })
    .state('app.projects', {
        url: '/projects',
        templateUrl: 'public/templates/projects.html',
        controller: 'ProjectsCtrl'
    })
    .state('app.projectsDetails', {
        url: '/projects/:id',
        templateUrl: 'public/templates/projects-details.html',
        controller: 'ProjectDetailsCtrl'
    })
    .state('app.settings', {
        url: '/settings',
        templateUrl: 'public/templates/settings.html'
    });

    $urlRouterProvider.otherwise('/welcome');
}])

.run(function($rootScope, $state) {
    $rootScope.$on('$stateChangeStart', function(event, toState,toParams) {
        var requireLogin = toState.data.requireLogin;

        if(requireLogin && typeof $rootScope.currentUser === 'undefined'){
            $state.go('welcome');
        } else if(typeof $rootScope.currentUser !== 'undefined') {
            if(toState.name === 'welcome') {
                $state.go('app.home');
            }
        }
    });
});
