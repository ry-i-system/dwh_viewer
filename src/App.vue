<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
  @import url(https://fonts.googleapis.com/css?family=Quicksand) ;
  body {
    margin: 0;
    padding: 0;
    width: 100%;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }
  .bod {
    background-color: #606366;
    width: 100%;
    text-align: center;
    color: white;
    font-family: 'Quicksand', sans-serif;
    padding: 0;
    margin: 78px auto;
  }
  .bod h1 {
    background-color: #292b2d;
    padding: 40px 0 40px 0;
    font-size: 32px;
    margin: 0;
  }
  .bod h2 {
    margin: 0;
    padding: 10px 0 10px 0;
  }
  .bod h3 {
    margin: 20px;
  }
  .bod .hot-table {
    text-align: center;
    color: rgb(59, 59, 59);
  }
</style>
