const assert = require('assert');
const mongoose = require('mongoose');
const User = require('../models/user');

describe('Nesting records', () => {
    beforeEach(done => {
        mongoose.connection.collections.users.drop(() => {
            done();
        });
    });

    it('Creates a User with sub-documents', done => {
        let dan = new User({
            firstName: 'Daniel',
            lastName: 'Yager',
            status: [{content: 'This is some content'}]
        });

        dan.save().then(() => {
            User.findOne({firstName: 'Daniel'}).then(record => {
                assert(record.status.length === 1);
                done();
            });
        });
    });

    it('Adds a post to User', done => {
        let dan = new User({
            firstName: 'Daniel',
            lastName: 'Yager',
            status: [{content: 'This is some content'}]
        });

        dan.save().then(() => {
            User.findOne({firstName: 'Daniel'}).then(record => {
                record.status.push({content: 'Wow he scared'});
                record.save().then(() => {
                    User.findOne({firstName: 'Daniel'}).then(record => {
                        assert(record.status.length === 2);
                        done();
                    });
                });
            });
        });
    });
});