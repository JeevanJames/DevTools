(function(global) {
    global.app.service('storageService', ['$window', function($window) {
        this.getLocal = function(prefix, key) {
            var fullKey = (prefix || '') + '_' + key;
            return angular.fromJson($window.localStorage.getItem(fullKey));
        };

        this.setLocal = function(prefix, key, value) {
            var fullKey = (prefix || '') + '_' + key
            $window.localStorage.setItem(fullKey, angular.toJson(value));
        };
    }]);
})(window);
