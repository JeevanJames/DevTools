(function(global) {
    'use strict';

    global.app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
        $locationProvider.html5Mode(false);

        $urlRouterProvider.otherwise('/');

        $stateProvider.state('home', {
            url: '/',
            templateUrl: 'app/home/home.html',
            controller: 'homeController',
            controllerAs: 'home'
        });

        $stateProvider.state('tools', {
            url: '/tools',
            templateUrl: 'app/tools/tools.html',
            controller: 'toolsController',
            controllerAs: 'tools',
            abstract: true
        });
    });
})(window);

function registerRoute(name, title, tags, description) {
    window.app.config(['$stateProvider', function($stateProvider) {
        $stateProvider.state('tools.' + name, createRoute(name, title, tags, description));
    }]);
}

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
