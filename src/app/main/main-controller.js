'use strict';
/* @ngInject */
function MainController($log, $window, MainService, $state) {
    var vm = this;
    vm.msg = 'Hello controller';
    vm.githubUsers;
    MainService.getUsers().then(function (data) {
        vm.githubUsers = data;
    }, function (data) {
        $log.log(data);
    });
    vm.callProfile = function(id) {
        $state.go('profile', {id: id});
    };
}

module.exports = MainController;