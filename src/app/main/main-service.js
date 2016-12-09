module.exports = function () {
    MainService.$inject = ['$http', '$q'];

    function MainService($http, $q) {
        return {
            getUsers: getUsers
        };

        function getUsers() {
            var deferred = $q.defer();
            $http.get('https://api.github.com/users').success(function (data) {
                deferred.resolve(data);
            })
            .error(function (data) {
                deferred.rejet(data);
            });
            return deferred.promise;
        }
    }
}();