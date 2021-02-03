var express = require('express');
var router = express.Router();
const uri = "mongodb+srv://fabioventurini:ciao@cluster0.zx7mf.mongodb.net/life_on_land?retryWrites=true&w=majority"
const MongoClient = require('mongodb').MongoClient;

router.get('/', function (req, res, next) {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(err => {
        const collection = client.db("life_on_land").collection("collection_3"); 
        collection.find().toArray((err, result) => {
            if (err) console.log(err.message); 
            else res.send(result);
            client.close(); 
        }); 

    });
});
router.get('/coll3', function(req, res, next){
    console.log(req.params);
    country = req.params.country;
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true});

    client.connect(err => {
        const collection = client.db("life_on_land").collection("collection_3"); 
         collection.find().limit(10).toArray((err, result) => {
            if (err) console.log(err.message); 
            else res.send(result);
            client.close(); 
        }); 

    });

})

module.exports = router;