<template>
  <layout-default>
    <hero-partial>
      <div slot="hero-image" class="hero-image"></div>
      <h1 slot="title" class="display-4">{{ title }}</h1>
      <p slot="lead" class="lead">{{ lead }}</p>
      <a slot="btn" class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
    </hero-partial>
    <section class="container">
      <div class="row">
        <div class="col-md-8">
          
          <div class="row text-center mb-5">
            <div class="col-md-4">
              <router-link to="cuida">
                <div class="card py-5">
                  <p>Cuidá</p>
                </div>
              </router-link>
            </div>
            <div class="col-md-4">
              <router-link to="castra">
                <div class="card py-5">
                  <p>Castrá</p>
                </div>
              </router-link>
            </div>
            <div class="col-md-4">
              <router-link to="adopta">
                <div class="card py-5">
                  <p>Adopta</p>
                </div>
              </router-link>
            </div>
          </div>

          <div class="row mb-5">
            <div class="col-md-12">
              <div class="card bg-light text-center py-3">
                <h4>teléfono EDECOM</h4>
                <h1>
                  <div v-if="isMobile">
                    <a href="tel:03584768460" class="text-decoration-none text-brand">(0358)4768460</a>
                  </div>
                  <div v-else>
                    (0358)4768460
                  </div>
                </h1>
              </div>
            </div>
          </div>

        </div>
        <div class="col-md-4">
          agenda
        </div>
      </div>
      <home-pets></home-pets>
    </section>
  </layout-default>
</template>

<script>
import LayoutDefault from '@/layouts/LayoutDefault.vue'
import HomePets from '@/components/home/HomePets.vue'
import HeroPartial from '@/partials/HeroPartial.vue'

export default {
  name: 'home',
  components: {
    LayoutDefault,
    HomePets,
    HeroPartial
  },
   data() {
    return {
      isMobile: this.$store.state.isMobile,
      title: 'Cuida',
      lead: 'This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.',
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
