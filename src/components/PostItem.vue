<template>
  <div class="user-info">
    <a href="#" class="user-name">{{ userById(post.userId).name }}</a>

    <a href="#">
      <img class="avatar-large" :src="userById(post.userId).avatar" alt="" />
    </a>

    <p class="desktop-only text-small">107 posts</p>
  </div>

  <div class="post-content">
    <div>
      <p>
        {{ post.text }}
      </p>
    </div>
  </div>
  <div class="post-date text-faded">
    <app-date :timestamp="post.publishedAt" />
  </div>
</template>
<script>
import sourceData from '@/data.json'
import AppDate from './AppDate.vue'

export default {
  props: {
    post: {
      required: true,
      type: Object
    }
  },
  data() {
    return {
      users: sourceData.users
    }
  },
  methods: {
    userById(userId) {
      return this.users.find((u) => u.id === userId)
    }
  },
  components: { AppDate }
}
</script>
<style></style>
