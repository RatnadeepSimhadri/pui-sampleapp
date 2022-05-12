function radioOnChange(e){
    var value = e.target.value;
    var cardFieldsContainer = document.getElementsByClassName("cardfields")[0];
    var puiFieldsContainer = document.getElementsByClassName("puifields")[0];

    if(value == "Pay Upon Invoice"){
        cardFieldsContainer.style.display = 'none';
        puiFieldsContainer.style.display = 'block';
    } else if(value === "paypal" || value === "boleto"){
        cardFieldsContainer.style.display = 'none';
        puiFieldsContainer.style.display = 'none';
    } else if(value === "card"){
        cardFieldsContainer.style.display = 'block';
        puiFieldsContainer.style.display = 'none';
    }
}

/* On Page Load*/
(function ()  {
  
paypal
  .Marks({
    fundingSource: paypal.FUNDING.BOLETO,
  })
  .render('#boleto-mark')
})();