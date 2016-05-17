(function () {
    'use strict';

    var app = angular.module('app', []);

    app.constant('tags', [
        ['xml', 'json', 'xpath'],
        ['c#', 'typescript', 'javascript'],
        ['regex']
    ]);

    app.constant('tools', [
        {
            name: 'xml-formatter',
            title: 'XML Formatter',
            description: 'Formats XML from the clipboard or a URL, with settings for indentation',
            tags: ['xml']
        },
        {
            name: 'json-formatter',
            title: 'JSON Formatter',
            tags: ['json']
        },
        {
            name: 'xpath-eval',
            title: 'XPath Evaluator',
            tags: ['xml', 'xpath']
        },
        {
            name: 'json-code-gen',
            title: 'JSON Code Generator',
            tags: ['json', 'c#', 'typescript']
        },
        {
            name: 'dotnet-regex',
            title: '.NET Regex Tester',
            tags: ['c#', 'regex']
        },
        {
            name: 'js-regex',
            title: 'JavaScript Regex Tester',
            tags: ['javascript', 'typescript', 'regex']
        },
    ]);

    app.controller('mainController', function(tags, tools) {
        var main = this;

        main.tags = tags;
        main.groups = getTools();
        main.tag = undefined;

        main.onTagChanged = function(tag) {
            main.tag = tag;
            main.groups = getTools(tag);
        };

        function getTools(tag) {
            var lowerTag = tag ? tag.toLowerCase() : undefined;

            var groups = [];
            var group = [];
            for (var i = 0; i < tools.length; i++) {
                tools[i].description = tools[i].description || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.';
                if (!lowerTag || tools[i].tags.indexOf(lowerTag) >= 0) {
                    group.push(tools[i]);
                }
                if (group.length === 3) {
                    groups.push(group);
                    group = [];
                }
            }
            if (group.length > 0) {
                groups.push(group);
            }
            return groups;
        };
    });
})();
