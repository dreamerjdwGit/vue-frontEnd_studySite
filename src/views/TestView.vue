<template>
  <div class="htmlTest">
    <nav class="navbar navbar-inverse navbar-fixed-top test-header">
      <h1>
        Web前端
        <small>{{type}}练习({{paperID}})</small>
      </h1>
      <ul class="nav navbar-nav test-ul" >
        <li>
          <router-link :to="{ name: 'AnswerProgressView' }">
            答题情况
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'ContentView' }">
            返回主目录
          </router-link>
        </li>
      </ul>
    </nav>
    <transition :name="transitionName" mode="out-in">
      <router-view :question="question" :options="options" :answer="answer" :testSum="listLength" :answers="answers" v-on:submitAnswer="submitAnswer"></router-view>
    </transition>
    <div v-show="isShow" class="controlDiv">
      <button class="btn btn-primary" v-if="Number(num)>1" @click="changeTest()">上一题</button>
      <button class="btn btn-primary" v-if="Number(num)<listLength" @click="changeTest(1)">下一题</button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'test-view',
  data: function () {
    return {
      transitionName: 'slide-left',
      answers: []
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
      return this.$route.params.num ? this.$route.params.num : null
    },
    isShow () {
      return this.num
    },
    ...mapState({
      list: state => state.question.list
    }),
    listLength () {
      return this.list.length
    },
    question () {
      return this.num ? this.list[Number(this.num) - 1].title : null
    },
    options () {
      return this.num ? this.list[Number(this.num) - 1].options : null
    },
    answer () {
      if (this.answers[Number(this.num) - 1]) {
        return this.answers[Number(this.num) - 1]
      }
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

      if (toArr[toDepth - 1] === 'answerProgress') {
        this.question = null
        this.options = null
        return
      }
      const toNum = Number(toArr[toDepth - 1])
      const fromNum = Number(fromArr[fromDepth - 1])

      this.transitionName = toNum < fromNum ? 'slide-right' : 'slide-left'

      this.question = this.list[Number(toNum) - 1].title
      this.options = this.list[Number(toNum) - 1].options

      if (this.answers[Number(this.num) - 1]) {
        return this.answers[Number(this.num) - 1]
      }
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
    },
    submitAnswer (arr) {
      this.answers[arr[0] - 1] = arr[1]
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
    margin-top: 9rem;
    padding: 1rem;
  }
  .slide-left-enter {
    padding-left: 140px;
    opacity: 0;
  }
  .slide-left-enter-active {
    transition: all .5s ease;
  }
  .slide-left-leave-active {
   transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
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
    transition: all .5s ease;
  }
  .slide-right-leave-active {
   transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-right-leave-active {
    padding-left: 140px;
    opacity: 0;
  }

  ul.test-ul {
    margin: 0;
    display: flex;
    width: 100%;
    height: 3.0rem;
    text-align: center;
  }
  .test-ul>li {
    flex: 1;
  }
  .controlDiv {
    padding: 1rem;
  }
  .controlDiv>button {
    width: 7rem;
    height: 3.2rem;
    font-size: 1.8rem;
    margin-right: 1rem;
  }
</style>
