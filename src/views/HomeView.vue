<template>
  <div class="home">
    <header-bar></header-bar>
    <div class="has-header">
      <div class="forStart">
        <h1>Hello, HTML5 !</h1>
        <h2>测验内容</h2>
        <ul class="content-list">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>Hifive框架</li>
        </ul>
      </div>
    </div>
    <div class="col-xs-12 startBtn">
      <button class="btn btn-info" @click="start">开始测验</button>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
import HeaderBar from '@/components/HeaderBar'
export default {
  name: 'home-view',
  components: { HeaderBar },
  data: function () {
    return {
    }
  },
  methods: {
    start: function () {
      this.$router.push({name: 'ContentView'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.home-header {
  margin: 0;
  position: fixed;
  height: 6rem;
  display: flex;
}
.ns-brand{
  flex: 2
}
.ns-brand a{
  height: 100%;
  line-height: 3.5rem;
  font-size: 2rem;
}
.ns-title {
  flex: 3;
  color: #fff;
}
.has-header {
  margin-top: 6rem;
  padding: 1rem;
}
.forStart {
  padding: 2rem;
  text-align: center;
}
.content-list {
  list-style-type: none;
  padding-left: 1.5rem;
  margin-top: 2rem;
}
.content-list li {
  margin-bottom: 1rem;
  font-size: 1.8rem;
  font-weight: bold;
  font-family: Georgia,Serif;
  color: #797372;
}
.startBtn button{
  width: 100%;
  height: 5rem;
  font-size: 3rem;
}
</style>
