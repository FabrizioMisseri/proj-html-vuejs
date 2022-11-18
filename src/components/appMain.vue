<script>
import appBanners from './mainComps/appBanners.vue';
import appInners from './mainComps/appInners.vue';

export default {
    name: "appMain",

    components: {
        appBanners,
        appInners,
    }
}
</script>

<template>
    <div>
        <appBanners />
        <appInners />
        MAIN
    </div>
    <!-- 
    pizzaSpecials
    pizzaBuilder
    testimonialSection
    clientSection
    appProducts
    pizzaDeals
    appForm
 -->
</template>

<style lang="scss" scoped>

</style>