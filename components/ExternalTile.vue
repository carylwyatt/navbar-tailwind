<template>

  <a href="/" class="flex px-4 text-red-800 hover:bg-gray-200" >
    <TileContent :link="link"/>
    <!-- <font-awesome-icon :icon="[link.icon_class, link.icon]" class="fa-fw fill-current" /> --> 
    <!--   <span> -->
    <!--   <h4>{{ link.title }}</h4> -->
    <!--   <p>{{ link.post_content }}</p> --> 
    <!--   </span> -->
  </a>
</template>

<script>
  export default {
    props: ['link']
    
  }
</script>

<style lang="scss" scoped>
</style>
