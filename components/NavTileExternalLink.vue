<template>

  <a href="/" class="flex px-4 text-red-800 hover:bg-gray-200" >
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
