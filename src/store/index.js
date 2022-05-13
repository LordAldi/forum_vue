import { createStore } from 'vuex'
import sourceData from '@/data.json'
export default createStore({
  state: {
    ...sourceData,
    authId: 'VXjpr2WHa8Ux4Bnggym8QFLdv5C3'
  },
  getters: {
    authUser: (state) => {
      const user = state.users.find((user) => user.id === state.authId)
      if (!user) return null
      return {
        ...user,
        get posts() {
          return state.posts.filter((post) => post.userId === user.id)
        },
        get postsCount() {
          return this.posts.length
        },
        get threads() {
          return state.threads.filter((post) => post.userId === user.id)
        },
        get threadsCount() {
          return this.threads.length
        }
      }
    }
  },
  actions: {
    createPost({ commit, state }, post) {
      post.id = 'gilda' + Math.random()
      post.userId = state.authId
      post.publishedAt = Math.floor(Date.now() / 1000)

      commit('setPost', { post })
      commit('appendPostToThread', {
        postId: post.id,
        threadId: post.threadId
      })
    },
    createThread({ commit, state, dispatch }, { text, title, forumId }) {
      const id = 'gilda' + Math.random()
      const userId = state.authId
      const publishedAt = Math.floor(Date.now() / 1000)
      const thread = {
        forumId,
        title,
        id,
        userId,
        publishedAt
      }
      commit('setThread', { thread })
      commit('appendThreadToForum', { threadId: id, forumId })
      commit('appendThreadToUser', { userId, threadId: id })
      dispatch('createPost', { text, threadId: id })
    },
    updateUser({ commit }, user) {
      commit('setUser', { user, userId: user.id })
    }
  },
  mutations: {
    setPost(state, { post }) {
      state.posts.push(post)
    },
    setThread(state, { thread }) {
      state.threads.push(thread)
    },
    setUser(state, { user, userId }) {
      const userIndex = state.users.findIndex((user) => user.id === userId)
      state.users[userIndex] = user
    },
    appendPostToThread(state, { postId, threadId }) {
      const thread = state.threads.find((thread) => thread.id === threadId)
      thread.posts = thread.posts || []
      thread.posts.push(postId)
    },
    appendThreadToForum(state, { threadId, forumId }) {
      const forum = state.forums.find((forum) => forum.id === forumId)
      forum.thread = forum.thread || []
      forum.thread.push(threadId)
    },
    appendThreadToUser(state, { threadId, userId }) {
      const user = state.users.find((user) => user.id === userId)
      user.thread = user.thread || []
      user.thread.push(threadId)
    }
  }
})
