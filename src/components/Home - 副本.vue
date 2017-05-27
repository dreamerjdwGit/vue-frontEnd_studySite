<template>
  <div id="home">
    <div class="page-header">
      <h1>
        小测验
        <small>前端基础知识</small>
        <span class="glyphicon glyphicon-education" aria-hidden="true"></span>
      </h1>
    </div>
    
    <div>
      <h2>{{contents.title}}</h2>
      <table class="table table-striped">
        <tbody>
          <tr v-for="item in contents.list">
            <td>{{item.name}}</td>
            <td>共{{item.testNum}}问</td>
            
          </tr>
          
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'home',
  data: function () {
    return {
      contents: {
        title: null,
        list: null
      }
    }
  },
  created: function () {
    this.getContents()
  },
  methods: {
    getContents: function () {
      var that = this
      axios({
        method: 'GET',
        url: '../static/data/contents.json'
      }).then(function (response) {
        that.contents = response.data
      }, function (error) {
        console.log(error)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  td {
    font-size: 17px;
  }
</style>
