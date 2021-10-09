const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017/';
const dbname = 'conFusion';

MongoClient.connect(url, (err, client) => {
    assert.equal(err, null);

    console.log('Connected correctly to server');

    const db = client.db(dbname);
    const collection = db.collection('dishes');

    // collection.insertOne({
    //     "name": "Wellry",
    //     "description": "test desc"
    // }, (err, result) => {
    //     assert.equal(err, null);

    //     console.log('After insert:\n');
    //     console.log(result.ops);

    //     collection.find({}).toArray((err, docs) => {
    //         assert.equal(err, null);
    //         console.log('Found:\n');
    //         console.log(docs);
    //     })

    //     db.dropCollection('dishes', (err, result) => {
    //         assert.equal(err, null);
    //         client.close();
    //     })
    // });

    insertDB(collection);
    collection.find({}).toArray((err, docs) => {
        assert.equal(err, null);
        console.log('Found:\n');
        console.log(docs);
    })

    db.dropCollection('dishes', (err, result) => {
        assert.equal(err, null);
        client.close();
    })
})

async function insertDB(collection) {
    var insertResult = await collection.insertOne({
        "name": "Wellry",
        "description": "test desc"
    }).catch((err) => {
        console.log("insert fail");
    });

    console.log(JSON.stringify(insertResult));
}