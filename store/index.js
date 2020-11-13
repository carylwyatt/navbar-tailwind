export const state = () => ({
  menuItems: []
  //menuItems: [
  //  {
  //    heading: "Research Tools",
  //    links: [
  //      {
  //        title: "Scout",
  //        icon: "binoculars",
  //        description:
  //          "Use a discovery tool that searches for books, articles, and more"
  //      },
  //      {
  //        title: "Research Guides",
  //        icon: "compass",
  //        description:
  //          "Explore subject and course specific resources in guides curated by UA librarians"
  //      },
  //      {
  //        title: "Music Library",
  //        icon: "music",
  //        description: "",
  //        subLinks: [
  //          {
  //            title: "Research Guides",
  //            url: "/"
  //          },
  //          {
  //            title: "Music Library Home",
  //            url: "/"
  //          }
  //        ]
  //      },
  //      {
  //        title: "Libraries Catalog",
  //        icon: "search",
  //        description: "Search the libraries classic catalog"
  //      },
  //      {
  //        title: "E-Journals",
  //        icon: "bolt",
  //        description:
  //          "Explore the libraries electronic resource collections and more"
  //      },
  //      {
  //        title: "Special Collections",
  //        icon: "search-plus",
  //        description: "",
  //        subLinks: [
  //          {
  //            title: "Digital Collections",
  //            url: "/"
  //          },
  //          {
  //            title: "Archival Collections",
  //            url: "/"
  //          },
  //          {
  //            title: "Hoole Special Collections",
  //            url: "/"
  //          },
  //          {
  //            title: "Williams Collection",
  //            url: "/"
  //          }
  //        ]
  //      },
  //      {
  //        title: "Databases",
  //        icon: "database",
  //        description: "Find the best library databases for your research"
  //      },
  //      {
  //        title: "Distance Education",
  //        icon: "globe",
  //        description:
  //          "Information on research, writing, and key resources for distant learners"
  //      },
  //      {
  //        title: "Citation Managers",
  //        icon: "folder",
  //        description:
  //          "Save citations, organize your research, and create bibliographies",
  //        subLinks: [
  //          {
  //            title: "RefWorks",
  //            url: "/"
  //          },
  //          {
  //            title: "EndNote",
  //            url: "/"
  //          }
  //        ]
  //      },
  //      {
  //        title: "Google Scholar",
  //        icon: "google",
  //        iconClass: "fab",
  //        description:
  //          "Search for scholarly literature through a Google web search"
  //      },
  //      {
  //        title: "Government Information, Statistics, Data",
  //        icon: "chart-bar",
  //        description: "Explore our large collection of U.S. Federal documents"
  //      },
  //      {
  //        title: "Research Data Services",
  //        icon: "archive",
  //        description:
  //          "Research data management and curation resources available at the University of Alabama",
  //        subLinks: [
  //          {
  //            title: "Research Data Management & Curation",
  //            url: "/"
  //          },
  //          {
  //            title: "UA Institutional Repository",
  //            url: "/"
  //          }
  //        ]
  //      }
  //    ]
  //  },
  //  {
  //    heading: "Using the Library",
  //    links: [
  //      {
  //        title: "Find a Place to Study",
  //        icon: "lightbulb",
  //        description: "",
  //        subLinks: [
  //          {
  //            title: "Computer Availability",
  //            url: "/"
  //          },
  //          {
  //            title: "Presentation Practice Rooms",
  //            url: "/"
  //          },
  //          {
  //            title: "Group Study Rooms",
  //            url: "/"
  //          },
  //          {
  //            title: "Spaces by Library",
  //            url: "/"
  //          }
  //        ]
  //      },
  //      {
  //        title: "Computers and Equipment",
  //        icon: "desktop",
  //        description: "",
  //        subLinks: [
  //          {
  //            title: "Print, Scan, Copy",
  //            url: "/"
  //          },
  //          {
  //            title: "3D Printing",
  //            url: "/"
  //          },
  //          {
  //            title: "Equipment",
  //            url: "/"
  //          },
  //          {
  //            title: "Whisper Booths",
  //            url: "/"
  //          }
  //        ]
  //      },
  //      {
  //        title: "Classes and Workshops",
  //        icon: "calendar-alt",
  //        description:
  //          "Register for instruction sessions and outreach opportunities"
  //      },
  //      {
  //        title: "Borrow, Renew & Course Reserves",
  //        icon: "book",
  //        description: "",
  //        subLinks: [
  //          {
  //            title: "Course Reserves",
  //            url: "/"
  //          },
  //          {
  //            title: "Find and access reserve items",
  //            url: "/"
  //          },
  //          {
  //            title: "Borrow and renew items",
  //            url: "/"
  //          }
  //        ]
  //      },
  //      {
  //        title: "Interlibrary Loan",
  //        icon: "exchange-alt",
  //        description: "",
  //        subLinks: [
  //          {
  //            title: "ILLiad",
  //            url: "/"
  //          },
  //          {
  //            title: "About Interlibrary Loan",
  //            url: "/"
  //          },
  //          {
  //            title: "About Document Delivery",
  //            url: "/"
  //          }
  //        ]
  //      },
  //      {
  //        title: "Information for Students",
  //        icon: "pencil-alt",
  //        description:
  //          "Learn more about the libraries, materials, and our services"
  //      },
  //      {
  //        title: "Digital Humanities Center",
  //        icon: "tachometer-alt",
  //        description:
  //          "Explore the digital humanities with innovative research and teaching projects"
  //      },
  //      {
  //        title: "Sanford Media Center",
  //        icon: "cubes",
  //        description: "A leading-edge facility for digital media production"
  //      },
  //      {
  //        title: "Library Software",
  //        icon: "pencil-alt",
  //        description:
  //          "Browse a list of the software available on the library computers"
  //      },
  //      {
  //        title: "Accessibility",
  //        icon: "accessible-icon",
  //        iconClass: "fab",
  //        description: "Library services and access for uses with disabilities"
  //      },
  //      {
  //        title: "Information for Faculty",
  //        icon: "graduation-cap",
  //        description: "Purchases, teaching, and research support"
  //      }
  //    ]
  //  },
  //  {
  //    heading: "About",
  //    links: [
  //      {
  //        title: "Hours",
  //        icon: "clock",
  //        description: "Library hours and locations"
  //      },
  //      {
  //        title: "Libraries Annex",
  //        icon: "building",
  //        description: "Library collections located off campus"
  //      },
  //      {
  //        title: "Directory",
  //        icon: "users",
  //        description: "UA Libraries Faculty and Staff"
  //      },
  //      {
  //        title: "Support UA Libraries",
  //        icon: "gift",
  //        description:
  //          "Help strengthen the libraries collections, services, and resources"
  //      },
  //      {
  //        title: "News and Events",
  //        icon: "newspaper",
  //        description: "The latest news and upcoming events and the libraries"
  //      },
  //      {
  //        title: "Social Media",
  //        icon: "share-alt",
  //        description: "Explore the libraries multiple social media outlets"
  //      },
  //      {
  //        title: "Policies",
  //        icon: "sitemap",
  //        description: "Learn about libraries policies and procedures"
  //      },
  //      {
  //        title: "About the Libraries",
  //        icon: "university",
  //        description: "",
  //        subLinks: [
  //          {
  //            title: "2019 Annual Report",
  //            url: "/"
  //          },
  //          {
  //            title: "Branch libraries information",
  //            url: "/"
  //          },
  //          {
  //            title: "UA Libraries Strategic Plan",
  //            url: "/"
  //          },
  //          {
  //            title: "UA Libraries Organizational Chart",
  //            url: "/"
  //          },
  //          {
  //            title: "UA Libraries Assessment",
  //            url: "/"
  //          }
  //        ]
  //      }
  //    ]
  //  },
  //  {
  //    heading: "Library Help",
  //    links: [
  //      {
  //        title: "Ask a Librarian",
  //        icon: "question-circle",
  //        description: "Read our FAQs or ask us your question now"
  //      },
  //      {
  //        title: "Request a Research Consultation",
  //        icon: "comments",
  //        description: "Meet with a specialist for in-depth research assistance"
  //      },
  //      {
  //        title: "Liaisons",
  //        icon: "comment",
  //        description: "Need research help? Reach out to your liaison"
  //      },
  //      {
  //        title: "Report a Login Problem",
  //        icon: "sign-in-alt",
  //        description: "Unable to access online resources? Report the problem"
  //      },
  //      {
  //        title: "Run into a Website Issue?",
  //        icon: "envelope",
  //        description: "Please contact Web Services for help"
  //      },
  //      {
  //        title: "Tutorials and Instructional Videos",
  //        icon: "question-circle",
  //        description:
  //          "Brief tutorials designed to help you use library services and resources",
  //        subLinks: [
  //          {
  //            title: "Tutorials and Instructional Videos Page",
  //            url: "/"
  //          },
  //          {
  //            title: "Roll Tide Research",
  //            url: "/"
  //          }
  //        ]
  //      },
  //      {
  //        title: "Connect to a Wireless Network",
  //        icon: "wifi",
  //        description:
  //          "Access the Libraries internet using a wireless connection"
  //      }
  //    ]
  //  }
  //]
});

export const mutations = {
  updateMenuData: (state, data) => {
    state.menuItems = data;
  }
};

export const actions = {
  async getMenuData({ state, commit }) {
    if (state.menuItems.length) return;

    try {
      let menuItems = await fetch("http://headless.local/wp-json/menus/v1/menus/site-navbar", {
        //headers: {
        //  "Content-Type": "application/json",
        //  "x-api-key": process.env.AWS_API_KEY
        //}
      })
        .then(response => response.json())
      

        const unnestChildren = function (children = [], depth = 0) {
          return children.reduce((a, c) => {
            const plan = {
              ID: c.ID,
              title: c.title,
              url: c.url,
              icon: c.icon,
              icon_class: c.icon_class,
              description: c.description,
            }
        
            if (c.child_items) {
              plan.child_items = unnestChildren(c.child_items, depth + 1)
            }
        
            return [
              ...a,
              plan
            ]
          }, [])
        }
        
        menuItems = unnestChildren(menuItems.items)

        commit("updateMenuData", menuItems);
    } catch (err) {
      console.log(err);
    }
  }
};
