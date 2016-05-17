(function(global) {
    'use strict';

    var name = 'xml-formatter';

    global.app.controller(_.camelCase(name) + 'Controller', function() {
        var xmlFormatter = this;
    });

    global.app.config(function($stateProvider) {
        var route = createRoute(name,
            'XML Formatter',
            ['xml', 'formatters'],
            'Formats a XML string from the clipboard or URL, with settings for indentation. Also generates C# code to create the given XML in various frameworks like XLinq and XmlDocument');
        $stateProvider.state(name, route);
    });
})(window);
