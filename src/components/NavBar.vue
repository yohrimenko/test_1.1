<template>
    <div class="container">
        <nav>
            <ul class="navbar-left">
                <li><span>&lt;<span class="big-slash">/</span>> front-end developer test task</span></li>
            </ul>
            <ul class="navbar-right">
                <li><a href="#" id="cart"> cart <i class="fa fa-shopping-cart"></i><span class="badge"> 3</span></a></li>
            </ul>
        </nav>
    </div>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300');
@import url('https://fonts.googleapis.com/css?family=Roboto:300');
@import url(https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css);

*, *:before, *:after {
  box-sizing: border-box;
}

.container {
  margin: auto;
  border-bottom: 1px solid #FFAAD3;
  overflow: hidden;
  box-shadow: 1px 1px #FFCAD3;
  background: #ffffff;
}

nav {
  font-size: 16px;
  width: 70%;
  height: 55px;
  margin: auto;
  font-family: 'Roboto', Helvetica, sans-serif;
  
  .navbar-left {
    float: left;
    padding-left: 0;

    li {
        display: inline;
        text-transform: capitalize;
        color: #690094;
        font-size: 150%;
        font-family: 'Roboto','Open Sans', sans-serif;
        font-weight: normal;

    }
  }
  .navbar-right {
    float: right;
  }
  ul {
    
    li {
      display: inline;
      a {
        color: #E63EBA;
        text-decoration: none;
        font-size: 120%;
        font-family: 'Roboto','Open Sans', sans-serif;
        
        &:hover {
          color: black;
        }
      }
    }
  }
}
</style>

<script>

</script>

