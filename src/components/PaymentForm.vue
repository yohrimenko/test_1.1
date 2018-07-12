<template>
    <div class="container">
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


<style src="../styles/formComponents.scss" lang="scss" scoped>

</style>
