<template>

  <a href="/" class="flex px-4 text-ua-crimson hover:bg-nav-hover-gray" >
    <NavTileContent :link="link"/>
  </a>
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
