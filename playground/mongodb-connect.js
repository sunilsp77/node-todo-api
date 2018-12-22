// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

//ES6 object destructuring
//we can pull out object properties
// var user = {name: 'andrew', age: 25};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) =>{
	if(err) {
		return console.log('Unable to connect to MongoDB server');		
	}
	console.log('Connected to MongoDB server');
	const db = client.db();

	// db.collection('Todos').insertOne({
	// 	text: 'Something to do',
	// 	completed: false
	// }, (err, result) => {
	// 	if(err){
	// 		console.log('Unable to insert todo, err');
	// 	}

	// 	console.log(JSON.stringify(result.ops, undefined, 2));
	// })

	//insert new doc into Users (name, age, location)
	db.collection('Users').insertOne({
		name: 'Sunil',
		age: 25,
		location: 'Vancouver, Canada'
	}, (err, result) => {
		if(err){
			return console.log('Unable to insert user, err');
		}

		console.log(JSON.stringify(result.ops, undefined, 2));
	})
	client.close();
});