(function(global) {
    'use strict';

    global.app.service('stringToCodeService', [function() {
        var svc = this;

        this.options = {
            jsConcat: {
                description: 'Javascript string using concatenation'
            }
        };

        this.jsConcat = function(text) {
            var lines = _.split(text, /\r?\n/);

            var resolvedLines = _.map(lines, function(line) {
                return "'" + _.replace(line, /'/g, "\\\'") + "' +";
            });

            return _.join(resolvedLines, '\n');
        };
    }]);
})(window);
