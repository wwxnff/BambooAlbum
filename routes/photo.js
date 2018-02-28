		var express = require('express');
		var router = express.Router();
		var mongo = require('mongo');
		var MongoClient = require('mongodb').MongoClient;
		var url = 'mongodb://localhost/data';
		var session  = require('express-session');
		var bodyParser = require('body-parser');
		var multer = require('multer');
		var upload = multer(); 
		var axios = require('axios');
		var path = require('path');

		//variables for calling microsoft API
		var uriBase = "https://westcentralus.api.cognitive.microsoft.com/vision/v1.0/analyze";
		var subscriptionKey = "e59470407d82483288140d96cecb8ef0";
		
		// Store to MongoDB Atlas
//		var connectionString = "mongodb://localhost:27017/data";
		var connectionString = "mongodb+srv://admin:admin@bambooalbum-zokjp.mongodb.net/test";

		router.use(upload.array());
		router.use(bodyParser.json());
		router.use(bodyParser.urlencoded({ extended: true })); 

router.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
});

	/* GET users listing. */
	router.get('/', function(req, res, next) {
	  res.sendFile(path.join(__dirname, '../','add.html'));
	});

	router.post('/upload',function(req,res,next){
	var photoUrl = req.body.url;
	axios({
	  method: 'post',
	  url: uriBase,
	  headers: {
	        "Content-Type" : "application/json",
	        "Ocp-Apim-Subscription-Key" : subscriptionKey
	    },
	  params : {
	        "visualFeatures": "Description",
	            "details": "",
	            "language": "en"
	        },
	    data : {"url" : photoUrl}   
	})
	.then(function(response) {
	MongoClient.connect(connectionString,function(err,client){
		if (err) res.send("error");
		var dbo = client.db("userImage");
		req.body["tags"] = response.data.description.tags;
		dbo.collection(req.body.userId).insertOne(req.body,function(err,response){
		if (err) throw res.send("error");
		else res.send("success");
		client.close();			
	});
	});
	}).catch((error) => {
res.send("error");
}); 
	});

function checkAllTags(image, tags){
	for (var i=0; i < tags.length; i++){
		if(!image["tags"].includes(tags[i]))
			return false;
	}
	return true;
}

function photoFilter(images,tags) {
	var ans = [];
	for (var i = 0; i<images.length; i++)
		if(checkAllTags(images[i], tags))
			ans.push(images[i].url);
	return ans;
}

function getUrls(images) {
	var ans = [];
	for (var i = 0; i<images.length; i++)
			ans.push(images[i].url);
	return ans;
}

	router.post('/filter',function(req,res,next){
		var user = req.body.userId;
		MongoClient.connect(connectionString,function(err,client){
		if (err) throw err;
		var dbo = client.db("userImage");
		dbo.collection(req.body.userId).find({}).toArray(function(err,result){
		if (err) throw err;
		var urls = photoFilter(result,req.body.tags);
		var filterPhoto = { "urls" : urls }; 
		res.send(filterPhoto);
		client.close();
		});
	});
	});

	router.post('/all',function(req,res,next){
		var user = req.body.userId;
		MongoClient.connect(connectionString,function(err,client){
		if (err) throw err;
		var dbo = client.db("userImage");
		dbo.collection(req.body.userId).find({}).toArray(function(err,result){
		if (err) throw err;
		var urls = getUrls(result);
		var filterPhoto = { "urls" : urls }; 
		res.send(filterPhoto);
		client.close();
		});
	});
	});
	

router.post('/delete',function(req,res,next){
		MongoClient.connect(connectionString,function(err,client){
		if (err) throw err;
		var dbo = client.db("userImage");
		var myquery = { url : req.body.url };
		dbo.collection(req.body.userId).deleteOne(myquery,function(err,result){
		if (err) throw err;
		var urls = getUrls(result);
		res.send("1 document deleted");
		client.close();
		});
	});
	});



/*
	router.post('/test',function(req,res,next){
	MongoClient.connect(connectionString,function(err,client){
		if (err) res.send("error");
		console.log(err);
		console.log(client);
		var dbo = client.db("test");
		dbo.collection("please").insertOne("123",function(err,response){
		if (err) throw res.send("error");
		else res.send("success");
		client.close();			
	});
	});
});

*/
	module.exports = router;
