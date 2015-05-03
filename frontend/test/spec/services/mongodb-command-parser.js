'use strict';

describe('Service: mongodbCommandParser', function () {

  // load the service's module
  beforeEach(module('wongoApp'));

  // instantiate service
  var mongodbCommandParser;
  beforeEach(inject(function (_mongodbCommandParser_) {
    mongodbCommandParser = _mongodbCommandParser_;
  }));

  it('should do something', function () {
    expect(!!mongodbCommandParser).toBe(true);
  });

});
