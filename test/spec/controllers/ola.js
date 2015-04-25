'use strict';

describe('Controller: OlaCtrl', function () {

  // load the controller's module
  beforeEach(module('wongoApp'));

  var OlaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OlaCtrl = $controller('OlaCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
