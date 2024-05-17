<template>
  <main class="body">
      <div class="pad">
      <h1>Fun Facts About Your Garden Buddies</h1>
      </div>
      <p>Vegetable or fruit? Hover over each garden buddie to see what they are!</p>
      <!--Use of tooltips-->
      <button type="button" class="btn btn-success" data-toggle="tooltip" data-placement="right" title="Fruit!">
         Corn
      </button>
      <button type="button" class="btn btn-success" data-toggle="tooltip" data-placement="right" title="Fruit!">
        Beans
      </button>
      <button type="button" class="btn btn-success" data-toggle="tooltip" data-placement="right" title="Fruit!">
        Squash
      </button>
      <button type="button" class="btn btn-success" data-toggle="tooltip" data-placement="right" title="Vegetable!">
        Lettuce
      </button>
  <!--V-for loop for accordion content-->
  <div class="accordion" id="accordionExample">
    <div class="accordion-item" v-for="(item, index) in vegetables" :key="index">
      <h2 class="accordion-header" :id="'heading' + index">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" :data-bs-target="'#collapse' + index" :aria-expanded="index === 0 ? 'true' : 'false'" :aria-controls="'collapse' + index">
          {{ item.name }}
        </button>
      </h2>
      <div :id="'collapse' + index" class="accordion-collapse collapse" :class="{ 'show': index === 0 }" :aria-labelledby="'heading' + index" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          {{ item.description }}
        </div>
      </div>
    </div>
  </div>
</main>
</template>

<script>
export default {
  name: 'Verity',
  data(){
    return{
      vegetables: [
        { name: 'CORN', description: 'Corn is hard on the soil. As it grows it depletes nitrogen and other nutrients from the soil.' },
        { name: 'BEANS', description: 'The tallest bean plant was over 45 feet tall.' },
        { name: 'SQUASH', description: 'Squash varieties will cross-pollinate with each other.' },
        { name: 'LETTUCE', description: 'Lettuce is part of the sunflower family.' }
      ]
    }
  }
}
</script>