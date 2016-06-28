import '../modules/styleguide/styleguide_css.js';
import '../modules/styleguide/styleguide_tpl.js';
import ctrl from '../modules/styleguide/styleguideCtrl.js';

var styleguideModule = angular.module('styleguideModule', []);

styleguideModule.controller(ctrl.name, ctrl.fn);

export default styleguideModule;