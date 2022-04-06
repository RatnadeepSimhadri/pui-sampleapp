/* Mock Buy Now  Button Listner */
var userLanguage = 'en-DE';
function checkout(){
   
    var resultModal = document.getElementById("resultModal");
    var orderStatus = document.getElementById("orderStatus");
    var errorType = document.getElementById("email-select");
    var errorContainer = document.getElementById("paypal-error-container");
    document.getElementById("myBar").innerHTML = "";
    document.getElementById("myBar").style.paddingTop = ""
    var errorMessage = errorType.value;
    orderStatus.innerHTML = "Submitting the Order"
    errorContainer.innerHTML = ""

    resultModal.style.display = "block";
    setTimeout(() => {
        showLoading();
    },0)
    
    setTimeout(() => {
        document.getElementById("myBar").innerHTML = "Done";
        document.getElementById("myBar").style.paddingTop = "5px"
        if (errorMessage === "payment_source_info_cannot_be_verified@example.com"){
            orderStatus.innerHTML = "There was a problem submitting your Order &#128680;"
            paypal.Legal({
                legalLocale : userLanguage,
                buyerCountry : 'de',
                fundingSource : 'PUI',
                errorCode: 'PAYMENT_SOURCE_INFO_CANNOT_BE_VERIFIED'
            }).render('#paypal-error-container')
        } else if (errorMessage === "payment_source_declined_by_processor@example.com"){
            orderStatus.innerHTML = "There was a problem submitting your Order &#128680;"
            paypal.Legal({
                legalLocale : userLanguage,
                buyerCountry : 'de',
                fundingSource : 'PUI',
                errorCode: 'PAYMENT_SOURCE_DECLINED_BY_PROCESSOR'
            }).render('#paypal-error-container')
            
        } else 
            orderStatus.innerHTML = "Order Submitted Successfully &#127881;"
            
            
    },1050);


}

function showLoading(){
  var i = 0;
  function move() {
    if (i == 0) {
      i = 1;
      var elem = document.getElementById("myBar");
      var width = 1;
      var id = setInterval(frame, 10);
      function frame() {
        if (width >= 100) {
          clearInterval(id);
          i = 0;
        } else {
          width++;
          elem.style.width = width + "%";
        }
      }
    }
  }

  move();
}

/* On Page Load*/
(function ()  {
    paypal.Legal({
        legalLocale: userLanguage,
        buyerCountry: "de",
        fundingSource: "PUI",
      })
      .render("#paypal-legal-container");
      
        /* Add Event Listner for Close Button */
        var modal = document.getElementById("resultModal");
      
        var span = document.getElementsByClassName("close")[0];
        document.getElementById("myBar").onclick = function() {
            modal.style.display = "none";
          }
        span.onclick = function() {
          modal.style.display = "none";
        }
      
        // When the user clicks anywhere outside of the modal, close it
      window.onclick = function(event) {
          if (event.target == modal) {
            modal.style.display = "none";
          }
        }
})();

function onLanguageChange(event){
    if(event.target.value)
        userLanguage = event.target.value;
    else
        userLanguage = 'en-DE';

        paypal.Legal({
            legalLocale: userLanguage,
            buyerCountry: "de",
            fundingSource: "PUI",
          })
          .render("#paypal-legal-container");
}