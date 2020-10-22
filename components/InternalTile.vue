<template>

  <nuxt-link class="flex px-4 text-red-800 hover:bg-gray-200" to="/">
    <TileContent :link="link"/>
  </nuxt-link>
</template>

<script>
  export default {
    props: ['link']
    
  }
</script>

<style lang="scss" scoped>
</style>
