(function(global) {
    'use strict';

    var name = 'xml-formatter';

    global.app.controller(_.camelCase(name) + 'Controller', function() {
        var xmlFormatter = this;
    });

    registerRoute(name,
            'XML Formatter',
            ['xml', 'formatters'],
            'Formats a XML string from the clipboard or URL, with settings for indentation. Also generates C# code to create the given XML in various frameworks like XLinq and XmlDocument');
})(window);
