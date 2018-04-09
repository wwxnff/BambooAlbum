var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer(); 
var path = require('path');
var MongoClient = require('mongodb').MongoClient;

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true })); 
router.use(upload.array());

var connectionString = "mongodb+srv://admin:admin@bambooalbum-zokjp.mongodb.net/test";
//var connectionString = "mongodb://localhost:27017/data";
/* GET users listing. */



router.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../public','index.html'));
});

router.post('/try', function(req, res) {
 res.send('You are ' + req.session.userId);
});


router.post('/register', function(req, res, next) {
	  MongoClient.connect(connectionString,function(err,client){
	  var dbo = client.db("users");
	  if (!req.body.userId || !req.body.password){
	  res.status("400");
			 res.send({info:"error"});	
	  }else{
	  	var existed = false;
		dbo.collection("usersData").findOne({userId : req.body.userId}, function(err,result){
			if (err) throw err;
			if (result !== null){
			res.send({info:"error"});
			}else{
				dbo.collection("usersData").insertOne(req.body,function(err,resp){
					if (err) throw err;
			 res.send({info:"success"});
				});
		}
		});
	  }
	});
});

router.post('/login',function(req,res){
	if (req.session.user !== undefined){

		console.log(req.session.user);
 res.send({info:"error"});
 	}else{
MongoClient.connect(connectionString,function(err,client){
	var dbo = client.db("users");
	if (!req.body.userId || !req.body.password){
	  res.status("400");
	  //res.send("Please fill userid or password");	
	  res.send({info:"error"});
	}else{
		dbo.collection("usersData").findOne({userId : req.body.userId},function(err,result){
			if (result === null) res.send("The user doesn't exist");
			else{
				if (result.password === req.body.password){
					req.session.userId = req.body.userId;
					 res.send({info:"success"});
				}else{
					console.log(1);
			 res.send({info:"error"});
				}
			}
		});
	}
});
}
});

router.post('/logout',function(req,res){
	req.session.destroy(function(){
		res.send("success");
		console.log("fine");
	});
});
module.exports = router;
