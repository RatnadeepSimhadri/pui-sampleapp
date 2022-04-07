# Display PUI Legal Text and Error Messages through JS SDK on Web 

This Integration shows . How to display Legal Text Message for accepting PUI Payments 

See the hosted example [here](https://pui-legal-app.herokuapp.com/)

<img width="1000" alt="image" src="https://user-images.githubusercontent.com/9788837/162337448-79b1d6c8-6766-41d6-920f-f5400b777e02.png">


Integration 

```html

<script src="https://localhost.paypal.com:8443/sdk/js?client-id=test&components=legal"></script>

<!-- Place the container div right above the final Checkout Button -->
<div id="paypal-legal-container"></div> 

<script>
paypal.Legal({
        fundingSource: "PUI"
        })
      .render("#paypal-legal-container");
</script>

```
