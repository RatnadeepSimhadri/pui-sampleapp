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
  let sdkHost = process.env['SDK_HOST'] || `www.paypal.com`;
  res.render('checkout',{
    scriptTarget: `https://${sdkHost}/sdk/js?client-id=test&components=marks`
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
  let sdkHost = process.env['SDK_HOST'] || `www.paypal.com`;
  // let stageTarget = 'te-alm-66536402202444903746246.qa.paypal.com'
  res.render('review',{
    scriptTarget: `https://${sdkHost}/sdk/js?client-id=test&components=legal`,
    paymentOption: paymentOption
  });
});

router.get('/review', function(req, res, next) {
  let language = 'en_DE';
  if(req.body.languageSelection)
   language = req.body.languageSelection;
  let sdkHost = process.env['SDK_HOST'] || `www.paypal.com`;
  // let stageTarget = 'te-alm-66536402202444903746246.qa.paypal.com'
  res.render('review',{
    scriptTarget: `https://${sdkHost}/sdk/js?client-id=test&components=legal`
  });
});

module.exports = router;
