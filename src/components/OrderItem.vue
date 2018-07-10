<template>
    <div class="order-item">
        <img src="https://www.shoezone.com/Images/Product/58502_T01.20171101000059.jpg" alt="" class="item-pic">
        <div class="right-block">
            <h3>The chelsea boot<span class="item-price">$235</span></h3>
            <p class="discription">Black</p>
            <p class="quantity">Quantity: 1</p>
        </div>
    </div>    
</template>

<script>
    
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


</style>

