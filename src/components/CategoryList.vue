<template>
  <ForumList
    v-for="category in categories"
    :key="category.id"
    :forums="getForumFromCategory(category)"
    :title="category.name"
    :category-id="category.id"
  />
</template>

<script>
import ForumList from '@/components/ForumList'
export default {
  props: {
    categories: {
      type: Array,
      required: true
    }
  },
  components: { ForumList },
  methods: {
    getForumFromCategory(category) {
      return this.$store.state.forums.filter(
        (forum) => forum.categoryId === category.id
      )
    }
  }
}
</script>

<style lang="scss" scoped></style>
