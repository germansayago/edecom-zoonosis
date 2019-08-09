<template>
  <layout-default>
    <section class="container pb-5">
      <h1>Home</h1>
      <home-pets></home-pets>
    </section>
  </layout-default>
</template>

<script>
// @ is an alias to /src
import LayoutDefault from '@/layouts/LayoutDefault.vue'
import HomePets from '@/components/home/HomePets.vue'

export default {
  name: 'home',
  components: {
    LayoutDefault,
    HomePets
  }
}
</script>
