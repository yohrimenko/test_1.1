<template>
    <div class="checkout-info">
            <h1>Payment</h1>
            <p>This is a secure 128-bit SSL encrypted payment</p>
            <form id="testForm" @submit.prevent="processForm">
              <div class="cartholder-name">
                <label for="name"> Cardholder Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="fulltname" 
                  required="required" 
                  placeholder="Name as it appears on your card">
              </div>
              <div class="card-number">
                <label for="card"> Card Number</label>
                <the-mask 
                  class="card-masked" 
                  mask="#### #### #### ####" 
                  required="required" 
                  type="text" 
                  name="card"
                  placeholder="XXXX XXXX XXXX XXXX">
                </the-mask>
              </div>
              <div class="bottom-container">
                <div class="expire-date">
                  <label for="date"> Expire Date</label>
                  <the-mask 
                    type="text" 
                    mask="##/##" 
                    placeholder="MM / YY"
                    name="date">
                    
                  </the-mask>
                </div>
                <div class="security-code">
                  <label for="code"> Security Code</label>
                  <the-mask 
                    type="text" 
                    mask="###" 
                    placeholder=""
                    name="code">
                    
                  </the-mask>
                </div>
              </div>
              <button id="submitButton" type="submit" >Pay Securely</button>
            </form>
        </div>
</template>

<script>
  import {TheMask} from 'vue-the-mask'

  export default {
    props: ['next-step'],
    methods: {
      processForm: function(){
        this.nextStep('CheckoutSuccess');
      }
    },
    components: {TheMask}
  }
  
</script>


<style lang="scss" scoped>

@import url('https://fonts.googleapis.com/css?family=Open+Sans:500');

@import url('https://fonts.googleapis.com/css?family=Roboto:300');

form input:focus {
  border: 2px solid #EDEEF4;
}

form.submitted input:invalid{
  background:rgb(255, 239, 239);
}

label {
  margin-bottom: 10px;
  display: block;
  color: #650091;
  font-size: 130%;
}
p {
  color: #838586;
}
h1 {
  color: #650091;
  font-weight: normal;

  a {
    color: #650091;
    float: right;
    font-size: 60%;
    line-height: 235%;  
  }
}

.checkout-info {
  width: 100%;
  background: #fff;
  border-radius: 5px 0 0 5px; 
  font-family: 'Roboto','Helvetica Neue', Arial, sans-serif;
  font-size: 14px;
  margin-bottom: 15%;

  div {
    margin-top: 20px;
  }

}
 .expire-date, .security-code{
      display: inline-block;
      margin-right: 30px;

      input {
        width: 140px;
      }
    }
.bottom-container{
  width: 400px;
}
.shipping-info{
  width: 100%;
  margin: 40px;
}

.recipient {
  width: 400px;
  margin-top: 10px;
}

 input, .card-masked {
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  outline: none;
  padding: 15px;
  font-size: 130%;
  background: none;
  border: 1px solid #DDDBDB;
  border-radius: 5px; 
  box-shadow: 1px 1px #F4F3F3;
  color: #212121;
  text-transform: capitalize;
  font-family: 'Roboto';
  
}

.address .zip-input {
  width: 140px;
  margin-left: 15px;
}

button {
  width: 240px;
  margin-top: 20px;
  border: none;
  border-radius: 5px;
  background-color: #650091;
  color: white;
  padding: 15px;
  text-align: center;
  font-size: 120%;
  font-family: 'Roboto';
  font-weight: bold;
}
</style>
