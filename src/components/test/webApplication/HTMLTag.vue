<template>
  <div id="HTMLTag">
    <div class="page-header">
      <h1>
        Web应用基础知识
        <small>HTML标签</small>
      </h1>
    </div>
    <transition name="fade" mode="out-in">
    <component v-bind:is="questionNum"></component>
    </transition>
  </div>
</template>

<script>

import HTMLTagtest01 from './HTMLTag_test/HTMLTag_test_01.vue'
import HTMLTagtest02 from './HTMLTag_test/HTMLTag_test_02.vue'
import HTMLTagtest03 from './HTMLTag_test/HTMLTag_test_03.vue'
import HTMLTagtest04 from './HTMLTag_test/HTMLTag_test_04.vue'
import HTMLTagtest05 from './HTMLTag_test/HTMLTag_test_05.vue'

export default {
  name: 'html',
  computed: {
    isDisabled: function () {
      return true
    },
    questionNum: function () {
      var num = this.$store.state.questionNum >= 10 ? this.$store.state.questionNum : ('0' + this.$store.state.questionNum)
      return 'HTMLTag_test_' + num
    }
  },
  components: {
    'HTMLTag_test_01': HTMLTagtest01,
    'HTMLTag_test_02': HTMLTagtest02,
    'HTMLTag_test_03': HTMLTagtest03,
    'HTMLTag_test_04': HTMLTagtest04,
    'HTMLTag_test_05': HTMLTagtest05
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

  .fade-enter {
    padding-left: 140px;
    opacity: 0;
  }
  .fade-enter-active {
    transition: all .8s ease;
  }
  .fade-leave-active {
   transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .fade-leave-active {
    padding-left: 140px;
    opacity: 0;
  }
</style>
