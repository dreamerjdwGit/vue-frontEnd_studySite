<template>
  <div class="question">
    <h2>问题一</h2>
    <p>请用CSS的ID选择器、类选择器、标签选择器依次选取以下元素：</p>
    <div class="well">
        &lt;div id=&quot;div1&quot;&gt;a&lt;/div&gt;<br>
        &lt;div class=&quot;sample&quot;&gt;b&lt;/div&gt;<br>
        &lt;p&gt;c&lt;/p&gt;
    </div>
    <br>
    <form>
      <p>ID选择器：</p>
      <label>解答</label>
      <input type="text"></input>
      <br><br>
      <p>类选择器：</p>
      <label>解答</label>
      <input type="text"></input>
      <br><br>
      <p>标签选择器：</p>
      <label>解答</label>
      <input type="text"></input>
      <button type="button" @click="confirm">确认</button>
    </form>
    <button id="nextBtn" @click="nextQuestion" v-bind:class="{disabled: isDisabled}" class="btn btn-info">
      下一题
      <span class="glyphicon glyphicon-hand-right" aria-hidden="true"></span>
    </button>
  </div>
</template>

<script>

export default {
  name: 'css_test_01',
  data: function () {
    return {
      isDisabled: true
    }
  },
  methods: {
    confirm: function () {
      this.isDisabled = false
      return false
    },
    nextQuestion: function () {
      this.$store.dispatch('addQuestionNum')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #nextBtn {
    float: right;
  }
  input[type="text"] {
    width: 300px;
  }
</style>
