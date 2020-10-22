<template>
  <div class="flex p-3">
  <font-awesome-icon :icon="[link.icon_class, link.icon]" class="fa-fw fill-current text-gray-600 fa-2x mt-1" /> 
    <span class="ml-2">
      <h4 class="text-xl">{{ link.title }}</h4>
      <p class="text-black">{{ link.post_content }}</p> 
      <ul>
        <li v-for="subLink in link.child_items" :key="subLink.ID">
          <font-awesome-icon icon="angle-right" class="fa-fw" />
          <a :href="subLink.url">{{ subLink.title }}</a>
        </li>
       </ul> 
    </span>
  </div>
</template>

<script>
  export default {
    props: ['link']
    
  }
</script>

<style lang="scss" scoped>
</style>
