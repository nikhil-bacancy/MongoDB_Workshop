const url = 'mongodb://localhost:27017/learnyoumongo'

var insData = {firstName : process.argv[2], lastName : process.argv[3]};

var mongo = require('mongodb').MongoClient

mongo.connect(url, function(err, client) {
	if(err) {
		throw err;
	}
	var collection = client.db('learnyoumongo').collection('docs');
			collection.insert(insData, function(err, data) {
				if(err) {
					throw err;
				}
			console.log(JSON.stringify(insData));
			client.close();
	})
})
