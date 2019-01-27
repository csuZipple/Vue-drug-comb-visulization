<template>
  <div id="app">
    <router-view/>
    <Loading :show="request.showLoading"/>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */
import animated from 'animate.css'
import {createNamespacedHelpers} from 'vuex'
import Loading from './components/Loading/Loading'
const mapData = createNamespacedHelpers('data')
const mapStatus = createNamespacedHelpers('status')
export default {
  name: 'App',
  components: {Loading},
  created () {
    this.initStore()
  },
  methods: {
    ...mapData.mapActions(['initStore'])
  },
  computed: {
    ...mapStatus.mapState(['request']),
    ...mapStatus.mapGetters(['showErrMsg'])
  },
  watch: {
    showErrMsg (n, o) {
      let error = this.request.errMsg
      if (error !== '') {
        this.$message({
          type: 'error',
          text: error
        })
      }
    }
  }
}
</script>

<style>
@import "assets/style/reset.css";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
