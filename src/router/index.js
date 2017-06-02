import Vue from 'vue'
import Router from 'vue-router'

import HomeView from '@/views/HomeView'
import ContentView from '@/views/ContentView'
import TestView from '@/views/TestView'
import ExerciseView from '@/views/ExerciseView'
import AnswerProgressView from '@/views/AnswerProgressView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: '/Home'
    },
    {
      path: '/Home',
      component: HomeView
    },
    {
      path: '/Content',
      name: 'ContentView',
      component: ContentView
    },
    {
      path: '/Test/:type/:id',
      component: TestView,
      children: [
        {
          path: '',
          redirect: 'exercise/001'
        },
        {
          path: 'exercise/:num',
          name: 'exercise',
          component: ExerciseView
        },
        {
          path: 'answerProgress',
          name: 'AnswerProgressView',
          component: AnswerProgressView
        }
      ]
    }
  ]
})
