(function() {
    angular.module('app').config(function($stateProvider, $urlRouterProvider, $locationProvider) {
        $locationProvider.html5Mode(false);

        $urlRouterProvider.otherwise('/');

        $stateProvider.state('home', {
            url: '/',
            templateUrl: 'app/home/home.html',
            controller: 'homeController',
            controllerAs: 'home'
        });
    });
})();

function createRoute(name, title, tags, description) {
    return {
        url: '/' + name,
        templateUrl: 'app/tools/' + name + '/' + name + '.html',
        controller: _.camelCase(name) + 'Controller',
        controllerAs: _.camelCase(name),
        tool: {
            tags: tags,
            title: title,
            description: description
        }
    };
}
