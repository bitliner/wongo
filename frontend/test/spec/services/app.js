'use strict';

describe('Service: app', function () {

  // load the service's module
  beforeEach(module('wongoApp'));

  // instantiate service
  var app;
  beforeEach(inject(function (_app_) {
    app = _app_;
  }));

  it('should do something', function () {
    expect(!!app).toBe(true);
  });

});
