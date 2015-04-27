'use strict';

describe('Service: mongodbUtils', function () {

  // load the service's module
  beforeEach(module('wongoApp'));

  // instantiate service
  var mongodbUtils;
  beforeEach(inject(function (_mongodbUtils_) {
    mongodbUtils = _mongodbUtils_;
  }));

  it('should do something', function () {
    expect(!!mongodbUtils).toBe(true);
  });

});
