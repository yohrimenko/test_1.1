<template>
  <div id="app">
    <nav-bar></nav-bar>
    <div class="grid-container">
      <processing-info></processing-info>
      <order-list></order-list>
    </div>
  </div>
</template>

<script>

import NavBar from './components/NavBar.vue';
import OrderList from './components/OrderList.vue';
import ProcessingInfo from './components/ProcessingInfo.vue';

export default {
  name: 'app',
  
  components: {
    NavBar,
    OrderList,
    ProcessingInfo
  }
}
</script>

<style>
 body {
  margin: 0;
  background: #e5e7f0;
 } 

#app {
  
}

 .grid-container {
    margin: 50px auto;
    display: grid;
    min-width: 330px;
    width: 80%;
    max-width: 905px;
    box-shadow: 0 1px 10px 0 rgba(0,0,0,0.05), 0 1px 15px 0 rgba(0,0,0,0.1);
    border-radius: 5px; 
    background-color: #fff;
    grid-template-areas:
      "order-list"
      "processing-info"
 }

 @media only screen and (min-width: 700px)  {
	.grid-container {
    width: 70%;
		grid-template-columns: 5fr 4fr;
		grid-template-areas:
    "processing-info order-list"
	}
	}

</style>
