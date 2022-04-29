import PageHome from '@/pages/PageHome.vue'
import PageNotFound from '@/pages/PageNotFound.vue'
import PageThreadShow from '@/pages/PageThreadShow.vue'
import PageCategory from '@/pages/PageCategory.vue'
import PageProfile from '@/pages/PageProfile.vue'
import { createRouter, createWebHistory } from 'vue-router'
import PageForum from '@/pages/PageForum.vue'
import store from '@/store'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: PageHome
  },
  {
    path: '/me',
    name: 'Profile',
    component: PageProfile
  },
  {
    path: '/category/:id',
    name: 'Category',
    component: PageCategory,
    props: true
  },
  {
    path: '/forum/:id',
    name: 'Forum',
    component: PageForum,
    props: true
  },
  {
    path: '/thread/:id',
    name: 'ThreadShow',
    component: PageThreadShow,
    props: true,
    beforeEnter: (to, from, next) => {
      const threadExist = store.state.threads.find(
        (thread) => thread.id === to.params.id
      )
      if (threadExist) {
        return next()
      } else {
        next({
          name: 'NotFound',
          params: { pathMatch: to.path.substring(1).split('/') },
          query: to.query,
          hash: to.hash
        })
      }
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: PageNotFound
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
