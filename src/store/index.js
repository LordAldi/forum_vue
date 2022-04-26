import { createStore } from 'vuex'
import sourceData from '@/data.json'
export default createStore({
  state: sourceData,

  actions: {
    createPost(ctx, post) {
      post.id = 'gilda' + Math.random()
      ctx.commit('setPost', { post })
      ctx.commit('appendPostToThread', {
        postId: post.id,
        threadId: post.threadId
      })
    }
  },
  mutations: {
    setPost(state, { post }) {
      state.posts.push(post)
    },
    appendPostToThread(state, { postId, threadId }) {
      const thread = state.threads.find((thread) => thread.id === threadId)
      thread.posts.push(postId)
    }
  }
})
