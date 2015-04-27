'use strict';

describe('Service: collectionResource.js', function () {

  // load the service's module
  beforeEach(module('wongoApp'));

  // instantiate service
  var collectionResource.js;
  beforeEach(inject(function (_collectionResource.js_) {
    collectionResource.js = _collectionResource.js_;
  }));

  it('should do something', function () {
    expect(!!collectionResource.js).toBe(true);
  });

});
