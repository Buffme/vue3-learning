<template>
  <div class="app-wrapper">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'

export default defineComponent({
  name: 'App',
  setup() {
    onMounted((): void => {
      console.log('App is mounting')
    })
  }
})
</script>

<style>
</style>
