var express = require('express');
var router = express.Router();
const path = require('path');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contact');
});

router.post('/checkout', function(req, res, next) {
  res.render('checkout');
});

router.post('/review', function(req, res, next) {
  console.log(req.body.languageSelection)
  let language = 'en_DE';
  if(req.body.languageSelection)
   language = req.body.languageSelection;
  res.render('review',{
    scriptTarget: `https://localhost.paypal.com:8443/sdk/js?client-id=B_AIHOqh5hcwGhwwbG8OBqaPaPAIBMwB26mFCFbgna2J76sn_Dg5eH7QbbzxqOY5Bhunuey7D_laCs3dGE&components=legal&buyer-country=DE&locale=${language}&debug=true`
  });
});

router.get('/review', function(req, res, next) {
  res.render('review',{
    scriptTarget: 'https://localhost.paypal.com:8443/sdk/js?client-id=B_AIHOqh5hcwGhwwbG8OBqaPaPAIBMwB26mFCFbgna2J76sn_Dg5eH7QbbzxqOY5Bhunuey7D_laCs3dGE&components=legal&buyer-country=DE&locale=de_DE&debug=true'
  });
});

module.exports = router;
