<template>
  <div id="app">
    <nav>
     <ul class="nav nav-pills nav-fill gap-2 p-1 small rounded-5 shadow-sm" id="pillNav2" role="tablist">
      <li class="nav-item" role="presentation">
        <router-link to="../views/HomeView.vue" class="nav-link" active-class="active" aria-selected="true">Home</router-link>
      </li>
      <li class="nav-item" role="presentation">
        <router-link to="../components/Setup.vue" class="nav-link" active-class="active" aria-selected="false">Set Up</router-link>
      </li>
      <li class="nav-item" role="presentation">
        <router-link to="../components/Recipes.vue" class="nav-link" active-class="active" aria-selected="false">Recipes</router-link>
      </li>
      <li class="nav-item" role="presentation">
        <router-link to="../components/Verity.vue" class="nav-link" active-class="active" aria-selected="false">Veggie Verity</router-link>
      </li>
    </ul>
    </nav>
    <router-view />
    <footer>
            <p> &copy;2024 Ashlynn Hauck | Seattle, WA</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>
