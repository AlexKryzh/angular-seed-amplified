import '../modules/paint/paint_css.js';
import '../modules/paint/paint_tpl.js';
import ctrl from '../modules/paint/paintCtrl.js';
import drct from '../modules/paint/paintDrct.js';

var PaintModule = angular.module('PaintModule', []);

PaintModule.controller(ctrl.name, ctrl.fn);
PaintModule.directive(drct.name, drct.fn);

export default PaintModule;