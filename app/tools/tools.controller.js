(function(global) {
    'use strict';

    global.app.controller('toolsController', ['$location', function($location) {
        var tools = this;

        tools.setUrl = function(params) {
            var queryString = '';
            for (var p in params) {
                if (params.hasOwnProperty(p)) {
                    if (queryString) {
                        queryString += '&';
                    }
                    queryString += encodeURI(p) + '=' + encodeURI(params[p]);
                }
            }
            var url = $location.protocol() + '://' + $location.host() + $location.path();
            if (queryString) {
                url += '?' + queryString;
            }
            tools.url = url;
        };
    }]);
})(window);
