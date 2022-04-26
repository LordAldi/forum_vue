<template>
  <h1>{{ category.name }}</h1>
  <ForumList :title="category.name" :forums="getForumFromCategory(category)" />
</template>

<script>
import sourceData from '@/data.json'
import ForumList from '@/components/ForumList'
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
      return sourceData.categories.find((category) => category.id === this.id)
    }
  },
  methods: {
    getForumFromCategory(category) {
      return sourceData.forums.filter(
        (forum) => forum.categoryId === category.id
      )
    }
  }
}
</script>
