'use strict';
browser.get('/');

describe('E2E: Translations', function() {

    it('Should translate page to Spanish', function() {
        element(by.css('#translate-language .es_es')).click();
        expect(element(by.css('#translate-language label')).getText()).toEqual('Idioma');
    });

    it('Should translate page to English', function() {
        element(by.css('#translate-language .en_us')).click();
        expect(element(by.css('#translate-language label')).getText()).toEqual('Language');
    });

});