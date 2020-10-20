<template>
  <header class="bg-red-800 ">
    <nav class="lg:flex lg:justify-between lg:px-5 lg:py-2">
      <div class="flex px-5 py-2 flex-wrap justify-between items-center lg:p-0">
        <div>
          <nuxt-link to="/"><img class="h-16" src="https://www.lib.ua.edu/wp-content/themes/roots-ualib/assets/img/ualib-logo-capstone.png" alt="University Libraries Logo"></nuxt-link>
        </div>
        <div class="lg:hidden flex">
          <nuxt-link class="block py-2 text-white px-4 fa-lg" to="/"><font-awesome-icon icon="user"/></nuxt-link>
          <button @click="isOpen = !isOpen" type="button" class="block text-white">
            <font-awesome-icon v-if="!isOpen" icon="bars" class="fa-2x fill-current"/>
            <font-awesome-icon v-if="isOpen" icon="times" class="fa-2x fill-current"/>
          </button>
          <!-- <button v-if="isOpen" @click="isOpen = false" class="fixed inset-0 h-full w-full bg-black opacity-50 cursor-default"></button> -->
        </div>
      </div>
      <div :class="isOpen ? 'block' : 'hidden'" class="lg:flex lg:items-center">
          <div 
            v-for="(item, index) in items" 
            :key="item.heading" 
            class="dropdown px-4 h-full flex flex-col">
            <button @click="setSelectedIndex(index)" class="py-2 w-full h-full text-white flex items-center justify-between">
              <span>{{ item.heading }}</span>
              <font-awesome-icon v-if="index !== selected" icon="angle-down" class="fa-fw m-1"/>
              <font-awesome-icon v-if="index == selected" icon="times" class="fa-fw m-1"/>
            </button>
            <div :class="{active:index == selected}" class="lg:absolute lg:left-0 dropdown-content flex flex-col bg-white lg:mt-20 hidden">
              <nuxt-link v-for="link in item.links" :key="link.title" class="px-4 py-2  text-red-800 hover:bg-gray-200" to="/"><font-awesome-icon :icon="[link.iconClass, link.icon]" class="fa-fw fill-current" /> {{ link.title }}</nuxt-link>
            </div>
          </div>
          <nuxt-link class="py-2 text-white px-4 h-full flex items-center" to="/">Giving</nuxt-link>
          <nuxt-link class="sm:hidden py-2 text-white px-4 h-full lg:flex items-center" to="/"><span class="h5"><font-awesome-icon icon="user" /></span></nuxt-link>
      </div> 
    </nav>
  </header>
</template>

<script>
  export default {
    data() {
      return {
        isOpen: false,
        selected: undefined,
        items: [
          {
            heading: 'Research Tools',
            links: [ 
              {
                title: 'Scout',
                icon: 'binoculars',
              },
              {
                title: 'Research Guides',
                icon: 'compass',
              },
              {
                title: 'Music Library',
                icon: 'music',
              },
              {
                title: 'Libraries Catalog',
                icon: 'search',
              },
              {
                title: 'E-Journals',
                icon: 'bolt',
              },
              {
                title: 'Special Collections',
                icon: 'search-plus',
              },
              {
                title: 'Databases',
                icon: 'database',
              },
              {
                title: 'Distance Education',
                icon: 'globe',
              },
              {
                title: 'Citation Managers',
                icon: 'folder',
              },
              {
                title: 'Google Scholar',
                icon: 'google',
                iconClass: 'fab'
              },
              {
                title: 'Government Information, Statistics, Data',
                icon: 'chart-bar',
              },
              {
                title: 'Research Data Services',
                icon: 'archive',
              },
            ]
          }, 
          {
            heading: 'Using the Library',
            links: [ 
              {
                title: 'Find a Place to Study',
                icon: 'lightbulb',
              },
              {
                title: 'Computers and Equipment',
                icon: 'desktop',
              },
              {
                title: 'Classes and Workshops',
                icon: 'calendar-alt',
              },
              {
                title: 'Borrow, Renew & Course Reserves',
                icon: 'book',
              },
              {
                title: 'Interlibrary Loan',
                icon: 'exchange-alt',
              },
              {
                title: 'Information for Students',
                icon: 'pencil-alt',
              },
              {
                title: 'Digital Humanities Center',
                icon: 'tachometer-alt',
              },
              {
                title: 'Sanford Media Center',
                icon: 'cubes',
              },
              {
                title: 'Library Software',
                icon: 'pencil-alt',
              },
              {
                title: 'Accessibility',
                icon: 'accessible-icon',
                iconClass: 'fab'
              },
              {
                title: 'Information for Faculty',
                icon: 'graduation-cap',
              },
            ]
          }, 
          {
            heading: 'About',
            links: [
              
              { 
                title: 'Hours',
                icon: 'clock'
              },
              { 
                title: 'Directory',
                icon: 'users'
              },
              { 
                title: 'News and Events',
                icon: 'newspaper'
              },
              { 
                title: 'Policies',
                icon: 'sitemap'
              },
              { 
                title: 'Libraries Annex', 
                icon: 'building'
              },
              { 
                title: 'Support UA Libraries',
                icon: 'gift'
              },
              {
                title: 'Social Media', 
                icon: 'share-alt'
              },
              {
                title: 'About the Libraries',
                icon: 'university'
              },
            ]
          },
          {
            heading: 'Library Help',
            links: [
              {
                title: 'Ask a Librarian',
                icon: 'question-circle'
              },
              {
                title: 'Liaisons',
                icon: 'comment'
              },
              {
                title: 'Run into a Website Issue?',
                icon: 'envelope'
              },
              {
                title: 'Connect to a Wireless Network',
                icon: 'wifi'
              },
              {
                title: 'Request a Research Consultation',
                icon: 'comments'
              },
              {
                title: 'Report a Login Problem',
                icon: 'sign-in-alt'
              },
              {
                title: 'Tutorials and Instructional Videos',
                icon: 'question-circle'
              },
            ]
          }
          
        ]
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
  .active {
    display: flex;
  }
</style>
