<template>
    <div class="container">
      <form id="testForm" @submit.prevent="processForm">
          <h1>Shipping Info</h1>
            <div class="recipient">
              <label for="name"> Recipient</label>
              <input 
                type="text" 
                id="name" 
                required="required" 
                name="fullname" 
                placeholder="Full Name"
                v-model="name">
              <div class="tel-input">
                <the-mask 
                  type="tel" 
                  required="required" 
                  name="usrtel" 
                  placeholder="Daytime phone"
                  v-model="tel"
                  mask="+## (###) ###-##-##">
                </the-mask>
                <span>For delivery <br> questions only</span>
              </div>
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
            <button  id="submitButton" type="submit" >Continue</button>
          </form>
        </div>
</template>

<script>
import {TheMask} from 'vue-the-mask'

export default {
  
  data() {
    return {
      client: {
        name: '',
        tel: '',
        address: '',
        addressOptional: ''
      }
    }
  },
  props: ['next-step'],
  methods: {
    processForm: function(){
      console.log({name: this.name, tel: this.tel, city: this.city});
      this.nextStep('Billing');
    }
  },
  components: {TheMask}
  
}

</script>

<style src="../styles/formComponents.scss" lang="scss" scoped>

</style>