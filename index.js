const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const operation = require('./operation');

const url = 'mongodb://localhost:27017/';
const dbname = 'conFusion';
var client1;

// async function connectMongoDb() {
MongoClient.connect(url).then((client) => {
        client1 = client;
        console.log('client1 is ' + client1);
        operDb(client1);
    })
    // }

// connectMongoDb();


async function operDb(client) {
    console.log('client = ' + client);
    const db = client.db(dbname);
    var result = await operation.insertDocument(db, { "name": "wellry2" }, 'dishes');
    console.log('insertDocument1 result = ' + JSON.stringify(result));
    result = await operation.insertDocument(db, { "name": "wellry2", description: 'this is a cloned member!' }, 'dishes');
    console.log('insertDocument2 result =' + JSON.stringify(result));
    result = await operation.findDocument(db, 'dishes');
    console.log('findDocument result = ' + JSON.stringify(result));
    result = await operation.removeDocument(db, { "name": "wellry3" }, 'dishes');
    console.log('removeDocument result = ' + JSON.stringify(result));
    result = await operation.updateDocument(db, { name: 'wellry2' }, { description: 'Update test' }, 'dishes');
    console.log('updated result = ' + JSON.stringify(result));
    result = await operation.findDocument(db, 'dishes');
    console.log('findDocument result = ' + JSON.stringify(result));
    // operation.insertDocument(db, { "name": "wellry2" }, 'dishes')
    //     .then((result) => {
    //         console.log('insertDocument1 result = ' + JSON.stringify(result));
    //         return operation.insertDocument(db, { "name": "wellry2", description: 'this is a cloned member!' }, 'dishes');
    //     }).then((result) => {
    //         console.log('insertDocument2 result =' + JSON.stringify(result));
    //         return operation.findDocument(db, 'dishes');
    //     }).then((result) => {
    //         console.log('findDocument result = ' + JSON.stringify(result));
    //         return operation.removeDocument(db, { "name": "wellry3" }, 'dishes');
    //     }).then((result) => {
    //         console.log('removeDocument result = ' + JSON.stringify(result));
    //         return operation.updateDocument(db, { name: 'wellry2' }, { description: 'Update test' }, 'dishes');
    //     }).then((result) => {
    //         console.log('updated result = ' + JSON.stringify(result));
    //         return operation.findDocument(db, 'dishes');
    //     }).then((result) => {
    //         console.log('findDocument result = ' + JSON.stringify(result));
    //         db.dropCollection('dishes', (result) => {
    //             console.log('Dropped Collection: ', JSON.stringify(result));
    //         })
    //     })
    db.dropCollection('dishes', (result) => {
        console.log('Dropped Collection: ', JSON.stringify(result));
    })
};


// MongoClient.connect(url, (err, client) => {
//     assert.equal(err, null);

//     console.log('Connected correctly to server');

//     const db = client.db(dbname);
//     const collection = db.collection('dishes');

//     // collection.insertOne({
//     //     "name": "Wellry",
//     //     "description": "test desc"
//     // }, (err, result) => {
//     //     assert.equal(err, null);

//     //     console.log('After insert:\n');
//     //     console.log(result.ops);

//     //     collection.find({}).toArray((err, docs) => {
//     //         assert.equal(err, null);
//     //         console.log('Found:\n');
//     //         console.log(docs);
//     //     })

//     //     db.dropCollection('dishes', (err, result) => {
//     //         assert.equal(err, null);
//     //         client.close();
//     //     })
//     // });

//     insertDB(collection);
//     collection.find({}).toArray((err, docs) => {
//         assert.equal(err, null);
//         console.log('Found:\n');
//         console.log(docs);
//     })

//     db.dropCollection('dishes', (err, result) => {
//         assert.equal(err, null);
//         client.close();
//     })
// })

// async function insertDB(collection) {
//     var insertResult = await collection.insertOne({
//         "name": "Wellry",
//         "description": "test desc"
//     }).catch((err) => {
//         console.log("insert fail");
//     });

//     console.log(JSON.stringify(insertResult));
// }