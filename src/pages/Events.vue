<template>
  <Layout>
  <div class="caroussel">
    <h1 class="text-center p-4"> les evenements </h1>
<carousel>
  <slide>
    Slide 1 Content
  </slide>
  <slide>
    Slide 2 Content
  </slide>
</carousel>
  </div>

  </Layout>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
export default {
  metaInfo: {
    title: 'events'
  },
  components: {
    Carousel,
    Slide
  },
  data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
}
</script>

<style scoped>
.caroussel { 
  width: 70%;
  margin: auto;
}
</style>
