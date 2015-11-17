(function() {
  'use strict';

  angular
    .module('leEditor')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
