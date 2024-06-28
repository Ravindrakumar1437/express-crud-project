var express = require('express');
var router = express.Router();
var userModel = require('../Models/users');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
//add start
router.get('/add', function(req, res, next){
  res.render('add');
});
router.post('/add', function(req, res, next) {
  var bodydata = {
    uname: req.body.txt1,
    umobile: req.body.txt2,
    uemail: req.body.txt3,
    upassword: req.body.txt4
  }
  var mydata = userModel(bodydata);
  mydata.save(req.body)
  .then(data => {
    res.send("Record Added");
  })
 .catch(err => console.log("Error in Query" + err));
});

//dissplay start
router.get('/display', function(req, res, next){
  userModel.find()
  .then(data=>{
    console.log(data);
    res.render('display',{mydata:data});
  })
  .catch(err=>console.log("Error"+err));
});
//display end

//show start
router.get('/show/:id', function (req, res, next){
  var myid = req.params.id;
  userModel.findById(myid)
  .then(data=>{
    res.render('show',{mydata:data});
  })
  .catch(err=>console.log("Error"+err))
});
//show end
//delete start
router.get('/delete/:id', function(req, res, next){
  var myid = req.params.id;
  userModel.findByIdAndDelete(myid)
  .then(data=>{
    res.redirect('/display');
})
.catch(err=>console.log("Error"+err))
});
//delete end 
//Edit start
router.get('/edit/:id', function(req, res, next){
  var myid = req.params.id;
  userModel.findById(myid)
    .then(data=>{
        res.render('edit',{mydata:data})
        })
    .catch(err=>console.log("Error"+err))
});
router.post('/update/:id', function(req, res, next){
  var myid = req.params.id;
  var mydata={
    uname:req.body.txt1,
    umobile:req.body.txt2,
    uemail:req.body.txt3,
  }
  userModel.findByIdAndUpdate(myid,mydata)
  .then(data=>{
    res.redirect('/display')
  })
    .catch(err=>console.log("Error"+err))
});

//Edit end

router.get('/index', function(req, res, next){
  res.render('index', { title: 'Express'});
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Express' });
});

router.get('/contact', function(req, res, next){
  res.render('contact',{title : 'Express'});
});

router.post('/process', function(req, res, next) {
  //console.log(req.body)
  var a = parseInt(req.body.txt1);
  var b = parseInt(req.body.txt2);
  var c = a = b;
  res.render('ans',{mya:a,myb:b,myc:c})
});

module.exports = router;
