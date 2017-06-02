<template>
  <div class="question">
    <h3>
      
      问题{{num}}
    </h3>
    <p class="question-title">
      <span class="glyphicon glyphicon-question-sign" aria-hidden="true"></span>
      {{question}}
    </p>
    <div class="radio question-options" v-for="(option, key) in options">
      <label>
        <input type="radio" name="optionsRadios" :value="key" ref="inputRadio" v-model="selectOptions" @click="submit">
        {{option}}
      </label>
    </div>
    <br>
    <form>
      <label>解答</label>
      <input type="text" :value="picked"></input>
    </form>
  </div>
</template>

<script>
export default {
  name: 'exercise-view',
  props: ['question', 'options', 'answer'],
  data: function () {
    return {
      selectOptions: null
    }
  },
  watch: {
    '$route' (to, from) {
      if (this.answer) {
        switch (this.answer.split('')[0]) {
          case 'A': this.selectOptions = 0; break
          case 'B': this.selectOptions = 1; break
          case 'C': this.selectOptions = 2; break
          case 'D': this.selectOptions = 3; break
        }
      } else {
        this.selectOptions = null
      }
    }
  },
  computed: {
    num () {
      return Number(this.$route.params.num)
    },
    picked () {
      var result = null
      switch (this.selectOptions) {
        case 0: result = 'A'; break
        case 1: result = 'B'; break
        case 2: result = 'C'; break
        case 3: result = 'D'; break
        default: result = null
      }
      return result
    }
  },
  methods: {
    submit () {
      console.log(this.selectOptions)
      var answer = this.options[this.selectOptions]
      this.$emit('submitAnswer', [this.num, answer])
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .question {
    font-family: "宋体",sans-serif;
  }
  h3 {
    font-weight: bold;
  }
  .question-title {
    font-size: 2rem;

  }
  .question-options {
    list-style: none;
    font-size: 1.8rem;
    letter-spacing: 0;
    padding: 0;
  }
  .question-options li {
    margin-bottom: 1rem;
  }
</style>
