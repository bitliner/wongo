'use strict';

/**
 * @ngdoc service
 * @name wongoApp.mongodbCommandParser
 * @description
 * # mongodbCommandParser
 * Service in the wongoApp.
 */
angular.module('wongoApp')
    .service('mongodbCommandParser', function() {
        function MongodbCommandParser() {}
        MongodbCommandParser.prototype._extractComponents = function(str) {
            var components;

            var escapeRegExp = function(str) {
                return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
            };

            // db.collectionName.find({a:{$in:['ola','ola']}},{a:1,b:0}).limit().sort()

            // db
            // fino al prossimo punto è collection .
            // fino a .limit o sort
            var r = [
                '^db\.',
                '([^\.]+)\.', //collectionName="fino al prossimo punto" seguito da punto
                '([^\()]+)', // op="tutto tranne fino alla prossima parentesi"
                '', // query,field is until next .limit/.sort
            ].join('');

            // r = escapeRegExp(r);
            r = new RegExp(r, 'gi');
            return r.exec(str);

        };
        MongodbCommandParser.prototype.parse = function(str) {
            var collectionName,
                op,
                query,
                fields,
                limit,
                sort;

            collectionName = str[1];
            op = str[2];
            console.log('-->', collectionName, op, query);


            // components = str.split('.');
            // collectionName = components[1];
            // query = components

        };
    });