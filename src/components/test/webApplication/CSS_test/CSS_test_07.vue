<template>
  <div class="question">
    <h2>问题七</h2>
    <p>子元素选择器：所有子元素和直接下一层子元素选择器的写法</p>
    <p>分别选取所有p标签元素以及parent下直接下一层p标签元素</p>
    <div class="well">
  &lt;div id=&quot;parent&quot;&gt;<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&lt;div id=&quot;child1&quot;&gt;<br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;child1&lt;p&gt;<br>
  &nbsp;&nbsp;&nbsp;&nbsp;  &lt;/div&gt;<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&lt;div id=&quot;child2&quot;&gt;<br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;child2&lt;p&gt;<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;child&lt;/p&gt;<br>
  &lt;/div&gt;
    </div>
    <br>
    <form>
      <p>所有p标签元素：</p>
      <label>解答</label>
      <input type="text"></input>
      <br><br>
      parent下直接下一层p标签元素：</p>
      <label>解答</label>
      <input type="text"></input>
      <button type="button" @click="confirm">确认</button>
    </form>
    <div id="btn">
      <button id="preBtn" @click="preQuestion" v-bind:class="{disabled: isDisabled}" class="btn btn-info">
        <span class="glyphicon glyphicon-hand-left" aria-hidden="true"></span>
        上一题
      </button>
       <button id="nextBtn" @click="nextQuestion" v-bind:class="{disabled: isDisabled}" class="btn btn-info">
        下一题
        <span class="glyphicon glyphicon-hand-right" aria-hidden="true"></span>
      </button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'css_test_06',
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
    },
    preQuestion: function () {
      this.$store.dispatch('delQuestionNum')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #btn {
    float: right;
  }
  input[type="text"] {
    width: 300px;
  }
</style>
