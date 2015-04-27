'use strict';

describe('Controller: ConnectionCtrl', function () {

  // load the controller's module
  beforeEach(module('wongoApp'));

  var ConnectionCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ConnectionCtrl = $controller('ConnectionCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
