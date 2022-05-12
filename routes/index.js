var express = require('express');
var router = express.Router();
const path = require('path');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contact');
});

router.post('/checkout', function(req, res, next) {
  let language = 'en_BR';
  if(req.body.languageSelection)
    language = req.body.languageSelection;
  let sdkHost = process.env['SDK_HOST'] || `localhost.paypal.com:8443`;
  res.render('checkout',{
    scriptTarget: `https://${sdkHost}/sdk/js?client-id=AWlIT0NTvtIe8FEoLoVz9N1DjFwY3SJZ8gF-Q6w4UjbwXsB6bfFlMAJUlab6AeTMfErhsTL7PRYCk88w&components=marks&buyer-country=BR&locale=${language}`
  });
});

router.post('/review', function(req, res, next) {
  let paymentOption = req.body.radio;
  let language = 'en_DE';
  let buyerCountry = 'DE'
  switch(paymentOption){
    case 'PayUponInvoice':{
        language = 'en_DE'
        buyerCountry = 'DE'
        break;
    }
    case 'boleto':{
      language = 'en_BR'
      buyerCountry = 'BR'
      break;
    }
  }
  
  if(req.body.languageSelection)
   language = req.body.languageSelection;
  let sdkHost = process.env['SDK_HOST'] || `localhost.paypal.com:8443`;
  // let stageTarget = 'te-alm-66536402202444903746246.qa.paypal.com'
  res.render('review',{
    scriptTarget: `https://${sdkHost}/sdk/js?client-id=B_AIHOqh5hcwGhwwbG8OBqaPaPAIBMwB26mFCFbgna2J76sn_Dg5eH7QbbzxqOY5Bhunuey7D_laCs3dGE&components=legal&buyer-country=${buyerCountry}&locale=${language}`,
    paymentOption: paymentOption
  });
});

router.get('/review', function(req, res, next) {
  let language = 'en_DE';
  if(req.body.languageSelection)
   language = req.body.languageSelection;
  let sdkHost = process.env['SDK_HOST'] || `localhost.paypal.com:8443`;
  // let stageTarget = 'te-alm-66536402202444903746246.qa.paypal.com'
  res.render('review',{
    scriptTarget: `https://${sdkHost}/sdk/js?client-id=B_AIHOqh5hcwGhwwbG8OBqaPaPAIBMwB26mFCFbgna2J76sn_Dg5eH7QbbzxqOY5Bhunuey7D_laCs3dGE&components=legal`
  });
});

module.exports = router;
