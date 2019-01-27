<template>
  <div>
    <img src="../../assets/logo.png">
    <p>I am test 1</p>
    <p>
      <button @click="fetchData">fetchData1</button>
    </p>
    <p>
      <button @click="fetchData2">fetchPage</button>
    </p>
    <router-link to="/test2">GO Test 2</router-link>
  </div>
</template>

<script>
import {getOriginName, getDrugCombPagination} from '../../api/api'

export default {
  name: 'Test1',
  methods: {
    fetchData () {
      getOriginName(5).then(data => {
        console.log('data', data)
      })
    },
    fetchData2 () {
      getDrugCombPagination(1, 1, 10).then(data => {
        console.log('data', data)
      })
    }
  }
}
</script>

<style scoped>

</style>
