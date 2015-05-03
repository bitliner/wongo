'use strict';

describe('Service: jsParser', function () {

  // load the service's module
  beforeEach(module('wongoApp'));

  // instantiate service
  var jsParser;
  beforeEach(inject(function (_jsParser_) {
    jsParser = _jsParser_;
  }));

  it('should do something', function () {
    expect(!!jsParser).toBe(true);
  });

});
