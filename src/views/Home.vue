<template>
  <div class="home">
    <NavBar></NavBar>
    <div class="bod">
      <h1>DWH Viewer</h1>
      <h2>Infomation</h2>
      <h3>Ask your system administrator to register as a user.</h3>
    </div>
  </div>
</template>

<script>
  import NavBar from '../components/Navbar'
  export default {
    name: 'home',
    components: {
      NavBar
    }
  }
</script>

<style scoped>
  @import url(https://fonts.googleapis.com/css?family=Quicksand) ;
  .home {
    margin: 0;
    padding: 0;
  }
</style>
