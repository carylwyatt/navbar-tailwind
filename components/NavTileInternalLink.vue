<template>

  <nuxt-link class="flex px-4 text-ua-crimson hover:bg-nav-hover-gray" to="/">
    <NavTileContent :link="link"/>
  </nuxt-link>
</template>

<script>
  export default {
   props: { 
      link: Object 
    } 
  }
</script>

<style lang="scss" scoped>
</style>
