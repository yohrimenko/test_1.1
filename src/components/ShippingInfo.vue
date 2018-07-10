<template>
    <div class="checkout-info">
            <h1>Shipping Info</h1>
              <div class="recipient">
                <label for="fname"><i class="user"></i> Recipient</label>
                <input type="text" id="fname" name="fulltname" placeholder="Full Name">
                <div class="tel-input">
                <input type="tel" name="usrtel" placeholder="Daytime phone">
                <span>For delivery <br> questions only</span>
                </div>
              </div>
              <div class="address">
                <label for="fname"><i class="user"></i> Address</label>
                <input type="text" id="faddress" name="address" placeholder="Street Address">
                <input type="text" placeholder="Apt, Suite, Bldg, Gate Code">

                <div class="select-block">
                  <select id="stateSelect" onchange="stateSelected();" class="selector">
                    <option value="" selected="selected">City</option>
                    <option value="stateCalifornia">California</option>
                    <option value="stateTexas">Texas</option>
                  </select>

                  <select id="stateCountry" onchange="stateSelected();" class="selector">
                    <option value="" selected="selected">Country</option>
                    <option value="stateUSA">USA</option>
                    <option value="stateUkraine">Ukraine</option>
                  </select>
                  <input class="zip-input" type="text" placeholder="ZIP">
                </div>
              </div>
              <button>Continue</button>
        </div>
</template>

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

.tel-input {
  margin-top: 10px;
}

.tel-input input {
  vertical-align:middle;
  box-sizing:border-box;
  width: 250px;
  padding: 15px;
  font-size: 120%;
  color: #212121;
}

.tel-input span {
  display: inline-block;
  vertical-align:middle;
  margin-left: 5px;
  color: #8c8f8f;
  font-size: 120%;
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

#faddress {
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
#stateSelect{
    background-image: url("https://cdn3.iconfinder.com/data/icons/web-icons-1/64/Crosshair-512.png");
    background-size: 30px;
}

#stateCountry {
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
