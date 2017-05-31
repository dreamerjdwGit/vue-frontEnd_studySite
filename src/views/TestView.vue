<template>
  <div class="htmlTest">
    <nav class="navbar navbar-inverse navbar-fixed-top test-header">
      <h1>
        Web前端
        <small>{{type}}练习({{paperID}})</small>
      </h1>
    </nav>
    <transition :name="transitionName" mode="out-in">
      <router-view :list="list"></router-view>
    </transition>
    <div>
      <button v-if="Number(num)>1" @click="changeTest()">上一题</button>
      <button v-if="Number(num)<listLength" @click="changeTest(1)">下一题</button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'test-view',
  data: function () {
    return {
      transitionName: 'slide-left'
    }
  },
  computed: {
    type () {
      return this.$route.params.type
    },
    paperID () {
      return this.$route.params.id.substr(7)
    },
    num () {
      return this.$route.params.num
    },
    ...mapState({
      list: function (state) {
        return state.question.list
      }
    }),
    listLength () {
      return this.list.length
    }
  },
  created: function () {
    this.getQuestions()
  },
  watch: {
    '$route' (to, from) {
      const toArr = to.path.split('/')
      const fromArr = from.path.split('/')

      const toDepth = toArr.length
      const fromDepth = fromArr.length

      const toNum = Number(toArr[toDepth - 1])
      const fromNum = Number(fromArr[fromDepth - 1])

      this.transitionName = toNum < fromNum ? 'slide-right' : 'slide-left'
    }
  },
  methods: {
    getQuestions: function () {
      this.$store.dispatch('getQuestions', {
        type: this.$route.params.type,
        id: this.$route.params.id.substr(7)
      })
    },
    changeTest: function (id) {
      var number = 0
      if (id === 1) {
        number = Number(this.num) + 1
      } else {
        number = Number(this.num) - 1
      }
      if (number > 0 && number < 10) {
        number = '00' + number
      } else if (number >= 10 && number < 100) {
        number = '0' + number
      }
      this.$router.push({ path: '/Test/' + this.type + '/' + this.$route.params.id + '/exercise/' + number })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  nav.test-header {
    text-align: center;
    color: #fff;
    margin-bottom: 0;
  }
  .question {
    margin: 0 auto;
    margin-top: 6rem;
    padding: 1rem;
  }
  
  .slide-left-enter {
    padding-left: 140px;
    opacity: 0;
  }
  .slide-left-enter-active {
    transition: all .8s ease;
  }
  .slide-left-leave-active {
   transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-left-leave-active {
    padding-left: 140px;
    opacity: 0;
  }

  .slide-right-enter {
    padding-left: 140px;
    opacity: 0;
  }
  .slide-right-enter-active {
    transition: all .8s ease;
  }
  .slide-right-leave-active {
   transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-right-leave-active {
    padding-left: 140px;
    opacity: 0;
  }


</style>
