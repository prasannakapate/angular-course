'use strict';
require('./main');
require('./profile');
let angular = require('angular');
let angularUiRouter = require('angular-ui-router');
let uiBootstrap = require('angular-ui-bootstrap');

let app = angular.module('app', [angularUiRouter, uiBootstrap]);

require('./main/main-route.js')(app);
require('./profile/profile-route.js')(app);
app.controller('MainController',  require('./main/main-controller.js'))
    .controller('ProfileController',  require('./profile/profile-controller.js'))
    .factory('MainService', require('./main/main-service.js'))
    .factory('ProfileService', require('./profile/profile-service.js'));
