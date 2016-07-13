import '../modules/home/home_css.js';
import '../modules/home/home_tpl.js';
import ctrl from '../modules/home/homeCtrl.js';

var homeModule = angular.module('homeModule', []);

homeModule.controller(ctrl.name, ctrl.fn);

export default homeModule;