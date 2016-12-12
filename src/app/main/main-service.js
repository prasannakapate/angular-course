'use strict';
// @ngInject
function MainService($http, $q) {
    return {
        getUsers: getUsers
    };

    function getUsers() {
        var deferred = $q.defer();
        $http.get('https://api.github.com/users?since=135').success(function (data) {
            deferred.resolve(data);
        })
        .error(function (data) {
            deferred.rejet(data);
        });
        return deferred.promise;
    }
}

module.exports = MainService;
