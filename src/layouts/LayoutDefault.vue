<template>
  <div>
    <navbar-partial></navbar-partial>
    <main class="main">
      <slot></slot>
    </main>
    <footer-partial></footer-partial>
  </div>
</template>

<script>
import FooterPartial from '@/partials/FooterPartial.vue'
import NavbarPartial from '@/partials/NavbarPartial.vue'

export default {
  name: 'LayoutDefault',
  components: {
    FooterPartial,
    NavbarPartial
  }
}
</script>

<style lang="scss">
html {
  position: relative;
  min-height: 100vh;
}
body {
  margin-bottom: 270px;
}

@media (max-width: 767px){
  body{
    margin-bottom: 530px;
  }
}

</style>
