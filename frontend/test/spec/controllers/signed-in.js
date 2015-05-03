'use strict';

describe('Controller: SignedInCtrl', function () {

  // load the controller's module
  beforeEach(module('wongoApp'));

  var SignedInCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SignedInCtrl = $controller('SignedInCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
