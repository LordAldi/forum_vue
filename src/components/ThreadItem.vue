<template>
  <div>
    <p>
      <router-link :to="{ name: 'ThreadShow', params: { id: thread.id } }">{{
        thread.title
      }}</router-link>
    </p>
    <p class="text-faded text-xsmall">
      By <a href="#">{{ userById(thread.userId).name }}</a
      >, <app-date :timestamp="thread.publishedAt" />.
    </p>
  </div>

  <div class="activity">
    <p class="replies-count">
      {{ thread.posts.length }}
      {{
        thread.posts.length > 1 || thread.posts.length === 0
          ? 'replies'
          : 'reply'
      }}
    </p>

    <img class="avatar-medium" :src="userById(thread.userId).avatar" alt="" />

    <div>
      <p class="text-xsmall">
        <a href="#">{{ userById(thread.userId).name }}</a>
      </p>
      <p class="text-xsmall text-faded">
        <app-date :timestamp="thread.publishedAt" />
      </p>
    </div>
  </div>
</template>
<script>
import { findById } from '@/helpers'

export default {
  props: {
    thread: {
      type: Object,
      required: true
    }
  },
  computed: {
    posts() {
      return this.$store.state.posts
    },
    users() {
      return this.$store.state.users
    }
  },
  methods: {
    userById(userId) {
      return findById(this.users, userId)
    }
  }
}
</script>
<style></style>
