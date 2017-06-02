<template>
  <div class="panel panel-default question">
    <div class="panel-heading progress">
      <div>答题进度</div>
      <div>
        <span class="warning">未作答:{{noCompleteNum}}问/</span><span>共{{testSum}}问</span>
      </div>
      <button class="btn btn-info" @click="$router.go(-1)">返回</button>
    </div>
    <div class="panel-body">
      <table class="table table-striped table-hover">
        <tbody>
          <tr v-for="i in testSum">
            <td>问题{{i}}</td>
            <td v-if="answers[i - 1] == null">未作答</td>
            <td v-else>{{answers[i - 1].split('')[0]}}</td>
            <td>修改</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'answerProgress-view',
  props: ['testSum', 'answers'],
  data: function () {
    return {
    }
  },
  computed: {
    noCompleteNum () {
      var num = 0
      for (var i = 0; i < this.testSum; i++) {
        if (!this.answers[i]) {
          num++
        }
      }
      return num
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .question {
    font-family: "宋体",sans-serif;
    font-size: 2rem;
    border-bottom: none;
  }
  .warning {
    color: red;
    font-weight: bold;
  }
  .progress {
    display: flex;
    width: 100%;
    height: 5rem;
    line-height: 3.5rem;
    text-align: center;
  }
  .progress>div:nth-child(1) {
    flex: 3;
    font-weight: bold;
  }
  .progress>div:nth-child(2) {
    flex: 7;
  }
  .progress>button {
    font-size: 2rem;
    flex: 1;
    height: 3rem;
    line-height: 1rem;
  }
</style>
