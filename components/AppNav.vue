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
        </div>
      </div>
      <div :class="isOpen ? 'block' : 'hidden'" class="px-5 lg:flex lg:items-center">

        <!-- <div class="dropdown px-4"> -->
        <!--   <button class="py-2 w-full text-white flex items-center justify-between">Research Tools -->
        <!--     <font-awesome-icon icon="angle-down" class="fill-current" /> -->
        <!--   </button> -->
          <!--<div class="dropdown-content bg-white py-2 ">
            <nuxt-link to="/" class="block px-4 py-2 text-red-800 hover:bg-gray-200">Scout</nuxt-link>
            <nuxt-link to="/" class="block px-4 py-2 text-red-800 hover:bg-gray-200">Libraries Catalog</nuxt-link>
            <nuxt-link to="/" class="block px-4 py-2 text-red-800 hover:bg-gray-200">Databases</nuxt-link>
            <nuxt-link to="/" class="block px-4 py-2 text-red-800 hover:bg-gray-200">Google Scholar</nuxt-link>
            <nuxt-link to="/" class="block px-4 py-2 text-red-800 hover:bg-gray-200">Research Guides</nuxt-link>
            <nuxt-link to="/" class="block px-4 py-2 text-red-800 hover:bg-gray-200">E-Journals</nuxt-link>
            <nuxt-link to="/" class="block px-4 py-2 text-red-800 hover:bg-gray-200">Distance Education</nuxt-link>
            <nuxt-link to="/" class="block px-4 py-2 text-red-800 hover:bg-gray-200">Government Information, Statistics, and Data</nuxt-link>
            <nuxt-link to="/" class="block px-4 py-2 text-red-800 hover:bg-gray-200">Music Library</nuxt-link>
            <nuxt-link to="/" class="block px-4 py-2 text-red-800 hover:bg-gray-200">Special Collections</nuxt-link>
            <nuxt-link to="/" class="block px-4 py-2 text-red-800 hover:bg-gray-200">Citation Managers</nuxt-link>
            <nuxt-link to="/" class="block px-4 py-2 text-red-800 hover:bg-gray-200">Research Data Services</nuxt-link>
          </div>-->
        <!-- </div> -->

        <!-- <div class="dropdown px-4 h-full flex"> -->
        <!--   <button class="py-2 w-full text-white flex items-center justify-between">Using the Library -->
        <!--     <font-awesome-icon icon="angle-down" /> -->
        <!--   </button> -->
          <!--<div class="dropdown-content">
            <nuxt-link to="/">Find a Place to Study</nuxt-link>
            <nuxt-link to="/">Borrow, Renew & Course Reserves</nuxt-link>
            <nuxt-link to="/">Digital Humanities Center</nuxt-link>
            <nuxt-link to="/">Accessibility</nuxt-link>
            <nuxt-link to="/">Computers and Equipment</nuxt-link>
            <nuxt-link to="/">Interlibrary Loan</nuxt-link>
            <nuxt-link to="/">Sanford Media Center</nuxt-link>
            <nuxt-link to="/">Information for Faculty</nuxt-link>
            <nuxt-link to="/">Classes and Workshops</nuxt-link>
            <nuxt-link to="/">Information for Students</nuxt-link>
            <nuxt-link to="/">Library Software</nuxt-link>
          </div>-->
        <!-- </div> -->

        <!-- <div class="dropdown px-4 h-full flex"> -->
        <!--     <button class="py-2 w-full text-white flex items-center justify-between">About -->
        <!--       <font-awesome-icon icon="angle-down" /> -->
        <!--     </button> -->
            <!--<div class="dropdown-content">
              <nuxt-link to="/">Hours</nuxt-link>
              <nuxt-link to="/">Directory</nuxt-link>
              <nuxt-link to="/">News and Events</nuxt-link>
              <nuxt-link to="/">Policies</nuxt-link>
              <nuxt-link to="/">Libraries Annex</nuxt-link>
              <nuxt-link to="/">Support UA Libraries</nuxt-link>
              <nuxt-link to="/">Social Media</nuxt-link>
              <nuxt-link to="/">About the Libraries</nuxt-link>
            </div>-->
          <!-- </div> -->
          <!-- @click="selected = index" -->
          <div 
            v-for="(item, index) in items" 
            :key="item.heading" 
            class="dropdown px-4 h-full flex flex-col">
            <button @click="toggleActive($event)" class="py-2 w-full text-white flex items-center justify-between">
              <span>{{ item.heading }}</span>
              <font-awesome-icon icon="angle-down" />
            </button>
            <!-- :class="{active:index == selected}" -->
            <div  class="lg:absolute lg:left-0 dropdown-content flex flex-col bg-white lg:mt-20 hidden">
              <nuxt-link v-for="link in item.links" :key="link.title" class="px-4 py-2  text-red-800 hover:bg-gray-200" to="/"><font-awesome-icon icon="question-circle" class="fill-current" /> {{ link.title }}</nuxt-link>
              <!-- <nuxt-link class="px-4 py-2 text-red-800 hover:bg-gray-200" to="/"><font-awesome-icon icon="comment" class="fill-current" /> Liaisons</nuxt-link> -->
              <!-- <nuxt-link class="px-4 py-2 text-red-800 hover:bg-gray-200" to="/"><font-awesome-icon icon="envelope" class="fill-current" /> Run into Website Issues?</nuxt-link> -->
              <!-- <nuxt-link class="px-4 py-2 text-red-800 hover:bg-gray-200" to="/"><font-awesome-icon icon="wifi" class="fill-current" /> Connect to a Wireless Network</nuxt-link> -->
              <!-- <nuxt-link class="px-4 py-2 text-red-800 hover:bg-gray-200" to="/"><font-awesome-icon icon="comments" class="fill-current" /> Request a Research Consultation</nuxt-link> -->
              <!-- <nuxt-link class="px-4 py-2 text-red-800 hover:bg-gray-200" to="/"><font-awesome-icon icon="sign-in-alt" class="fill-current" /> Report a Login Problem</nuxt-link> -->
              <!-- <nuxt-link class="px-4 py-2 text-red-800 hover:bg-gray-200" to="/"><font-awesome-icon icon="question-circle" class="fill-current" /> Tutorials and Instructional Videos</nuxt-link> -->
            </div>
          </div>
          <nuxt-link class="block py-2 text-white px-4 h-full flex" to="/">Giving</nuxt-link>
          <nuxt-link v-if="!isOpen" class="block py-2 text-white px-4 h-full flex" to="/"><span class="h5"><font-awesome-icon icon="user" /></span></nuxt-link>
      </div> 
    </nav>
  </header>
</template>

<script>
  export default {
    data() {
      return {
        isOpen: false,
        dropdownOpen: false,
        selected: undefined,
        items: [
          {
            id: 0,
            heading: 'Research Tools',
            links: [ 
              {
                title: 'Scout',
              },
              {
                title: 'Research Guides',
              },
              {
                title: 'Music Library',
              },
              {
                title: 'Libraries Catalog',
              },
              {
                title: 'E-Journals',
              },
              {
                title: 'Special Collections',
              },
              {
                title: 'Databases',
              },
            ]
          }, 
          {
            id: 1,
            heading: 'Using the Library',
            links: [ 
              {
                title: 'Find a Place to Study',
              },
              {
                title: 'Computers and Equipment',
              },
              {
                title: 'Classes and Workshops',
              },
              {
                title: 'Borrow, Renew & Course Reserves',
              },
              {
                title: 'Interlibrary Loan',
              },
              {
                title: 'Information for Students',
              },
            ]
          }, 
          
        ]
      }
    },
    methods: {
      toggleActive (event) {
        let button = event.target.nextElementSibling
        console.log(button)
        button.classList.toggle('active')
        button.classList.toggle('hidden')
      },
       setSelectedIndex (item) {
        this.selected == this.item.id
      },
      //logIndex () {
      //  console.log(this.items.id);
      //}
    }
  
  }
</script>

<style lang="scss" scoped>
  button.active {
    display: flex;
  }
</style>
