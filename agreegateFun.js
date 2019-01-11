const url = 'mongodb://localhost:27017/learnyoumongo'
var mongo = require('mongodb').MongoClient

mongo.connect(url, function(err, client) {
	if(err) {
		throw err;
	}
	var collection = client.db('learnyoumongo').collection('prices');
		collection.aggregate([
	  			{ $match: { size: process.argv[2] }}
	  		 ,{ $group: {_id: 1, avg: {$avg: '$price'} } }
			]).toArray(function(err, average) {
				if(err) {
					throw err;
				}
			console.log(parseFloat(average[0].avg).toFixed(2));
			client.close();
		})
})
