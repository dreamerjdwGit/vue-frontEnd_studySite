<template>
  <div id="CSS">
    <div class="page-header">
      <h1>
        Web应用基础知识
        <small>CSS基础</small>
      </h1>
    </div>
    <component v-bind:is="questionNum"></component>
  </div>
</template>

<script>

import CSStest01 from './CSS_test/CSS_test_01.vue'
import CSStest02 from './CSS_test/CSS_test_02.vue'
import CSStest03 from './CSS_test/CSS_test_03.vue'
import CSStest04 from './CSS_test/CSS_test_04.vue'
import CSStest05 from './CSS_test/CSS_test_05.vue'
import CSStest06 from './CSS_test/CSS_test_06.vue'
import CSStest07 from './CSS_test/CSS_test_07.vue'

export default {
  name: 'css',
  computed: {
    isDisabled: function () {
      return true
    },
    questionNum: function () {
      var num = this.$store.state.questionNum >= 10 ? this.$store.state.questionNum : ('0' + this.$store.state.questionNum)
      return 'CSS_test_' + num
    }
  },
  components: {
    'CSS_test_01': CSStest01,
    'CSS_test_02': CSStest02,
    'CSS_test_03': CSStest03,
    'CSS_test_04': CSStest04,
    'CSS_test_05': CSStest05,
    'CSS_test_06': CSStest06,
    'CSS_test_07': CSStest07
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  td {
    font-size: 17px;
  }
  button {
    float: right;
  }
</style>
