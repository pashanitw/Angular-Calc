'use strict';

/* Filters */

angular.module('calc.filters', []).
  filter('interpolate', ['version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    }
  }]);
CALC.filter('startFrom', function() {
    return function(input, idx) {
        var i=idx, len=input.length, result = [];
        for (; i<len; i++)
            result.push(input[i]);
        return result;
    };
});