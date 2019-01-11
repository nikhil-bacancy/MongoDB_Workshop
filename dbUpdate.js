const url = 'mongodb://localhost:27017/learnyoumongo'

var mongo = require('mongodb').MongoClient


mongo.connect(url, function(err, client) {
	if(err) {
		throw err;
	}
	var collection = client.db(process.argv[2]).collection('users');
			collection.update({username: "tinatime" },{$set:{age:40}},function(err, data) {
				if(err) {
					throw err;
				}

			client.close();
	})
})
