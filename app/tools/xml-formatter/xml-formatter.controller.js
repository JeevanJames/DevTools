(function() {
    var name = 'xml-formatter';

    angular.module('app').controller(_.camelCase(name) + 'Controller', function() {
        var xmlFormatter = this;
    });

    angular.module('app').config(function($stateProvider) {
        $stateProvider.state(name, createRoute(name, 'XML Formatter', ['xml', 'formatters'],
            'Formats a XML string from the clipboard or URL, with settings for indentation. Also generates C# code to create the given XML in various frameworks like XLinq and XmlDocument'));
    });
})();
