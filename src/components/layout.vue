<template>
  <div class="container">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from './header/index.vue'
import Footer from './footer/index.vue'

export default defineComponent({
  name: 'layout',
  components: {
    Header,
    Footer
  },
  setup() {

  },
})
</script>
