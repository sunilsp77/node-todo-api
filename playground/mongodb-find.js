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

	db.collection('Todos').find({completed: false}).toArray().then((docs) => {
		console.log('Todos');
		console.log(JSON.stringify(docs, undefined, 2));
	}, (err)=> {
		console.log('Unable to fetch todos', err);
	})

	client.close();
});