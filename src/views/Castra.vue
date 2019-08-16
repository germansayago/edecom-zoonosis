<template>
  <layout-default>    
    <hero-partial>
      <div slot="hero-image" class="hero-image"></div>
      <h1 slot="title" class="display-4">{{ title }}</h1>
      <p slot="lead" class="lead">{{ lead }}</p>
      <a slot="btn" class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
    </hero-partial>
    <section class="container py-5">
      <h1>section detail</h1>
    </section>    
  </layout-default>
</template>

<script>
import LayoutDefault from '@/layouts/LayoutDefault.vue'
import HeroPartial from '@/partials/HeroPartial.vue'

export default {
  name: 'castra',
  components: {
    LayoutDefault,
    HeroPartial
  },
  data() {
    return {
      title: 'Castrá',
      lead: 'This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.'
    }
  }
}
</script>

<style lang="scss">
.hero{
  .hero-image{
    background-image: url('../assets/images/image-default.jpg');  
  }
}
</style>
