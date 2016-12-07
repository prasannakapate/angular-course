'use strict';

var angular = require('angular');
var angularUiRouter = require('angular-ui-router');
var uiBootstrap = require('angular-ui-bootstrap');
var app = angular.module('app', [angularUiRouter, uiBootstrap]);
import html from './src/app/main/main.html';

var mainHtml = require('/main/main.html');

app.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
        $stateProvider
			.state('main', {
    url: '/main'
    //templateUrl: './src/app/main/main.html'
});

        $urlRouterProvider.otherwise('/main');
    }
]);