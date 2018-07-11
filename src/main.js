import Vue from 'vue'
import App from './App.vue'

new Vue({
  el: '#app',
  render: h => h(App)
})
document.getElementById("submitButton").addEventListener("click", function(){
	document.getElementById("testForm").className="submitted";
});