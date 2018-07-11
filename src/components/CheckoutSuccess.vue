<template>
        <div class="success">
            <h1 class="title">Thanks you for your order!</h1>
            <p class="order-number">Order number is: 188787788</p>
            <p>You will recive an email confirmation shortly to <span class="email">email@gmail.com</span></p>
            <p>Estimated delivery Day is<br><span class="date">Friday 1st April 2016</span></p>
            <a href="#">print recipe</a>
        </div>
</template>

<style lang="scss" scoped>

@import url('https://fonts.googleapis.com/css?family=Open+Sans:500');

@import url('https://fonts.googleapis.com/css?family=Roboto:300');

h1 {
  color: #650091;
  font-weight: normal;
}

.success {
  width: 100%;
  background: #fff;
  border-radius: 5px 0 0 5px; 
  font-family: 'Roboto','Helvetica Neue', Arial, sans-serif;
  font-size: 14px;
  margin-bottom: 15%;
}
a {
    text-transform: capitalize;
}

.email {
    text-decoration: underline;
    color: #78189E;
}
.date, .order-number {
    font-weight: bold;
}
</style>

<script>
  
</script>
