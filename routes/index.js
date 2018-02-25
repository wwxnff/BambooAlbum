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
router.use(session({secret: "Bamboo Album"}));

var connectionString = "mongodb+srv://admin:admin@test-zokjp.mongodb.net/test";

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/register', function(req, res, next) {
	  res.send("register page");
	});

	router.post('/test', function(req, res, next) {
	MongoClient.connect(url,function(err,db){
	if (err) throw err;
	var dbo = db.db("mydb");
	dbo.createCollection("customers", function(err,res){
		if(err) throw err;
		console.log("collection created!");
		db.close();
	});
});
	});


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
			res.send("The username already existed");
			}else{
				dbo.collection("usersData").insertOne(req.body,function(err,resp){
					if (err) throw err;
					else res.send("Success");
				});
		}
		});
	  }
	});
});

router.get('/signup', function(req, res){
   res.render('signup');
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
					req.session.user = req.body.userId;
					res.send("You are" + req.session.user);
				}else{
					res.send("incorrect password, enter it again");
				}
			}
		});
	}
});
});

router.post('/logout',function(req,res){
	req.session.destroy(function(){
		res.send("you are logged out");
	});
});
module.exports = router;
