<template>

  <nuxt-link class="flex px-4 text-red-800 hover:bg-gray-200" to="/">
    <TileContent :link="link"/>
    <!-- <font-awesome-icon :icon="[link.icon_class, link.icon]" class="fa-fw fill-current" /> --> 
    <!--   <span> -->
    <!--   <h4>{{ link.title }}</h4> -->
    <!--   <p>{{ link.post_content }}</p> --> 
    <!--   </span> -->
  </nuxt-link>
</template>

<script>
  export default {
    props: ['link']
    
  }
</script>

<style lang="scss" scoped>
</style>
