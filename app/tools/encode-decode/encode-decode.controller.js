(function(global) {
    'use strict';

    var name = 'encode-decode';

    global.app.controller(_.camelCase(name) + 'Controller', [function() {

    }]);

    registerRoute(name,
        'Encode / Decode',
        ['encode/decode'],
        'Performs various types of encoding and decoding operations such as base64, URL, HTML, etc.');
})(window);
