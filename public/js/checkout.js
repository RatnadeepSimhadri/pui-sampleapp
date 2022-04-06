function radioOnChange(e){
    var value = e.target.value;
    var cardFieldsContainer = document.getElementsByClassName("cardfields")[0];
    var puiFieldsContainer = document.getElementsByClassName("puifields")[0];

    if(value == "pui"){
        cardFieldsContainer.style.display = 'none';
        puiFieldsContainer.style.display = 'block';
    } else if(value === "paypal"){
        cardFieldsContainer.style.display = 'none';
        puiFieldsContainer.style.display = 'none';
    } else if(value === "card"){
        cardFieldsContainer.style.display = 'block';
        puiFieldsContainer.style.display = 'none';
    }
}