'use strict';

describe('Service: cancellami', function () {

  // load the service's module
  beforeEach(module('wongoApp'));

  // instantiate service
  var cancellami;
  beforeEach(inject(function (_cancellami_) {
    cancellami = _cancellami_;
  }));

  it('should do something', function () {
    expect(!!cancellami).toBe(true);
  });

});
