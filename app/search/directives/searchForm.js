'use strict';

export default () => {
    return {
        restrict: 'AE',
        scope: false,
        template: require('../views/search_form.jade')
    };
}
