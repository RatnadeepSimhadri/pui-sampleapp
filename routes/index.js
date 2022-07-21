var express = require('express');
var router = express.Router();
const path = require('path');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contact');
});

router.post('/checkout', function(req, res, next) {

  if(req.body.languageSelection)
    language = req.body.languageSelection;
    let sdkHost = process.env['SDK_HOST'] || `localhost.paypal.com:8443`;
    let clientID = process.env['CLIENT_ID'] || `AWlIT0NTvtIe8FEoLoVz9N1DjFwY3SJZ8gF-Q6w4UjbwXsB6bfFlMAJUlab6AeTMfErhsTL7PRYCk88w`;
  res.render('checkout',{
    scriptTarget: `https://${sdkHost}/sdk/js?client-id=${clientID}&components=marks&debug=true`
  });
});

router.post('/review', function(req, res, next) {
  let paymentOption = req.body.paymentSelection;
  let language = req.body.languageSelection;
 

   let sdkHost = process.env['SDK_HOST'] || `localhost.paypal.com:8443`;
   let clientID = process.env['CLIENT_ID'] || `AWlIT0NTvtIe8FEoLoVz9N1DjFwY3SJZ8gF-Q6w4UjbwXsB6bfFlMAJUlab6AeTMfErhsTL7PRYCk88w`;
  res.render('review',{
    scriptTarget: `https://${sdkHost}/sdk/js?client-id=${clientID}&components=legal&debug=true`,
    paymentOption: paymentOption
  });
});

router.get('/review', function(req, res, next) {

  let sdkHost = process.env['SDK_HOST'] || `localhost.paypal.com:8443`;
  let clientID = process.env['CLIENT_ID'] || `AWlIT0NTvtIe8FEoLoVz9N1DjFwY3SJZ8gF-Q6w4UjbwXsB6bfFlMAJUlab6AeTMfErhsTL7PRYCk88w`;

  // let stageTarget = 'te-alm-66536402202444903746246.qa.paypal.com'
  res.render('review',{
    scriptTarget: `https://${sdkHost}/sdk/js?client-id=${clientID}&components=legal&debug=true`
  });
});

router.post('/changepreferences', function(req, res, next) {
  let paymentOption = req.body.paymentSelection;
  let language = req.body.languageSelection;

  let sdkHost = process.env['SDK_HOST'] || `localhost.paypal.com:8443`;
  let clientID = process.env['CLIENT_ID'] || `AWlIT0NTvtIe8FEoLoVz9N1DjFwY3SJZ8gF-Q6w4UjbwXsB6bfFlMAJUlab6AeTMfErhsTL7PRYCk88w`;

  let scriptTarget = `https://${sdkHost}/sdk/js?client-id=${clientID}&components=legal&debug=true`;
  if(language){
    scriptTarget+=`&locale=${language}`
  }
  res.render('review',{
    scriptTarget: scriptTarget,
    paymentOption: paymentOption
  });
});

module.exports = router;
