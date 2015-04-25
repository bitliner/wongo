'use strict';

describe('Filter: readNestedField', function () {

  // load the filter's module
  beforeEach(module('wongoApp'));

  // initialize a new instance of the filter before each test
  var readNestedField;
  beforeEach(inject(function ($filter) {
    readNestedField = $filter('readNestedField');
  }));

  it('should return the input prefixed with "readNestedField filter:"', function () {
    var text = 'angularjs';
    expect(readNestedField(text)).toBe('readNestedField filter: ' + text);
  });

});
