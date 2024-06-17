var express = require('express');
var router = express.Router();

var userModel = require('../connect/Contactuser');

// var User = require("../connect/userRegister")

/* GET home page. */
router.get('/', async function(req, res, next) {
  
  res.render('index');
});

router.get('/register',function(req, res, next) {
  res.render('register');
});


router.get('/register-user',function(req, res, next) {
  res.render('registerUser');
});

// router.post('/register-user', async function(req, res, next) {
//   const {name,username1, email1, password } = req.body;
//   await User.register({name, username, email}, password);

//   res.send("user registered")
// });

router.post('/register', async function(req, res, next) {
  const user = await userModel.create({
    contactname:req.body.contactusername,
    contact:req.body.contact,
    contactemail:req.body.contactemail,
    address:req.body.address,
  })
  res.redirect('/contact')
});


router.get('/contact',async function(req, res, next) {
  const allUser = await userModel.find();
  res.render('allContact', {allUser});
});

router.get('/edit/:id', async function(req, res, next) {
  const currentuser = await userModel.findById(req.params.id)
  res.render('edit', {currentuser});
});

router.post('/update/:id', async function(req, res, next) {
  await userModel.findByIdAndUpdate(req.params.id,req.body)
  res.redirect('/contact')
});




router.get('/delete/:id',async function(req, res, next) {
  await userModel.findByIdAndDelete(req.params.id)
  res.redirect('/contact')
});

module.exports = router;
