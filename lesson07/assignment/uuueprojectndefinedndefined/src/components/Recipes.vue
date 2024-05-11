<template>
  <div>
    <div v-for="(image, index) in images" :key="index">
      <img :src="image.src" :class="image.class" :width="image.width" :alt="image.alt" />
    </div>
  </div>  
              <div class="row border border-success">
              <h3 class="red center">GRILLED SQUASH</h3>
              <p>Cook Time: 15 mins</p>
              <p>Ingredients: 4 medium sized squash, 1/2 cup olive oil, salt, pepper, and thyme.</p>
              <p>Instructions: 1. Preheat the grill to medium heat. 2.Cut squash horizontally into at least 1/2 inch thick pieces. 3. Brush olive oil onto squash and season. 4. Grill squash for 7-8 mins per side depending on desired tenderness. Serve.</p>
              </div>
              <div class="row border border-success">
              <h3 class="red center">GRILLED CORN</h3>
              <p>Cook Time: 15 mins</p>
              <p>Ingredients: 5 stocks of corn, 1/2 cup melted butter, salt, and pepper.</p>
              <p>Instructions: 1. Preheat the grill to medium heat. 2. Peel back the husks of the corn to the base and remove the threads. 3. Brush the corn with melted butter and season. Cover the corn with the husks. 4. Grill for 15 mins and rotate occasionally. Serve.</p>
              </div>
              <div class="row border border-success">
              <h3 class="red center">SAUTEED GREEN BEANS</h3>
              <p>Cook Time: 6 mins</p>
              <P>Ingredients: handful of green beans, 2 cloves of garlic, 1/4 cup olive oil, salt, and pepper</P>
              <p>Instructions: 1. Bring a large pan of water to boil. 2. Cook for 4 mins. Then drain and rinse under cold water. 3. Heat oil over medium heat in skillet. 4. Add beans and garlic for two mins. Add seasoning when stirring beans. Serve. </p>
              </div>
              <div class="row border border-success">
              <h3 class="red center">LETTUCE SALAD</h3>
              <p>Cook Time: 3 mins</p>
              <p>Ingredients: lettuce, shallots, lemon, parmesan, olive oil, salt, pepper, and crushed red pepper flakes </p>
              <p>Instructions: 1. Take desired amount of lettuce and place in a large bowl. 2. Add 2 thinly sliced shallots, red pepper flakes, and a cup of grated parmesan to the bowl. 3. Add dressing(salt, pepper, olive oil, lemon juice) to salad bowl and toss. Serve.</p>
              </div>
</template>

<script>
export default {
    name: 'Recipes',
  data() {
    return {
      images: [
        { 
          src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Squash.jpg/690px-Squash.jpg?20051008204649',
          class: 'img-fluid img-thumbnail',
          width: 300,
          alt: 'A squash cut in half.'
        },
        { 
          src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Fresh_Sweet_Corn.jpg/1200px-Fresh_Sweet_Corn.jpg?20210616164625',
          class: 'img-fluid img-thumbnail',
          width: 300,
          alt: 'An image of corn still in the husk.'
        },
        { 
          src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Green_beans_169clue.jpg/1200px-Green_beans_169clue.jpg?20150414133201',
          class: 'img-fluid img-thumbnail',
          width: 300,
          alt: 'A pile of beans'
        },
        { 
          src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Lettuce_%284988502260%29.jpg/1200px-Lettuce_%284988502260%29.jpg?20130321175217',
          class: 'img-fluid img-thumbnail',
          width: 300,
          alt: 'An image of lettuce.'
        }
      ]
    };
  }
};
</script>