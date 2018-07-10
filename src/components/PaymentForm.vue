<template>
    <div class="checkout-info">
            <h1>Payment</h1>
            <p>This is a secure 128-bit SSL encrypted payment</p>
              <div class="cartholder-name">
                <label for="fname"><i class="user"></i> Cardholder Name</label>
                <input type="text" id="fname" name="fulltname" placeholder="Name as it appears on your card">
              </div>
              <div class="card-number">
                <label for="fname"><i class="user"></i> Card Number</label>
                <input type="text" id="fnum" name="fulltname" placeholder="XXXX XXXX XXXX XXXX XXXX">
              </div>
              <div class="bottom-container">
                <div class="expire-date">
                  <label for="fname"><i class="user"></i> Expire Date</label>
                  <input type="text" id="date" name="fulltname" placeholder="MM / YY">
                </div>
                <div class="security-code">
                  <label for="fname"><i class="user"></i> Security Code</label>
                  <input type="text" id="date" name="fulltname" placeholder="">
                </div>
              </div>
              <button>Pay Securely</button>
        </div>
</template>

<style lang="scss" scoped>

@import url('https://fonts.googleapis.com/css?family=Open+Sans:500');

@import url('https://fonts.googleapis.com/css?family=Roboto:300');

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

 input {
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
