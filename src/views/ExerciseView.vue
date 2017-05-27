<template>
  <div class="question">
    <h2>问题{{num}}</h2>
    <p>{{list[num-1].title}}</p>
    <br>
    <form>
      <p>HTML5文件开头：</p>
      <label>解答</label>
      <input type="text"></input>
    </form>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'exercise-view',
  data: function () {
    return {
      num: this.$route.params.num
    }
  },
  computed: {
    ...mapState({
      list: function (state) {
        return state.question.list
      }
    })
  },
  created: function () {
    this.getQuestions()
  },
  watch: {
    '$route': 'getQuestions'
  },
  methods: {
    getQuestions: function () {
      this.$store.dispatch('getQuestions', {
        type: this.$route.params.type,
        id: this.$route.params.id.substr(7)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
