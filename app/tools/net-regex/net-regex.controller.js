(function(global) {
    'use strict';

    var name = 'net-regex';

    global.app.controller('netRegexController', [function() {

    }]);

    registerRoute(name,
        '.NET Regex Tester',
        ['.net', 'c#', 'regex'],
        'Validate and test regular expressions using the .NET regex engine. Also generates the C# code for executing the regex.')
})(window);
