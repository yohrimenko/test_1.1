<template>
    <div class="container">
          <form id="testBillForm" @submit.prevent="processForm">
            <div class="flex-container">
              <h1>Billing Information</h1>
              <span>Same as shipping</span>
            </div>
            <div class="recipient">
                <label for="name"> Billing Contact</label>
                <input 
                  type="text" 
                  id="name" 
                  required="required" 
                  name="fullname" 
                  placeholder="Full Name"
                  v-model="billingName">
                <input 
                  type="text" 
                  id="email"
                  required="required" 
                  name="email" 
                  placeholder="Email Address"
                  v-model="email">
            </div>

            <div class="address">
              <label for="name">Address</label>
              <input 
                type="text" 
                required="required" 
                autocomplete="on" 
                id="address" 
                name="address" 
                placeholder="Street Address"
                v-model="address">
              <input 
                type="text" 
                autocomplete="on" 
                name="address-optional" 
                placeholder="Apt, Suite, Bldg, Gate Code"
                v-model="addressOptional">
              <div class="select-block">
                <select 
                  id="citySelect" 
                  onchange="citySelected();" 
                  class="selector">
                    <option value="default" selected="selected">City</option>
                    <option value="cityKiev">Kiev</option>
                    <option value="cityOdessa">Odessa</option>
                </select>
               <div class="container-inline">
                  <select 
                    id="countrySelect" 
                    onchange="countrySelected();" 
                    class="selector">
                      <option value="" selected="selected">Country</option>
                      <option value="countryUSA">USA</option>
                      <option value="countryUkraine">Ukraine</option>
                  </select>
                  <input required="required" autocomplete="on" pattern="[0-9]*" maxlength="6" class="zip-input" type="text" placeholder="ZIP" name="zip">
                </div>
              </div>
            </div>
            <button id="submitBillButton" type="submit" >Continue</button>
          </form>
        </div>
</template>

<script>
export default {
  data() {
    return {
      client: {
        billingName: '',
        email: '',
        address: '',
        addressOptional: ''
      }
    }
  },
  props: ['next-step'],
  methods: {
    processForm: function(){
      this.nextStep('Payment');
    }
  }
}
</script>

<style src="../styles/formComponents.scss" lang="scss" scoped>

</style>