<template>

  <div class="flex px-4  text-red-800 " >
    <TileContent :link="link"/>
    <!-- <font-awesome-icon :icon="[link.icon_class, link.icon]" class="fa-fw fill-current" /> --> 
    <!--   <span> -->
    <!--     <h4>{{ link.title }}</h4> -->
    <!--     <p>{{ link.post_content }}</p> --> 
    <!--     <ul> -->
    <!--       <li v-for="subLink in link.child_items" :key="subLink.ID"> -->
    <!--         <font-awesome-icon icon="angle-right" class="fa-fw" /> -->
    <!--         <a :href="subLink.url">{{ subLink.title }}</a> -->
    <!--       </li> -->
    <!--      </ul> --> 
    <!--   </span> -->
  </div>
</template>

<script>
  export default {
    props: ['link']
    
  }
</script>

<style lang="scss" scoped>
</style>
