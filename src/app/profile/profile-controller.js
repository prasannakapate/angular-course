'use strict';
// @ngInject
function ProfileController($log, ProfileService, $stateParams) {
    var vm = this;
    vm.profileData;
    $log.log('hello github user');
    ProfileService.getProfile($stateParams.id).then(function(data) {
        vm.profileData = data;
        $log.log(data);
    }, function() {
        $log.log('profile data retrievel: failed');
    });
}

module.exports = ProfileController;
