(function(global) {
    'use strict';

    global.app.controller('homeController', function($state) {
        var home = this;

        var states = $state.get();

        home.tags = getTags();
        home.tools = getTools();
        home.tag = undefined;

        home.onTagChanged = function(tag) {
            home.tag = tag;
            home.tools = getTools(tag);
        };

        function getTags() {
            var allTags = _.reduce(states, function(acc, state) {
                if (state.tool && state.tool.tags) {
                    return acc.concat(state.tool.tags);
                }
                return acc;
            }, []);
            return _.sortBy(_.uniq(allTags), function(t) { return t; });
        }

        function getTools(tag) {
            var lowerTag = tag ? tag.toLowerCase() : undefined;

            var states = $state.get();

            var tools = {};
            for (var i = 0; i < states.length; i++) {
                if (!states[i].tool) {
                    continue;
                }
                if (!lowerTag || states[i].tool.tags.indexOf(lowerTag) >= 0) {
                    tools[states[i].name] = states[i].tool;
                }
            }
            return tools;
        };
    });
})(window);
