import '../modules/items/items_css.js';
import '../modules/items/items_tpl.js';
import ctrl from '../modules/items/itemsCtrl.js';

var ItemsModule = angular.module('ItemsModule', []);

ItemsModule.controller(ctrl.name, ctrl.fn);

export default ItemsModule;