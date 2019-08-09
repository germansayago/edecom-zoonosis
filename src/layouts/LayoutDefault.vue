<template>
  <div>
    <navbar-partial></navbar-partial>
    <header-partial></header-partial>
    <main class="main">
      <slot></slot>
    </main>
    <footer-partial></footer-partial>
  </div>
</template>

<script>
import HeaderPartial from '@/partials/HeaderPartial.vue'
import FooterPartial from '@/partials/FooterPartial.vue'
import NavbarPartial from '@/partials/NavbarPartial.vue'

export default {
  name: 'LayoutDefault',
  components: {
    HeaderPartial,
    FooterPartial,
    NavbarPartial
  }
}
</script>