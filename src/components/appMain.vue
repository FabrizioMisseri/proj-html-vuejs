<script>
import appBanners from './mainComps/appBanners.vue';
import appInners from './mainComps/appInners.vue';
import pizzaSpecials from './mainComps/pizzaSpecials.vue';

export default {
    name: "appMain",

    components: {
        appBanners,
        appInners,
        pizzaSpecials,
    }
}
</script>

<template>
    <div>
        <appBanners />
        <appInners />
        <pizzaSpecials />
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