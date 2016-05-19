(function(global) {
    var name = 'string-to-code';

    global.app.controller(_.camelCase(name) + 'Controller', ['storageService', 'stringToCodeService', function(storageService, stringToCodeService) {
        var stringToCode = this;

        stringToCode.text = storageService.getLocal(name, 'text') || '';
        stringToCode.result = '';

        stringToCode.options = stringToCodeService.options;
        stringToCode.selectedOption = storageService.getLocal(name, 'generator');

        stringToCode.generate = function() {
            storageService.setLocal(name, 'text', stringToCode.text);
            storageService.setLocal(name, 'generator', stringToCode.selectedOption);

            var generator = stringToCodeService[stringToCode.selectedOption];
            stringToCode.result = generator(stringToCode.text);
        };
    }]);

    registerRoute(name,
        'Convert multi-line strings to code',
        ['.net', 'c#', 'javascript', 'typescript'],
        'Convert a multi-line text to a code representation.');
})(window);
