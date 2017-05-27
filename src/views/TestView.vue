<template>
  <div class="HTMLTest">
    <nav class="navbar navbar-inverse navbar-fixed-top test-header">
      <h1>
        Web前端
        <small>{{type}}练习({{paperID}})</small>
      </h1>
    </nav>
    <transition name="slide" mode="out-in">
      <router-view ></router-view>
    </transition>
    <div>
      <button @click="nextExercise">下一题</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'test-view',
  data: function () {
    return {
      type: this.$route.params.type,
      paperID: this.$route.params.id.substr(7),
      num: this.$route.params.num
    }
  },
  methods: {
    nextExercise: function () {
      const number = '00' + (Number(this.num) + 1)
      this.$router.push({ path: '/Test/' + this.type + '/' + this.$route.params.id + '/exercise/' + number })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .test-header {
    text-align: center;
    color: #fff;
  }
  .question {
    margin: 0 auto;
    margin-top: 8rem;
    padding: 1rem;

  }
  .slide-enter {
    padding-left: 140px;
    opacity: 0;
  }
  .slide-enter-active {
    transition: all .8s ease;
  }
  .slide-leave-active {
   transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-leave-active {
    padding-left: 140px;
    opacity: 0;
  }
</style>
