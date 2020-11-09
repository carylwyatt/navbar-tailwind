<template>
  <div class="flex py-3 md:p-3">
  <font-awesome-icon :icon="[link.icon_class, link.icon]" class="mt-1 mr-2 text-2xl fill-current text-icon-gray fa-fw" /> 
    <span class="ml-2">
      <h4 class="text-xl font-medium leading-tight ">{{ link.title }}</h4>
      <p class="">{{ link.description }}</p> 
      <ul class="mt-1">
        <li v-for="subLink in link.child_items" :key="subLink.ID" class="group">
          <a 
            :href="subLink.url"
            class="flex pb-1 text-body-color group-hover:text-ua-crimson " 
           >
          <font-awesome-icon icon="angle-right" class="-ml-2 text-gray-600 group-hover:text-ua-crimson fa-fw fa-lg" />
          <span class="leading-snug">{{ subLink.title }}</span></a>
        </li>
       </ul> 
    </span>
  </div>
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
