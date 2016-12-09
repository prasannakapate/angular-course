
module.exports = function () {
    MainController.$inject = ['$log', '$window', 'MainService'];
    function MainController($log, $window, MainService) {
        var vm = this; 
        vm.msg = 'Hello controller';
        $log.log('test');
        $log.log($window.location);
        MainService.getUsers().then(function(data) {
            $log.log(data);
        }, function (data) {
            $log.log(data);
        });
    }
}();