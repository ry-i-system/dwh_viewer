<template>
  <div class="register-form">
    <NavBar></NavBar>
    <div class="bod">
      <h1>Register User Form</h1>
      <div v-if="loading">
        <Loading></Loading>
      </div>
      <div v-else>
        <h2>Please enter the user information to be registered.</h2>
        <br>
        <form @submit.prevent="registerUser">
          <label for="ur">Username</label>
          <input type="text" name="ur" id="ur" v-model="username">
          <label for="el">Email</label>
          <input type="email" name="el" id="el" v-model="email">
          <label for="pwr">Password</label>
          <input type="password" name="pwr" id="pwr" v-model="password1">
          <label for="pass">Password Confirmation</label>
          <input type="password" name="pass" id="pass" v-model="password2">
          <button type="submit">Register</button>
        </form>
      </div>
      <div v-if="registMessage != null">
        <h3>{{ registMessage }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
  import NavBar from '../components/Navbar'
  import Loading from '../components/Loading'
  export default {
    name: 'register',
    components: {
      NavBar,
      Loading
    },
    data () {
      return {
        loading: false,
        username: '',
        email: '',
        password1: '',
        password2: '',
        registMessage: null
      }
    },
    methods: {
      registerUser () {
        this.loading = true
        this.$store.dispatch('registerUser', {
          username: this.username,
          email: this.email,
          password1: this.password1,
          password2: this.password2
        })
          .then(() => {
            this.registMessage = 'User registration is complete. ( username : ' + this.username + ' )'
            this.loading = false
            this.username = ''
            this.email = ''
            this.password1 = ''
            this.password2 = ''
          })
      }
    }
  }
</script>

<style scoped>
  @import url(https://fonts.googleapis.com/css?family=Quicksand) ;
  .register-form {
    background-color: #606366;
    width: 100%;
    margin: 78px auto;
    padding: 0;
    text-align: center;
  }
</style>
