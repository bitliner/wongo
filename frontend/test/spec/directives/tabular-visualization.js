'use strict';

describe('Directive: tabularVisualization', function () {

  // load the directive's module
  beforeEach(module('wongoApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<tabular-visualization></tabular-visualization>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the tabularVisualization directive');
  }));
});
