<template>
  <h1>Welcome to the Forum</h1>
  <CategoryList :categories="categories" />
</template>

<script>
import sourceData from '@/data.json'
import CategoryList from '@/components/CategoryList'
export default {
  data() {
    return {
      categories: sourceData.categories
    }
  },
  components: { CategoryList }
}
</script>
