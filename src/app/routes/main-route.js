module.exports = function (app) {
    app.config(['$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('main', {
                    url: '/main',
                    controller: 'MainController',
                    controllerAs: 'vm',
                    templateUrl: './app/main/main.html'
                });

            $urlRouterProvider.otherwise('/main');
        }
    ]);
};