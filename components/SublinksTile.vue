<template>

  <div class="flex px-4  text-red-800 " >
    <TileContent :link="link"/>
  </div>
</template>

<script>
  export default {
    props: ['link']
    
  }
</script>

<style lang="scss" scoped>
</style>
