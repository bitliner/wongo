'use strict';

describe('Service: queryEditorView', function () {

  // load the service's module
  beforeEach(module('wongoApp'));

  // instantiate service
  var queryEditorView;
  beforeEach(inject(function (_queryEditorView_) {
    queryEditorView = _queryEditorView_;
  }));

  it('should do something', function () {
    expect(!!queryEditorView).toBe(true);
  });

});
