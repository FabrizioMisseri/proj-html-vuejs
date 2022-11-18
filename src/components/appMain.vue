<script>
import appBanners from './mainComps/appBanners.vue';
import appInners from './mainComps/appInners.vue';
import pizzaSpecials from './mainComps/pizzaSpecials.vue';
import pizzaBuilder from './mainComps/pizzaBuilder.vue';
import testimonialSection from './mainComps/testimonialSection.vue';

export default {
    name: "appMain",

    components: {
        appBanners,
        appInners,
        pizzaSpecials,
        pizzaBuilder,
        testimonialSection,
    }
}
</script>

<template>
    <div>
        <appBanners />
        <appInners />
        <pizzaSpecials />
        <pizzaBuilder />
        <testimonialSection />
        MAIN
    </div>
    <!-- 
    clientSection
    appProducts
    pizzaDeals
    appForm
 -->
</template>

<style lang="scss" scoped>

</style>