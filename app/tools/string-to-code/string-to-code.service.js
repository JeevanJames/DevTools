(function(global) {
    'use strict';

    global.app.service('stringToCodeService', [function() {
        var svc = this;

        this.options = {
            jsConcat: {
                description: 'JavaScript string using concatenation'
            },
            jsTemplateString: {
                description: 'JavaScript multi-line template string'
            }
        };

        this.jsConcat = function(text, indent) {
            var lines = _.split(text, /\r?\n/);

            var indentStr = _.repeat(' ', indent || 0);
            var resolvedLines = _.map(lines, function(line) {
                return indentStr + "'" + _.replace(line, /'/g, "\\\'") + "' +";
            });

            return _.join(resolvedLines, '\n');
        };

        this.jsTemplateString = function(text, indent) {
            var lines = _.split(text, /\r?\n/);

            var resolvedLines = _.map(lines, function(line) {
                return _.replace(line, /(`|\$)/g, '\\$1');
            });

            return (_.repeat(' ', indent || 0)) + '`' + _.join(resolvedLines, '\n') + '`';
        };
    }]);
})(window);
