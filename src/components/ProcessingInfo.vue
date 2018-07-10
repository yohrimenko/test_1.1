<template>
          <div class="shipping-info">
            <div class="checkout-navbar">
                <ul>
                    <li @click="switchView('shipping-info')">Shipping</li>
                    <li @click="switchView('billing-info')">Billing</li>
                    <li @click="switchView('payment-form')">Payment</li>
                </ul>
            </div>
            <component :is="currentVue"></component>
          </div>
</template>

<script>

import ShippingInfo from './ShippingInfo.vue';
import BillingInfo from './BillingInfo.vue';
import PaymentForm from './PaymentForm.vue';

export default {
    data: function(){
            return {
                currentVue: 'shipping-info',
                isActive: true
            }
        },
    components: {
        'shipping-info': ShippingInfo,
        'billing-info': BillingInfo,
        'payment-form': PaymentForm
    },
    methods: {
        switchView: function(view) {
            this.currentVue = view;
            this.isActive = !this.isActive;
        }
    } 
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Open+Sans:500');

@import url('https://fonts.googleapis.com/css?family=Roboto:300');

    .shipping-info {
        margin: 0 auto;
    }

    ul {
        padding-left:0;
        margin-top: 10%;

        li {
            display: inline;
            font-family: 'Roboto', 'sans-serif';
            font-weight: bold;
            color: #8c8f8f;
            font-size: 85%;
            margin-right: 20px;
            
        }
        .active {
                color:#650091;
            }

        li::after {
            margin-left: 20px;
            background: url('http://cdn.onlinewebfonts.com/svg/img_119411.png') no-repeat 0px 0px;
            background-size: 10px 20px;
            display: inline-block;
            width: 10px; 
            height: 20px;
            margin-bottom: -5px;
            content:"";
        }

        li:last-child::after {
                background: none;
            }
    }
</style>

