browser.get('/');

describe('E2E: Translations', function() {

    it('Should translate page to Spanish', function() {
        element(by.css('#languages .es_es')).click();
        expect(element(by.css('#languages #languages-label a strong')).getText()).toEqual('Idioma:');
    });

    it('Should translate page to English', function() {
        element(by.css('#languages .en_us')).click();
        expect(element(by.css('#languages #languages-label a strong')).getText()).toEqual('Language:');
    });

});