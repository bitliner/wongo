'use strict';

describe('Service: schemaParser', function () {

  // load the service's module
  beforeEach(module('wongoApp'));

  // instantiate service
  var schemaParser;
  beforeEach(inject(function (_schemaParser_) {
    schemaParser = _schemaParser_;
  }));

  it('should do something', function () {
    expect(!!schemaParser).toBe(true);
  });

});
