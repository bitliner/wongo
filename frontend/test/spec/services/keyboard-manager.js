'use strict';

describe('Service: keyboardManager', function () {

  // load the service's module
  beforeEach(module('wongoApp'));

  // instantiate service
  var keyboardManager;
  beforeEach(inject(function (_keyboardManager_) {
    keyboardManager = _keyboardManager_;
  }));

  it('should do something', function () {
    expect(!!keyboardManager).toBe(true);
  });

});
