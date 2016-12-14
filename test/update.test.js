const Update = require('../src/update');

describe('Update', () => {

    it('updates documents', () => {
        return Update.update({ 'address.zipcode': '10462' }, { isTylerApproved: true })
            .then(result => {
                expect(result).to.be.ok;
            });
    });

});