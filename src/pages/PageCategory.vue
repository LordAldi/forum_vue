<template>
  <h1>{{ category.name }}</h1>
  <ForumList :title="category.name" :forums="getForumFromCategory(category)" />
</template>

<script>
import ForumList from '@/components/ForumList'
import { findById } from '@/helpers'
export default {
  props: {
    id: {
      type: String
    }
  },
  components: {
    ForumList
  },
  computed: {
    category() {
      return findById(this.$store.state.categories, this.id)
    }
  },
  methods: {
    getForumFromCategory(category) {
      return this.$store.state.forums.filter(
        (forum) => forum.categoryId === category.id
      )
    }
  }
}
</script>
