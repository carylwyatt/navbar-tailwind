export const state = () => ({
  menuItems: []
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
