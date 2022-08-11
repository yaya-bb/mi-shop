<template>
  <div>
    <nav-header></nav-header>
    <service-bar></service-bar>
    <nav-footer></nav-footer>
  </div>
</template>
<script>
import NavHeader from '@/components/NavHeader.vue'
import NavFooter from '@/components/NavFooter.vue'
import ServiceBar from '../components/ServiceBar.vue'
export default {
  name: 'home',
  components: {
    NavHeader,
    NavFooter,
    ServiceBar
  }
}
</script>
