(function() {
    var name = 'js-regex';

    angular.module('app').controller(_.camelCase(name) + 'Controller', function() {
        var jsRegex = this;
    });

    angular.module('app').config(function($stateProvider) {
        $stateProvider.state(name, createRoute(name, 'JavaScript RegEx Tester', ['javascript', 'typescript', 'regex'],
            'Validate and test regular expressions using the browser\'s regex engine. Also generates the JavaScript or Typescript code for executing the regex.'));
    });
})();
