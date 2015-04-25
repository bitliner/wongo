'use strict';

describe('Service: schemaEditorView', function () {

  // load the service's module
  beforeEach(module('wongoApp'));

  // instantiate service
  var schemaEditorView;
  beforeEach(inject(function (_schemaEditorView_) {
    schemaEditorView = _schemaEditorView_;
  }));

  it('should do something', function () {
    expect(!!schemaEditorView).toBe(true);
  });

});
