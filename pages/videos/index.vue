<template>
  <div>
    <nuxt-child />
    <h1>{{videos}}</h1>
      <el-button type="primary" plain>主要按钮</el-button>
      <div v-for="video in videos" :key="video.id">
      <nuxt-link :to="`/videos/${video.id}`">{{ video.name }}</nuxt-link>
    </div>
  </div>
</template>

<script>
  export default {
    head(){
      return {
        //title: `${this.videos.name}--vue`
      }
    },
    async asyncData({$axios, params}) {
      let response = await $axios.get('/api/uuid')
      if(process.client) {
        console.log('sdfdfs')
      }

      let videos = {name: 'asdasd'};
      return {
        videos
      }
    },
    methods: {
      callBack(response) {
        console.log('response', response)
      }
    }
  }

</script>

<style lang="scss" scoped>
</style>
