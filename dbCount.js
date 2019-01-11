const url = 'mongodb://localhost:27017/learnyoumongo'

var mongo = require('mongodb').MongoClient

var age = process.argv[2]

mongo.connect(url, function(err, client) {
	if(err) {
		throw err;
	}
	var collection = client.db('learnyoumongo').collection('parrots');
			collection.count({age: { $gt: +age } }, function(err, noOfRecords) {
				if(err) {
					throw err;
				}
			console.log(noOfRecords);
			client.close();
	})
})
