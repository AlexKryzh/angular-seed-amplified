import angular from 'angular';
import 'angular-mocks';
import constants     from './../settings/constants';

const bulk = require('bulk-require');
const mocksModule = angular.module('app.mocks', ['ngMockE2E']);
const mocks = bulk(__dirname, ['./**/!(*index|*.spec).js']);

function declare(mockMap) {
    Object.keys(mockMap).forEach((key) => {
        let item = mockMap[key];

        if (!item) {
            return;
        }

        if (item && typeof item === 'function') {
            mocksModule.run(item);
        } else {
            declare(item);
        }
    });
}

declare(mocks);

export default mocksModule;