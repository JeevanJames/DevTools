(function (global) {
    'use strict';

    global.app = angular.module('app', ['ui.router']);

    global.app.controller('mainController', function($rootScope) {
        var main = this;

        $rootScope.$on('$stateChangeError', function(ev, toState, toParams, fromState, fromParams, options) {
            console.error(toState, toParams, fromState, fromParams, options);
        });
    });
})(window);
