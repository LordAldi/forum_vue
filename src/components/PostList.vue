<template>
  <div class="post-list">
    <div class="post" v-for="post in posts" :key="post.id">
      <PostItem :post="post" />
    </div>
  </div>
</template>
<script>
import PostItem from './PostItem.vue'
export default {
  props: {
    posts: {
      required: true,
      type: Array
    }
  },

  components: { PostItem }
}
</script>
<style></style>
