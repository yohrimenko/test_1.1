<template>
    <div class="checkout-info">
          <form @submit.prevent="processForm">
            <h1>Billing Information<a href="#">Same as shipping</a></h1>

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
                <select 
                  id="countrySelect" 
                  onchange="countrySelected();" 
                  class="selector">
                    <option value="" selected="selected">Country</option>
                    <option value="countryUSA">USA</option>
                    <option value="countryUkraine">Ukraine</option>
                </select>
                <input required="required" autocomplete="on" pattern="[0-9]*" maxlength="5" class="zip-input" type="text" placeholder="ZIP" name="zip">
              </div>
            </div>
            <button type="submit" >Continue</button>
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


<style scoped>

@import url('https://fonts.googleapis.com/css?family=Open+Sans:500');

@import url('https://fonts.googleapis.com/css?family=Roboto:300');

label {
  margin-bottom: 10px;
  display: block;
  color: #650091;
  font-size: 130%;
}

h1 {
  color: #650091;
  font-weight: normal;
}

h1 a {
  color: #650091;
  float: right;
  font-size: 60%;
  line-height: 235%;
}
.checkout-info {
  width: 100%;
  background: #fff;
  border-radius: 5px 0 0 5px; 
  font-family: 'Roboto','Helvetica Neue', Arial, sans-serif;
  font-size: 14px;
  margin-bottom: 15%;
}

.shipping-info{
  width: 100%;
  margin: 40px;
}

.recipient {
  width: 400px;
  margin-top: 10px;
}

.recipient input {
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

#email {
  margin-top: 10px;
}

.address {
  margin-top: 30px;
  width: 400px;
}

.address input {
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  outline: none;
  padding: 15px;
  margin-top: 10px; 
  font-size: 120%;
  background: none;
  border: 1px solid #DDDBDB;
  border-radius: 5px; 
  box-shadow: 1px 1px #F4F3F3;
  font-family: 'Roboto';
  color: #212121;
}

#address {
    margin-top: 0;
}

select {
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  outline: none;
  margin-top: 20px; 
  font-size: 120%;
  background: url("https://upload.wikimedia.org/wikipedia/commons/2/2f/VisualEditor_-_Icon_-_Expand.svg") no-repeat 95% center;
  background-size: 25px;
  border: 1px solid #DDDBDB;
  border-radius: 5px; 
  box-shadow: 1px 1px #F4F3F3;
  color: #8c8f8f;
  padding-left: 15px;
  -webkit-appearance: none;
  -moz-appearance: none;
  font-family: 'Roboto';
}
#citySelect{
    background-image: url("https://cdn3.iconfinder.com/data/icons/web-icons-1/64/Crosshair-512.png");
    background-size: 30px;
}

#countrySelect {
  width: 240px;
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
