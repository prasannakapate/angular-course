module.exports = function (app) {
    app.config(['$stateProvider',
        function ($stateProvider) {
            $stateProvider
                .state('profile', {
                    url: '/profile/:id',
                    controller: 'ProfileController',
                    controllerAs: 'vm',
                    templateUrl: './app/profile/profile.html'
                });
        }
    ]);
};