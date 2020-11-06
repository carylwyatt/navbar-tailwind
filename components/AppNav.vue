<template>
  <header class="bg-red-800 ">
    <nav class="lg:flex lg:justify-between lg:px-5">
      <div class="flex flex-wrap items-center justify-between px-5 lg:px-0">
        <div>
          <nuxt-link to="/"><img class="h-16 my-2" src="https://www.lib.ua.edu/wp-content/themes/roots-ualib/assets/img/ualib-logo-capstone.png" alt="University Libraries Logo"></nuxt-link>
        </div>
        <div class="flex items-center h-20 lg:hidden">
          <nuxt-link class="flex items-center h-full px-4 text-white fa-lg hover:bg-white hover:text-red-800" to="/"><font-awesome-icon icon="user" class="fa-fw"/></nuxt-link>
          <button 
            @click="isOpen = !isOpen" 
            type="button" 
            :class="isOpen ? 'bg-white text-red-800' : ''"
            class="flex items-center h-full px-4 text-white hover:bg-white hover:text-red-800">
            <font-awesome-icon v-if="!isOpen" icon="bars" class="fill-current fa-2x fa-fw"/>
            <font-awesome-icon v-if="isOpen" icon="times" class="text-red-800 bg-white fill-current fa-fw fa-2x"/>
          </button>
          <!-- <button v-if="isOpen" @click="isOpen = false" class="fixed inset-0 w-full h-full bg-black opacity-50 cursor-default"></button> -->
        </div>
      </div>
      <div :class="isOpen ? 'block' : 'hidden'" class="lg:flex lg:items-center">
          <div 
            v-for="(item, index) in menuItems.items" 
            :key="item.ID" 
            class="flex flex-col h-full dropdown">
            <button @click="setSelectedIndex(index)" 
              :class="{'bg-white':index == selected, 'text-red-800':index == selected }"
              class="flex items-center justify-between w-full h-full px-3 py-5 text-white lg:py-2 hover:bg-white hover:text-red-800">
              <span>{{ item.title }}</span>
              <font-awesome-icon v-if="index !== selected" icon="angle-down" class="m-1 -mr-1 fa-fw"/>
              <font-awesome-icon v-if="index == selected" icon="times" class="m-1 -mr-1 fa-fw"/>
            </button>
            <div 
              :class="{hidden:index !== selected}" 
              class="flex flex-col p-5 bg-white lg:absolute lg:left-0 lg:top-0 dropdown-content lg:mt-20 md:flex-row md:flex-wrap">
              <div v-for="link in item.child_items" :key="link.ID" class="w-full md:w-1/2 lg:w-1/4">
                <NavTileExternalLink v-if="link.target" :link="link"/>
                <NavTileSublinks v-else-if="link.child_items" :link="link"/>
                <NavTileInternalLink v-else :link="link"/>
              </div>
            </div>
          </div>
          <nuxt-link class="flex items-center h-full px-4 py-5 text-white lg:py-2 hover:bg-white hover:text-red-800" to="/">Giving</nuxt-link>
          <nuxt-link class="items-center hidden h-full px-4 py-5 text-white lg:py-2 lg:flex hover:bg-white hover:text-red-800" to="/"><font-awesome-icon icon="user" class="text-xl fa-fw"/></nuxt-link>
      </div> 
    </nav>
  </header>
</template>

<script>
import { mapState } from 'vuex';

  export default {
    computed: {
      ...mapState([
        'menuItems',
      ])
    },
    data() {
      return {
        isOpen: false,
        selected: undefined,
      }
    },
    methods: {
       setSelectedIndex(index) {
         if (this.selected == undefined || this.selected !== index) {
          this.selected = index
         } else {
           this.selected = undefined
         }
       },
    }
  
  }
</script>

<style lang="scss" scoped>
</style>
