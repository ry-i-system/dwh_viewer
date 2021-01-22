<template>
  <div class="downloads">
    <NavBar></NavBar>
    <div class="bod">
      <h1>Welcome to Download Hub</h1>
      <h2>User list</h2>
      <div v-if="loading">
        <Loading></Loading>
      </div>
      <div v-else-if="notAdmin">
        <h3>You do not have permission.</h3>
      </div>
      <div v-else>
        <div class="hot-table">
          <hot-table :settings="hotSettings" />
        </div>
      </div>
      <h2></h2>
    </div>
  </div>
</template>

<script>
  import NavBar from '../components/Navbar'
  import Loading from '../components/Loading'
  import { getAPI } from '../api/axios-base'
  import { mapState } from 'vuex'
  import HotTable from 'vue-handsontable-official'

  export default {
    name: 'downloads',
    onIdle () {
      this.$store.dispatch('logoutUser')
        .then(response => {
          this.$router.push('/login')
        })
    },
    components: {
      NavBar,
      Loading,
      HotTable
    },
    data () {
      return {
        loading: true,
        notAdmin: true,
        hotSettings: {
          licenseKey: 'non-commercial-and-evaluation',
          data: [],
          colHeaders: [
            'UserName',
            'IsSuperuser',
            'IsStaff'
          ],
          rowHeaders: [],
          allowInsertColumn: false,
          allowRemoveColumn: false,
          autoColumnSize: true,
          manualColumnResize: true
        }
      }
    },
    computed: mapState(['APIData']),
    created () {
      getAPI.get('/api/v1/users/', { headers: { Authorization: `Token ${this.$store.state.accessToken}` } })
        .then(response => {
          if (response === undefined) {
            console.log('GetAPI fail.')
          } else {
            console.log('GetAPI success.')
            this.$data.notAdmin = false
            response.data.forEach(user => {
              this.$data.hotSettings.rowHeaders.push([
                user.id
              ])
              this.$data.hotSettings.data.push([
                user.username,
                user.is_superuser,
                user.is_staff
              ])
            })
          }
        })
        .catch(err => {
          console.log(err)
        })
      this.loading = false
    }
  }
</script>

<style scoped>
  @import '~handsontable/dist/handsontable.full.css';
  @import url(https://fonts.googleapis.com/css?family=Quicksand);
  .downloads {
    margin: 0;
    padding: 0;
  }
  .bod .hot-table {
    width: 400px;
    margin-left: auto;
    margin-right: auto;
  }
</style>
