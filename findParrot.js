

// ideal solution as per workshop

// const url = 'mongodb://localhost:27017/learnyoumongo'

// var mongo = require('mongodb').MongoClient

// 		mongo.connect(url, function(err, client) {
// 			if(err) {
// 				throw err;
// 			}
// 			var collection = client.db('learnyoumongo').collection('parrots');
// 			collection.find({
// 				age : {
// 					$gt : +process.argv[2]
// 				}
// 			}).toArray(function(err, documents) {
// 						console.log(documents)
// 						client.close()
// 				})
// 		})

// alternate solution using call back function
var MongoClient = require('mongodb').MongoClient
var age = process.argv[2]

var url = 'mongodb://localhost:27017/learnyoumongo'

var findDocuments = function(db, callback) {
    var collection = db.collection('parrots');

    collection.find({
    	age: {
	      $gt: +age
	    }
    }).toArray(function(err,docs){
        if (err) throw err;
        console.log(docs);
        callback();
    })

}

MongoClient.connect(url, function(err, client){
    if (err){
    	throw err;
    }

    findDocuments(client.db('learnyoumongo'), function(){
        client.close();
    });
})



// solution

 // npm uninstall mongodb --save

 // npm install mongodb@2.2.33 --save
