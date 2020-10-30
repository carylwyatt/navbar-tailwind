<template>
  <header class="bg-red-800 ">
    <nav class="lg:flex lg:justify-between lg:px-5 lg:py-2">
      <div class="flex flex-wrap items-center justify-between px-5 py-2 lg:p-0">
        <div>
          <nuxt-link to="/"><img class="h-16" src="https://www.lib.ua.edu/wp-content/themes/roots-ualib/assets/img/ualib-logo-capstone.png" alt="University Libraries Logo"></nuxt-link>
        </div>
        <div class="flex lg:hidden">
          <nuxt-link class="block px-4 py-2 text-white fa-lg" to="/"><font-awesome-icon icon="user"/></nuxt-link>
          <button @click="isOpen = !isOpen" type="button" class="block text-white">
            <font-awesome-icon v-if="!isOpen" icon="bars" class="fill-current fa-2x"/>
            <font-awesome-icon v-if="isOpen" icon="times" class="fill-current fa-2x"/>
          </button>
          <!-- <button v-if="isOpen" @click="isOpen = false" class="fixed inset-0 w-full h-full bg-black opacity-50 cursor-default"></button> -->
        </div>
      </div>
      <div :class="isOpen ? 'block' : 'hidden'" class="lg:flex lg:items-center">
          <div 
            v-for="(item, index) in menuItems.items" 
            :key="item.ID" 
            class="flex flex-col h-full px-4 dropdown">
            <button @click="setSelectedIndex(index)" class="flex items-center justify-between w-full h-full py-2 text-white">
              <span>{{ item.title }}</span>
              <font-awesome-icon v-if="index !== selected" icon="angle-down" class="m-1 fa-fw"/>
              <font-awesome-icon v-if="index == selected" icon="times" class="m-1 fa-fw"/>
            </button>
            <div 
              :class="{hidden:index !== selected}" 
              class="flex flex-col p-5 bg-white lg:absolute lg:left-0 lg:top-0 dropdown-content lg:mt-20 md:flex-row md:flex-wrap">
              <div v-for="link in item.child_items" :key="link.ID" class="w-full md:w-1/2 lg:w-1/4">
                <ExternalTile v-if="link.target" :link="link"/>
                <SublinksTile v-else-if="link.child_items" :link="link"/>
                <InternalTile v-else :link="link"/>
              </div>
            </div>
          </div>
          <nuxt-link class="flex items-center h-full px-4 py-2 text-white" to="/">Giving</nuxt-link>
          <nuxt-link class="items-center hidden h-full px-4 py-2 text-white lg:flex" to="/"><span class="h5"><font-awesome-icon icon="user" /></span></nuxt-link>
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
        //items: [
        //  {
        //    heading: 'Research Tools',
        //    links: [ 
        //      {
        //        title: 'Scout',
        //        icon: 'binoculars',
        //        description: 'Use a discovery tool that searches for books, articles, and more',
        //      },
        //      {
        //        title: 'Research Guides',
        //        icon: 'compass',
        //        description: 'Explore subject and course specific resources in guides curated by UA librarians',
        //      },
        //      {
        //        title: 'Music Library',
        //        icon: 'music',
        //        description: '',
        //        subLinks: [ 
        //          {
        //            title: 'Research Guides',
        //            url: '/',
        //          },
        //          {
        //            title: 'Music Library Home',
        //            url: '/',
        //          },
        //        ],
        //      },
        //      {
        //        title: 'Libraries Catalog',
        //        icon: 'search',
        //        description: 'Search the libraries classic catalog',
        //      },
        //      {
        //        title: 'E-Journals',
        //        icon: 'bolt',
        //        description: 'Explore the libraries electronic resource collections and more',
        //      },
        //      {
        //        title: 'Special Collections',
        //        icon: 'search-plus',
        //        description: '',
        //        subLinks: [ 
        //          {
        //            title: 'Digital Collections',
        //            url: '/',
        //          },
        //          {
        //            title: 'Archival Collections',
        //            url: '/',
        //          },
        //          {
        //            title: 'Hoole Special Collections',
        //            url: '/',
        //          },
        //          {
        //            title: 'Williams Collection',
        //            url: '/',
        //          },
        //        ],
        //      },
        //      {
        //        title: 'Databases',
        //        icon: 'database',
        //        description: 'Find the best library databases for your research',
        //      },
        //      {
        //        title: 'Distance Education',
        //        icon: 'globe',
        //        description: 'Information on research, writing, and key resources for distant learners',
        //      },
        //      {
        //        title: 'Citation Managers',
        //        icon: 'folder',
        //        description: 'Save citations, organize your research, and create bibliographies',
        //        subLinks: [ 
        //          {
        //            title: 'RefWorks',
        //            url: '/',
        //          },
        //          {
        //            title: 'EndNote',
        //            url: '/',
        //          },
        //        ],
        //      },
        //      {
        //        title: 'Google Scholar',
        //        icon: 'google',
        //        iconClass: 'fab',
        //        description: 'Search for scholarly literature through a Google web search',
        //      },
        //      {
        //        title: 'Government Information, Statistics, Data',
        //        icon: 'chart-bar',
        //        description: 'Explore our large collection of U.S. Federal documents',
        //      },
        //      {
        //        title: 'Research Data Services',
        //        icon: 'archive',
        //        description: 'Research data management and curation resources available at the University of Alabama',
        //        subLinks: [ 
        //          {
        //            title: 'Research Data Management & Curation',
        //            url: '/',
        //          },
        //          {
        //            title: 'UA Institutional Repository',
        //            url: '/',
        //          },
        //        ],
        //      },
        //    ]
        //  }, 
        //  {
        //    heading: 'Using the Library',
        //    links: [ 
        //      {
        //        title: 'Find a Place to Study',
        //        icon: 'lightbulb',
        //        description: '',
        //        subLinks: [ 
        //          {
        //            title: 'Computer Availability',
        //            url: '/',
        //          },
        //          {
        //            title: 'Presentation Practice Rooms',
        //            url: '/',
        //          },
        //          {
        //            title: 'Group Study Rooms',
        //            url: '/',
        //          },
        //          {
        //            title: 'Spaces by Library',
        //            url: '/',
        //          },
        //        ],
        //      },
        //      {
        //        title: 'Computers and Equipment',
        //        icon: 'desktop',
        //        description: '',
        //        subLinks: [ 
        //          {
        //            title: 'Print, Scan, Copy',
        //            url: '/',
        //          },
        //          {
        //            title: '3D Printing',
        //            url: '/',
        //          },
        //          {
        //            title: 'Equipment',
        //            url: '/',
        //          },
        //          {
        //            title: 'Whisper Booths',
        //            url: '/',
        //          },
        //        ],
        //      },
        //      {
        //        title: 'Classes and Workshops',
        //        icon: 'calendar-alt',
        //        description: 'Register for instruction sessions and outreach opportunities',
        //      },
        //      {
        //        title: 'Borrow, Renew & Course Reserves',
        //        icon: 'book',
        //        description: '',
        //        subLinks: [ 
        //          {
        //            title: 'Course Reserves',
        //            url: '/',
        //          },
        //          {
        //            title: 'Find and access reserve items',
        //            url: '/',
        //          },
        //          {
        //            title: 'Borrow and renew items',
        //            url: '/',
        //          },
        //        ],
        //      },
        //      {
        //        title: 'Interlibrary Loan',
        //        icon: 'exchange-alt',
        //        description: '',
        //        subLinks: [ 
        //          {
        //            title: 'ILLiad',
        //            url: '/',
        //          },
        //          {
        //            title: 'About Interlibrary Loan',
        //            url: '/',
        //          },
        //          {
        //            title: 'About Document Delivery',
        //            url: '/',
        //          },
        //        ],
        //      },
        //      {
        //        title: 'Information for Students',
        //        icon: 'pencil-alt',
        //        description: 'Learn more about the libraries, materials, and our services',
        //      },
        //      {
        //        title: 'Digital Humanities Center',
        //        icon: 'tachometer-alt',
        //        description: 'Explore the digital humanities with innovative research and teaching projects',
        //      },
        //      {
        //        title: 'Sanford Media Center',
        //        icon: 'cubes',
        //        description: 'A leading-edge facility for digital media production',
        //      },
        //      {
        //        title: 'Library Software',
        //        icon: 'pencil-alt',
        //        description: 'Browse a list of the software available on the library computers',
        //      },
        //      {
        //        title: 'Accessibility',
        //        icon: 'accessible-icon',
        //        iconClass: 'fab',
        //        description: 'Library services and access for uses with disabilities',
        //      },
        //      {
        //        title: 'Information for Faculty',
        //        icon: 'graduation-cap',
        //        description: 'Purchases, teaching, and research support',
        //      },
        //    ]
        //  }, 
        //  {
        //    heading: 'About',
        //    links: [
        //      
        //      { 
        //        title: 'Hours',
        //        icon: 'clock',
        //        description: 'Library hours and locations',
        //      },
        //      { 
        //        title: 'Libraries Annex', 
        //        icon: 'building',
        //        description: 'Library collections located off campus',
        //      },
        //      { 
        //        title: 'Directory',
        //        icon: 'users',
        //        description: 'UA Libraries Faculty and Staff',
        //      },
        //      { 
        //        title: 'Support UA Libraries',
        //        icon: 'gift',
        //        description: 'Help strengthen the libraries collections, services, and resources',
        //      },
        //      { 
        //        title: 'News and Events',
        //        icon: 'newspaper',
        //        description: 'The latest news and upcoming events and the libraries',
        //      },
        //      {
        //        title: 'Social Media', 
        //        icon: 'share-alt',
        //        description: 'Explore the libraries multiple social media outlets',
        //      },
        //      { 
        //        title: 'Policies',
        //        icon: 'sitemap',
        //        description: 'Learn about libraries policies and procedures',
        //      },
        //      {
        //        title: 'About the Libraries',
        //        icon: 'university',
        //        description: '',
        //        subLinks: [ 
        //          {
        //            title: '2019 Annual Report',
        //            url: '/',
        //          },
        //          {
        //            title: 'Branch libraries information',
        //            url: '/',
        //          },
        //          {
        //            title: 'UA Libraries Strategic Plan',
        //            url: '/',
        //          },
        //          {
        //            title: 'UA Libraries Organizational Chart',
        //            url: '/',
        //          },
        //          {
        //            title: 'UA Libraries Assessment',
        //            url: '/',
        //          },
        //        ],
        //      },
        //    ]
        //  },
        //  {
        //    heading: 'Library Help',
        //    links: [
        //      {
        //        title: 'Ask a Librarian',
        //        icon: 'question-circle',
        //        description: 'Read our FAQs or ask us your question now',
        //      },
        //      {
        //        title: 'Request a Research Consultation',
        //        icon: 'comments',
        //        description: 'Meet with a specialist for in-depth research assistance',
        //      },
        //      {
        //        title: 'Liaisons',
        //        icon: 'comment',
        //        description: 'Need research help? Reach out to your liaison',
        //      },
        //      {
        //        title: 'Report a Login Problem',
        //        icon: 'sign-in-alt',
        //        description: 'Unable to access online resources? Report the problem',
        //      },
        //      {
        //        title: 'Run into a Website Issue?',
        //        icon: 'envelope',
        //        description: 'Please contact Web Services for help',
        //      },
        //      {
        //        title: 'Tutorials and Instructional Videos',
        //        icon: 'question-circle',
        //        description: 'Brief tutorials designed to help you use library services and resources',
        //        subLinks: [ 
        //          {
        //            title: 'Tutorials and Instructional Videos Page',
        //            url: '/',
        //          },
        //          {
        //            title: 'Roll Tide Research',
        //            url: '/',
        //          },
        //        ],
        //      },
        //      {
        //        title: 'Connect to a Wireless Network',
        //        icon: 'wifi',
        //        description: 'Access the Libraries internet using a wireless connection',
        //      },
        //    ]
        //  }
        //  
        //]
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
