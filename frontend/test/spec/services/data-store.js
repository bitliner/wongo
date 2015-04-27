'use strict';

describe('Service: dataStore', function () {

  // load the service's module
  beforeEach(module('wongoApp'));

  // instantiate service
  var dataStore;
  beforeEach(inject(function (_dataStore_) {
    dataStore = _dataStore_;
  }));

  it('should do something', function () {
    expect(!!dataStore).toBe(true);
  });

});
