'use strict';

/**
 * @ngdoc service
 * @name wongoApp.schemaParser
 * @description
 * # schemaParser
 * Service in the wongoApp.
 */
angular.module('wongoApp')
    .service('SchemaParser', function() {

        function FieldFactory() {}
        FieldFactory.create = function(opts) {
            var field;

            if (opts.type === 'string' && opts.sample.indexOf('http') >= 0) {
                return new FieldLink(opts);
            }
            if (opts.type === 'string' || opts.type === 'number') {
                return new Field(opts);
            }
            return null;
        }

        function FieldLink(opts) {
            Field.call(this, opts);
            this.text = 'Link';
            this.type = 'Link (string)';
        }
        FieldLink.prototype = Object.create(Field.prototype);
        FieldLink.prototype.read = function(sample, field) {
            var value;
            value = Object.getPrototypeOf(FieldLink.prototype).read(sample, field);
            return '<a href="' + value + '" target="_blank">' + 'Link' + '</a>';
        }

        function Field(opts) {
            this.type = opts.type;
            this.isShown = opts.isShown || true;
            this.sample = opts.sample;
            this.name = opts.name;
        }
        Field.prototype.read = function(obj, fieldName) {
            var parent,
                child,
                tmp,
                self;

            self = this;

            if (fieldName.indexOf('.') > 0) { //TODO: i should check for other points...on tmp[2] because in case...slice().join('.')
                tmp = fieldName.split('.');
                parent = tmp[0];
                child = tmp[1];
                // debugger
                return self.read(obj[parent], child);
            }
            return obj[fieldName];
        };

        function Schema() {
            this.fields = opts.fields || [];
        }
        Schema.prototype.addField = function(field) {
            this.fields.push(field);
        }
        Schema.prototype.determineVisibilityOfFields = function() {
            var numberOfVisibleFields;

            numberOfVisibleFields = 0;

            for (var i = fields.length; i--;) {
                if (numberOfVisibleFields > 6 || /id$/gi.exec(this.fields[i].name)) {
                    this.fields[i].isShown = false
                }
            }
        }

        function SchemaParser() {}
        SchemaParser.prototype._parse = function(object) {
            var schema,
                fieldNames,
                self;

            schema = {};
            self = this;

            fieldNames = Object.keys(object)
            // TODO: forEach, and new Schema and add field for each
            fieldNames.reduce(function(acc, fieldName) {
                var fieldValue,
                    fieldType,
                    field;

                fieldValue = object[fieldName];
                fieldType = typeof fieldValue;


                if (fieldType === 'string' || fieldType === 'number') {
                    field = FieldFactory.create({
                        type: fieldType,
                        sample: fieldValue,
                        name: fieldName
                    });
                    if (field) {
                        acc[fieldName] = field;
                    }
                }
                if (fieldValue && fieldType === 'object' && !Array.isArray(fieldValue)) {
                    self._enrichSchema(acc, self._parse(fieldValue), fieldName);
                }

                return acc;

            }, schema);
            // TODO: if ends with id, then hide it
            Object.keys(schema).reduce(function(acc, fieldName, index) {
                var el;

                el = acc[fieldName];
                if (index > 5) {
                    el.isShown = false;
                }
                return acc;
            }, schema);

            return schema;
        };
        SchemaParser.prototype._enrichSchema = function(schema1, schema2, fieldName1) {
            Object.keys(schema2).reduce(function(acc, fieldName2) {
                var newFieldName;

                newFieldName = fieldName1 + '.' + fieldName2;
                acc[newFieldName] = schema2[fieldName2];

                return acc;
            }, schema1);
        }
        SchemaParser.prototype.parse = function(arrayOrObject) {
            if (Array.isArray(arrayOrObject)) {
                arrayOrObject = arrayOrObject[0];
            }
            return this._parse(arrayOrObject);
        };
        return new SchemaParser();

    });