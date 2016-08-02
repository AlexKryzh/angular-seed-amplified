describe('E2E: Routes', function() {

    it('should have a working home route', function() {
        browser.get('/');
        expect(browser.getLocationAbsUrl()).toMatch('/');
    });

    it('should open Properties page', function() {
        element(by.css('#navbar a[ui-sref="items"]')).click();
        expect(browser.getLocationAbsUrl()).toMatch('/items');
    });

    it('should open Style Guide page', function() {
        element(by.css('#navbar a[ui-sref="styleguide"]')).click();
        expect(browser.getLocationAbsUrl()).toMatch('/styleguide');
    });

});