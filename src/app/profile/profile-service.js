'use strict';
// @ngInject
function ProfileService($timeout, $http, $q){
    return {
        getProfile: getProfile
    };
    function getProfile (id) {
        var deferred = $q.defer();
        var config = {
            url: 'https://api.github.com/users/' + id + '?since=135',
            method: 'GET'
        };
        $http(config).success(function(data) {
            deferred.resolve(data);
        })
        .error(function(data) {
            deferred.reject(data);
        });
        return deferred.promise;
    }
}
module.exports = ProfileService;