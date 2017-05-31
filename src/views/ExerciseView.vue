<template>
  <div class="question">
    <h3>问题{{num}}</h3>
    <p class="question-title">{{content.title}}</p>
    <ul class="question-options">
      <li v-for="option in content.options">
        {{option}}
      </li>
    </ul>
    <br>
    <form>
      <label>解答</label>
      <input type="text"></input>
    </form>
  </div>
</template>

<script>
export default {
  name: 'exercise-view',
  props: ['list'],
  data: function () {
    return {
    }
  },
  computed: {
    num () {
      return Number(this.$route.params.num)
    },
    content () {
      return this.list[Number(this.$route.params.num) - 1]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .question-title {
    font-size: 2rem;
  }
  .question-options {
    list-style: none;
    font-size: 1.8rem;
  }
  .question-options li {
    margin-bottom: 1rem;
  }
</style>
