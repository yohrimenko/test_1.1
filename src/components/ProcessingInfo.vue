<template>
          <div class="shipping-info">
            <div class="checkout-navbar">
                <ul>
                    <li v-for="step in steps" :key="step" v-bind:class="{ active: currentStep == step}"> 
                        <span @click="currentStep = step">{{ step }}</span>
                    </li>
                </ul>
            </div>
            <component :is="currentStep" :next-step.sync="nextStep"></component>
          </div>
</template>

<script>

import ShippingInfo from './ShippingInfo.vue';
import BillingInfo from './BillingInfo.vue';
import PaymentForm from './PaymentForm.vue';
import CheckoutSuccess from './CheckoutSuccess.vue';

export default {
    data: function(){
            return {
                steps: ['Shipping', 'Billing', 'Payment'],
                completedSteps: [],
                currentStep: 'Shipping'
            }
        },
    components: {
        'Shipping': ShippingInfo,
        'Billing': BillingInfo,
        'Payment': PaymentForm,
        'CheckoutSuccess': CheckoutSuccess
    },
    methods: {
        nextStep: function (step) {
            this.currentStep = step;
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

