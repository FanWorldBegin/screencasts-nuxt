<template>
  <div>
    We are in video {{ video.name }}
    <nuxt-link :to="`/videos/${video.id}/edit`">
      <button>edit</button>
    </nuxt-link>
  </div>
</template>

<script>
  export default {
    props: ['video']
  }
</script>

<style lang="scss" scoped>
</style>
