const assert = require('assert');
const { Collection } = require('mongodb');

exports.insertDocument = async(db, document, collection) => {
    const coll = db.collection(collection);
    return coll.insertOne(document).catch((err) => {
            console.log('insert ' + document + ' fail, cause is ' + err);
        })
        // console.log('inserted, result = ' + JSON.stringify(insertResult));
        // callback(insertResult);
}

exports.findDocument = async(db, collection, callback) => {
    const coll = db.collection(collection);
    return coll.find({}).toArray().catch((err) => {
        console.log('find document fail, cause is ' + err);
    });
}

exports.removeDocument = async(db, document, collection, callback) => {
    const coll = db.collection(collection);
    return coll.deleteOne(document).catch((err) => {
        console.log('delete ' + document + ' fail, cause is ' + err);
    });
    // console.log('deleteResult = ' + JSON.stringify(deleteResult));
    // callback(deleteResult);
}

exports.updateDocument = async(db, document, update, collection, callback) => {
    const coll = db.collection(collection);
    return coll.updateOne(document, { $set: update }, null).catch((err) => {
        console.log('update ' + document + ' fail, cause is ' + err);
    });
    // console.log('updateResult is ' + JSON.stringify(updateResult));
    // callback(updateResult);
}