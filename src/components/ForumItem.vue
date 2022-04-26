<template>
  <div class="forum-details">
    <router-link
      :to="{ name: 'Forum', params: { id: forum.id } }"
      class="text-xlarge"
    >
      {{ forum.name }}
    </router-link>
    <p>{{ forum.description }}</p>
  </div>

  <div class="threads-count">
    <p>
      <span class="count">{{ forum.threads?.length || 0 }}</span>
      {{ forum.threads?.length > 1 ? 'threads' : 'thread' }}
    </p>
  </div>

  <div class="last-thread"></div>
</template>

<script>
export default {
  props: {
    forum: {
      required: true,
      Type: Array
    }
  }
}
</script>
