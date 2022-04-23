<template>
  <div class="col-large push-top">
    <h1>{{ thread.title }}</h1>
    <post-list :posts="threadPosts" />
    <div class="col-full">
      <form @submit.prevent="addPost">
        <div class="form-group">
          <textarea
            v-model="newPostText"
            name=""
            id=""
            cols="30"
            rows="10"
            class="form-input"
          />
        </div>
        <div class="form-actions">
          <button class="btn-blue">Submit post</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import sourceData from '@/data.json'
import PostList from '@/components/PostList'
export default {
  props: {
    id: {
      required: true,
      type: String
    }
  },
  data() {
    return {
      threads: sourceData.threads,
      posts: sourceData.posts,
      newPostText: ''
    }
  },
  computed: {
    thread() {
      return this.threads.find((t) => t.id === this.id)
    },
    threadPosts() {
      return this.posts.filter((post) => post.threadId === this.id)
    }
  },
  methods: {
    addPost() {
      const postId = 'gilda' + Math.random()
      const post = {
        id: postId,
        text: this.newPostText,
        publishedAt: Math.floor(Date.now() / 1000),
        threadId: this.id,
        userId: 'ALXhxjwgY9PinwNGHpfai6OWyDu2'
      }
      this.newPostText = ''
      this.posts.push(post)
      this.thread.push(postId)
    }
  },
  components: { PostList }
}
</script>
