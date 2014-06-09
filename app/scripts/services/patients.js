'use strict';

angular.module("patientServices", [])
    .factory('Patients', ['$http', function($http) {
        return {
            get: function(callback) {
                return $http.get('mocks/patients.json').success(function(data) {
                    // prepare data here
                    console.log(data)
                    callback(data);
                });
            }
        }
    }
]);