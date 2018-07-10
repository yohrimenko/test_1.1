<template>
    <div class="container">

        <div class="order-title">
            <h2>Order summary<a href="#">edit order</a></h2>
        </div>

        <order-item></order-item>
        <order-item></order-item>
        <order-item></order-item>


        <div class="order-price">
            <h3 class="cart-line">
                Subtotal
                <span class="cart-price">$398</span>
            </h3>
            <h3 class="cart-line">
                Shipping
                <span class="cart-price">Free</span>
            </h3>
            <h3 class="cart-line">
                Taxes
                <span class="cart-price">$12.12</span>
            </h3>
        </div>
        <div class="total-price">
            <h3 class="cart-total">
                Total
                <span class="cart-price">$410.12</span>
            </h3>
        </div>
    </div>
</template>

<style lang="scss" scoped>

@import url('https://fonts.googleapis.com/css?family=Open+Sans:300');

@import url('https://fonts.googleapis.com/css?family=Roboto:300');

@import url('https://fonts.googleapis.com/css?family=Raleway:400');

    .container {
        background-color: #f0f2f6;
        padding-top: 10px;
        padding-left: 10px;
        padding-right: 20px;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
    }

    .order-title {
        h2 {
            margin-left: 5px;
            margin-bottom: 10px;
            font-family: 'Raleway', 'Open Sans', 'sans-serif';
            font-size: 130%;
            text-transform: capitalize;
            font-weight: normal;
            color: #650091;

            a{
                text-transform: lowercase;
                float: right;
                font-size: 70%;
                color: #8c8f8f;
                line-height: 200%;
            }
        }
    }

    .order-price {
        color: #8c8f8f;
        font-family: 'Roboto','Open Sans', 'sans-serif';
        font-size: 80%;
        margin-top: 15px;
        padding-bottom: 5px;
        border-bottom: 2px solid rgba(51, 58, 69, 0.1);
        padding-left: 5px;
        font-weight: normal;

        h3 {
            margin: 5px 0;
        }

        span {
            float: right;
        }
    }
    .total-price {
        font-family: 'Roboto', Helvetica, sans-serif;
        font-size: 80%;
        color: #650091;
        padding-left: 5px;
        

        span{
            float: right;
        }
    }
</style>

<script>

import OrderItem from './OrderItem.vue';

export default {
    components: {
        'order-item': OrderItem
    }
}
</script>

