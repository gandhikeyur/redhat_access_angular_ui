'use strict';

export default () => {
    return {
        template: require('../views/recommendations.jade'),
        restrict: 'A',
        link: function postLink(scope, element, attrs) {}
    };
}
