var db = require('../db');
var ObjectID = require('mongodb').ObjectID;

module.exports = {
    all: function(done) {
        db.get().collection('artists').find().toArray(function(err, docs) {
            done(err, docs);
        })
    },
    findById: function(id, done) {
        db.get().collection('artists').findOne({_id: ObjectID(id)}, function(err, doc) {
            done(err, doc);
        })
    },
    create: function(artist, done) {
        db.get().collection('artists').insert(artist, function(err, result) {
            done(err, result);
        })
    },
    update: function(id, newData, done) {
        db.get().collection('artists').updateOne(
            {_id: ObjectID(id)},
            newData,
            function(err, result) {
                done(err, result);
            }
        )
    },
    delete: function(id, done) {
        db.get().collection('artists').deleteOne(
            {_id: ObjectID(id)},
            function(err, result) {
                done(err, result);
            }
        );
    }
}