import axios from 'axios'
import store from '../store'
const APIUrl = 'http://localhost:8000'

const axiosBase = axios.create({
  baseURL: APIUrl
})

const getAPI = axios.create({
  baseURL: APIUrl
})

getAPI.interceptors.response.use(undefined, function (err) {
  // if error response status is 401, it means the request was invalid due to expired access token
  if (err.config && err.response && err.response.status === 401) {
    store.dispatch('refreshToken') // attempt to obtain new access token by running 'refreshToken' action
      .then(access => {
        // if successful re-send the request to get the data from server
        axios.request({
          baseURL: APIUrl,
          method: 'get',
          headers: { Authorization: `Token ${this.$store.state.accessToken}` }, // the new access token is attached to the authorization header
          url: '/api/v1/users/'
        }).then(response => {
          // if successfully received the data store it in store.state.APIData so that 'Downloads' component can grab the
          // data from it and display to the client.
          console.log('Success getting the Mods')
          store.state.APIData = response.data
        }).catch(err => {
          console.log('Got the new access token but error while trying to fetch data from the API using it')
          return Promise.reject(err)
        })
      })
      .catch(err => {
        return Promise.reject(err)
      })
  }
})

export { axiosBase, getAPI }
