var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer(); 
var session = require('express-session');
var cookieParser = require('cookie-parser');
var MongoClient = require('mongodb').MongoClient;

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true })); 
router.use(upload.array());
router.use(cookieParser());
//router.use(session({secret: "Your secret key"}));

var connectionString = "mongodb://localhost:27017/data";
//var connectionString = "mongodb+srv://admin:admin@test-zokjp.mongodb.net/test";

/* GET users listing. */
router.post('/register/submit', function(req, res, next) {
	  MongoClient.connect(connectionString,function(err,client){
	  var dbo = client.db("users");
	  if (!req.body.userId || !req.body.password){
	  res.status("400");
	  res.send("Please fill userid or password");	
	  }else{
	  	var existed = false;
		dbo.collection("usersData").findOne({userId : req.body.userId}, function(err,result){
			if (err) throw err;
			if (result !== null){
			res.send("error");
			}else{
			dbo.collection("usersData").insertOne(req.body,function(err,resp){
			if (err) throw err;
			else res.send("success");
			});
		}
		});
	  }
	});
});

router.post('/login/submit',function(req,res){
MongoClient.connect(connectionString,function(err,client){
	var dbo = client.db("users");
	if (!req.body.userId || !req.body.password){
	  res.status("400");
	  res.send("Please fill userid or password");	
	}else{
		dbo.collection("usersData").findOne({userId : req.body.userId},function(err,result){
			if (result === null) res.send("The user doesn't exist");
			else{
				if (result.password === req.body.password){
					res.send("success");
				}else{
					res.send("incorrect password, enter it again");
				}
			}
		});
	}
});
});
module.exports = router;
