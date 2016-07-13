import angular from 'angular';

// angular modules
import constants     from './settings/constants';
import onConfig      from './settings/config';
import onRun          from './settings/run';
import 'angular-sanitize';
import 'angular-cookies';
import 'angular-ui-router';
import 'angular-dynamic-locale';
import 'angular-translate';
import 'angular-translate-loader-static-files';
import 'angular-translate-storage-local';
import 'angular-translate-storage-cookie';
import 'angular-translate-handler-log';
import 'oclazyload';
import './app_tpl';
import './filters';
import './controllers';
import './services';
import './directives';

if (constants.mocks === true) {
    require ('./mocks');
}

// create and bootstrap application
const requires = [
    'ngSanitize',
    'ngCookies',
    'tmh.dynamicLocale',
    'ui.router',
    'pascalprecht.translate',
    'app.templates',
    'app.filters',
    'app.controllers',
    'app.services',
    'app.directives',
    'oc.lazyLoad'
];

//activate mocks
if (constants.mocks === true) {
    requires.push('app.mocks');
}

// mount on window for testing
window.app = angular.module('app', requires);

angular.module('app').constant('AppSettings', constants);

angular.module('app').config(onConfig);

angular.module('app').run(onRun);

angular.bootstrap(document, ['app'], {
    strictDi: true
});