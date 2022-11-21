<script>
import appHeader from "./components/appHeader.vue";
import appMain from "./components/appMain.vue";
import appFooter from "./components/appFooter.vue";

export default {
  name: "AppVue",

  components: {
    appHeader,
    appMain,
    appFooter,
  },

  data() {
    return {

    }
  },
}
</script>

<template>

  <section class="webpage">
    <appHeader />
    <appMain />
    <appFooter />
  </section>

</template>

<style lang="scss">
@use "./styles/general.scss" as *;

.webpage {
  max-width: 2000px;
}
</style>
