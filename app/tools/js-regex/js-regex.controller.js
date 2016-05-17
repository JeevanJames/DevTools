(function(global) {
    'use strict';

    var name = 'js-regex';

    global.app.controller(_.camelCase(name) + 'Controller', function() {
        var jsRegex = this;
    });

    registerRoute(name,
            'JavaScript RegEx Tester',
            ['javascript', 'typescript', 'regex'],
            'Validate and test regular expressions using the browser\'s regex engine. Also generates the JavaScript or Typescript code for executing the regex.');
})(window);
