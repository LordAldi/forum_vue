<template>
  <div class="col-full">
    <div class="thread-list">
      <h2 class="list-title">Threads</h2>

      <div v-for="thread in threads" :key="thread.id" class="thread">
        <ThreadItem :thread="thread" />
      </div>
    </div>
  </div>
</template>
<script>
import ThreadItem from './ThreadItem.vue'
export default {
  props: {
    threads: {
      type: Array,
      required: true
    }
  },
  components: { ThreadItem }
}
</script>
<style></style>
