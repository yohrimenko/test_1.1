<template>
    <div class="order-item">
        <img :src="thumbnail" alt="" class="item-pic">
        <div class="right-block">
            <h3>{{ title }}<span class="item-price">${{ price }}</span></h3>
            <p class="discription">{{ description }}</p>
            <p class="quantity">Quantity: {{ quantity }}</p>
        </div>
    </div>    
</template>

<script>
    export default {
        props: ['title', 'description', 'thumbnail', 'price', 'quantity']
    }
</script>

<style lang="scss" scoped>

@import url('https://fonts.googleapis.com/css?family=Open+Sans:300');

@import url('https://fonts.googleapis.com/css?family=Roboto:300');

@import url('https://fonts.googleapis.com/css?family=Raleway:400');

.order-item {
    padding: 10px 5px;
    overflow: hidden;
    border-bottom: 2px solid rgba(51, 58, 69, 0.1);

    img {
        float: left;
        margin-right: 10px;
        width: 60px;
        height: 60px;
        border: 1px solid #E2E2E2;
        border-radius: 1px;
    }
    .right-block{
        h3 {
            margin:0;
            padding-bottom: 10px;
            text-transform: capitalize;
            font-size: 90%;
            color: #838586;
            font-family: 'Roboto', 'Open Sans', sans-serif;
            font-weight: bold;

            span {
                float: right;
            }
        }

        p {
            margin: 0;
            font-size: 80%;
            font-family: 'Roboto','Open Sans', sans-serif;
            font-weight: bold;
            color: #453F3F;
        }
    }
}

 @media only screen and (max-width: 1000px)  {
	h3{
        font-size: 70%;
    }
 }



</style>

