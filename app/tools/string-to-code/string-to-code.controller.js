(function(global) {
    var name = 'string-to-code';

    var inject = [
        'storageService',
        'stringToCodeService',
        '$scope',
        '$state',
        '$location'
    ];
    var controller = function(storageService, stringToCodeService, $scope, $state, $location) {
        var stringToCode = this;

        stringToCode.text = storageService.getLocal(name, 'text') || '';
        stringToCode.result = '';

        stringToCode.indent = parseInt($location.search().indent) ||
            storageService.getLocal(name, 'indent') || 4;

        stringToCode.options = stringToCodeService.options;
        stringToCode.selectedOption = storageService.getLocal(name, 'generator');

        stringToCode.generate = function() {
            storageService.setLocal(name, 'text', stringToCode.text);
            storageService.setLocal(name, 'generator', stringToCode.selectedOption);
            storageService.setLocal(name, 'indent', stringToCode.indent);

            $scope.tools.setUrl({
                generator: stringToCode.selectedOption,
                indent: stringToCode.indent
            });

            var generator = stringToCodeService[stringToCode.selectedOption];
            stringToCode.result = generator(stringToCode.text, stringToCode.indent);
        };

        $scope.tools.setUrl();
    };

    controller.$inject = inject;

    global.app.controller(_.camelCase(name) + 'Controller', controller);

    registerRoute(name,
        'Convert multi-line strings to code',
        ['.net', 'c#', 'javascript', 'typescript'],
        'Convert a multi-line text to a code representation.');
})(window);
