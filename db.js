var MongoClient = require('mongodb').MongoClient;

var state = {
    db: null
}


module.exports = {
    connect: function(url, db, done) {
        if (state.db) {
            return done();
        }
    
        MongoClient.connect(url, function(err, database) {
            if (err) {
                return done(err);
            }
            state.db = database.db(db);
            done();
        })
    },
    get: function() {
        return state.db;
    }

}

// exports.connect = function(url, db, done) {
//     if (state.db) {
//         return done();
//     }

//     MongoClient.connect(url, function(err, database) {
//         if (err) {
//             return done(err);
//         }
//         state.db = database.db(db);
//         done();
//     })
// }

// exports.get = function() {
//     return state.db;
// }