require("expose-loader?$!jquery");
import * as angular from "angular";
import 'angular-ui-bootstrap/dist/ui-bootstrap.js';
import 'angular-ui-bootstrap/dist/ui-bootstrap-csp.css';
import 'angular-ui-bootstrap/dist/ui-bootstrap-tpls.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-toggle/css/bootstrap-toggle.css';
import 'bootstrap-toggle/js/bootstrap-toggle.js';
import 'angular-block-ui/dist/angular-block-ui.css'
import 'angular-block-ui/dist/angular-block-ui.min.js'
import Home from './Home/Home';

const myApp = angular.module('my-app', ['ui.bootstrap','blockUI']);
myApp
    .component(Home.selector, Home.component)
    .config(['blockUIConfig',function(blockUIConfig) {

        // Change the default overlay message
        blockUIConfig.message = 'Loading!';
        // Change the default delay to 100ms before the blocking is visible
        blockUIConfig.delay = 0;

    }])
;


document.addEventListener('DOMContentLoaded', () => {
    angular.bootstrap(document.getElementById('my-app'), [myApp.name]);
}, false);
