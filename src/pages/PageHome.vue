<template>
  <h1 class="push-top">Welcome to the Forum</h1>
  <CategoryList :categories="categories" />
</template>

<script>
import CategoryList from '@/components/CategoryList'
export default {
  computed: {
    categories() {
      return this.$store.state.categories
    }
  },
  components: { CategoryList }
}
</script>
