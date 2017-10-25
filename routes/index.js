//mongodb://testy_cidm4382:alohomor4@ds157444.mlab.com:57444/testy_cidm4382

var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();

var connectionstring = "mongodb://testy_cidm4382:alohomor4@ds157444.mlab.com:57444/testy_cidm4382";
mongoose.connect(connectionstring, { useMongoClient: true });

mongoose.Promise = global.Promise;

var studentSchema = new mongoose.Schema({
    buffID: String,
    firstName: String,
    lastName: String
});

var Student = mongoose.model('Student', studentSchema);


/* GET home page. */
router.get('/add-student', function(req, res, next) {
    var rand = new Student(
        {
            buffID:     '0123456',
            firstName:  'Random',
            lastName:   'Student'
        }
    );
    rand.save(function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log('The student is now saved in the DataBase');
        }
    });
});

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/greeting', function(req, res, next){
    res.send("Hello, I offer my greetings");
});

router.get('/greeting2', function(req, res, next){
    res.send("Hello, I offer my greetings to you once more");
});

module.exports = router;
