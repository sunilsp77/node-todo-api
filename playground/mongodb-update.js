const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) =>{
	if(err) {
		return console.log('Unable to connect to MongoDB server');		
	}
	console.log('Connected to MongoDB server');
	const db = client.db();

	db.collection('Todos').findOneAndUpdate({
		_id: new ObjectID('5c1e62de6cd3d975996f2762')
	}, {
		$set: {
			completed: false
		}
	}, {
		returnOriginal: false
	}).then((result) =>{
		console.log(result);
	});

	// client.close();
});