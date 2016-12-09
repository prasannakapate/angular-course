'use strict';

var angular = require('angular');
var angularUiRouter = require('angular-ui-router');
var uiBootstrap = require('angular-ui-bootstrap');

var app = angular.module('app', [angularUiRouter, uiBootstrap]);

require('./main/main-service.js');
require('./routes/main-route.js')(app);
app.controller('MainController',  require('./main/main-controller.js'))
    .factory('MainService', require('./main/main-service.js'));
