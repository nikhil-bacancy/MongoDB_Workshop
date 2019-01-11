const url = 'mongodb://localhost:27017/learnyoumongo'

var mongo = require('mongodb').MongoClient


mongo.connect(url, function(err, client) {
	if(err) {
		throw err;
	}
	var collection = client.db(process.argv[2]).collection(process.argv[3]);
			collection.remove({_id: process.argv[4] },function(err, data) {
				if(err) {
					throw err;
				}

			client.close();
	})
})
