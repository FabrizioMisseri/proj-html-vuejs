<script>
import appBanners from './mainComps/appBanners.vue';
import appInners from './mainComps/appInners.vue';
import pizzaSpecials from './mainComps/pizzaSpecials.vue';
import pizzaBuilder from './mainComps/pizzaBuilder.vue';
import testimonialSection from './mainComps/testimonialSection.vue';
import partnerSection from './mainComps/partnerSection.vue';
import appProducts from './mainComps/appProducts.vue';
import pizzaDeals from './mainComps/pizzaDeals.vue';
import appForm from './mainComps/appForm.vue';

export default {
    name: "appMain",

    components: {
        appBanners,
        appInners,
        pizzaSpecials,
        pizzaBuilder,
        testimonialSection,
        partnerSection,
        appProducts,
        pizzaDeals,
        appForm,
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
        <partnerSection />
        <appProducts />
        <pizzaDeals />
        <appForm />
    </div>

</template>

<style lang="scss" scoped>

</style>