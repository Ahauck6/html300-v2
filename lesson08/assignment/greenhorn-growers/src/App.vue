<template>
<!--Head and nav bar-->
<div class="head">
<Header>
<template #header>
<p>Greenhorn Growers</p>
</template>
</Header>
    <nav>
        <ul class="nav nav-pills nav-fill gap-2 p-1 small rounded-5 shadow-sm" id="pillNav2" role="tablist">
            <li v-for="item in navItems" :key="item.id" class="nav-item" role="presentation">
                <router-link :to="item.to" class="nav-link" active-class="active" :aria-selected="item.selected">{{ item.label }}</router-link>
            </li>
        </ul>
    </nav>
</div>
    <router-view />
    <!--Footer section-->
    <footer>
    <p v-for="item in footerItems" :key="item.id">&copy;{{ item.year }} {{ item.author }} | {{ item.location }}</p>
  </footer>
</template>

<script>

import Header from './views/HeaderView.vue';

export default {
  name: 'App',
  components: {
    Header,
  },
  //Repeated content iterated through v-for
   data() {
        return {
            navItems: [
                { id: 1, to: "/", label: "Home", selected: true },
                { id: 2, to: "/Setup", label: "Set Up", selected: false },
                { id: 3, to: "/Recipes", label: "Recipes", selected: false },
                { id: 4, to: "/Verity", label: "Veggie Verity", selected: false }
            ],
            footerItems: [
                { id: 1, year: 2024, author: 'Ashlynn Hauck', location: 'Seattle, WA' },
            ]
        };
    }
};
</script>

<style lang="scss">

//styling for heading using image of greens
.head {
  min-height: 15rem;
  grid-area: header;
  background: green;
  background-image: url('https://upload.wikimedia.org/wikipedia/commons/2/25/Collard_greens_perking_up_after_long_cold_spell_-_Flickr_-_naturalflow.jpg?20200721074448');
  background-size: cover;
  background-position: center;
  position: relative;
} 

//nav bar styling
nav {
  position: absolute;
  bottom: 0;
  width: 100%;
  a {
      color: brown;
      text-decoration: none;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      font-weight: bold;
      font-style: italic;
  }
}

.nav {
  background-color: #87A96B;
  .nav-link {
    color: #46211A;
  }
  .nav-link.active {
    background-color: #4B6F44;
    color: #46211A;
  }
  a:hover {
      font-weight: 900;
  }
}

//styling for the body
#app {
    background-color:  #FFF8DC; 
    color: brown;
    padding: .5rem .5rem 0rem .5rem;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 700;
}

//styling for footer
footer {
  background-color: #87A96B;
  grid-area: footer;
  text-align: center;
  width: 100%;
  height: 3rem;
  bottom: 0;
  color: brown;
  min-height: 20vh;
}
</style>
