<template>
  <div class="content">
    <header-bar></header-bar>
    <div class="has-header">
      <detail-option title="HTML练习题" :items="htmlTests"></detail-option>
      <detail-option title="CSS练习题" :items="cssTests"></detail-option>
      <detail-option title="JavaScript练习题" :items="javaScriptTests"></detail-option>
      <detail-option title="jQuery练习题" :items="jQueryTests"></detail-option>
      <detail-option title="hifive练习题" :items="hifiveTests"></detail-option>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
import { mapState } from 'vuex'

import HeaderBar from '@/components/HeaderBar'
import DetailOption from '@/components/DetailOption'

export default {
  name: 'content-view',
  components: { HeaderBar, DetailOption },
  data: function () {
    return {
    }
  },
  computed: {
    ...mapState({
      htmlTests: state => state.test.htmlTests,
      cssTests: state => state.test.cssTests,
      javaScriptTests: state => state.test.javaScriptTests,
      jQueryTests: state => state.test.jQueryTests,
      hifiveTests: state => state.test.hifiveTests
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .triangle {
    position: absolute;
    width: 0;
    height: 0;
    right: 0.5rem;
    top: 1.3rem;
    border-left: 1rem solid transparent;
    border-right: 1rem solid transparent;
    border-top: 1rem solid #fff;
  }
  .triangleUp {
    position: absolute;
    width: 0;
    height: 0;
    top: 1rem;
    right: 0.5rem;
    border-left: 1rem solid transparent;
    border-right: 1rem solid transparent;
    border-bottom: 1rem solid #fff;
  }
</style>
