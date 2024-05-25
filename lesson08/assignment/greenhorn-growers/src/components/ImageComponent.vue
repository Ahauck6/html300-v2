<template>
<!--Picture component created with props-->
  <div>
    <img 
      :src="src" 
      :class="cssClass" 
      :width="width" 
      :alt="alt" 
      :title="title"
      @click="toggleBorder" 
      :style="{ border: borderStyle }"
    />
  </div>
</template>

<script>
//Props with validation
export default {
  props: {
    src: {
      type: String,
      required: true
    },
    cssClass: {
      type: String,
      default: 'img-fluid img-thumbnail'
    },
    width: {
      type: Number,
      default: 300
    },
    alt: {
      type: String,
      required: true
    },
    title: {
        type: String,
        default: 'Garden Ingredients'
    }
  },
  //Border on click through a method
  data() {
    return {
      isBorderVisible: false
    };
  },
  computed: {
    borderStyle() {
      return this.isBorderVisible ? '4px solid green' : 'none';
    }
  },
  methods: {
    toggleBorder() {
      this.isBorderVisible = !this.isBorderVisible;
    }
  }
}
</script>