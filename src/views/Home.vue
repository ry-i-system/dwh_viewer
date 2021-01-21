<template>
  <div class="home">
    <NavBar></NavBar>
    <div class="bod">
      <h1>DWH Viewer</h1>
      <h2>Infomation</h2>
      <h3>ユーザー登録はシステム管理者に依頼してください。</h3>
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
  .bod {
    background-color: #a1a3a5;
    text-align: center;
    color: white;
    font-family: 'Quicksand', sans-serif;
    padding: 0;
    margin: 78px 0;
  }
  .bod h1 {
    background-color: #656668;
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
</style>
