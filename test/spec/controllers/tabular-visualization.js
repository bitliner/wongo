'use strict';

describe('Controller: TabularVisualizationCtrl', function () {

  // load the controller's module
  beforeEach(module('wongoApp'));

  var TabularVisualizationCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TabularVisualizationCtrl = $controller('TabularVisualizationCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
