<template>
  <div class="col-full">
    <div class="forum-list">
      <h2 class="list-title">
        <router-link
          v-if="categoryId"
          :to="{ name: 'Category', params: { id: categoryId } }"
          >{{ title }}</router-link
        >
        <span v-else>{{ title }}</span>
      </h2>

      <div class="forum-listing" v-for="forum in forums" :key="forum.id">
        <ForumItem :forum="forum" />
      </div>
    </div>
  </div>
</template>
<script>
import ForumItem from '@/components/ForumItem'

export default {
  props: {
    forums: {
      required: true,
      type: Array
    },
    title: {
      type: String,
      default: 'Forums'
    },
    categoryId: {
      type: String,
      required: false
    }
  },
  components: { ForumItem }
}
</script>
