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
import { store } from "../store";


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
    },

    data() {
        return {
            store,
        }
    },

    methods: {
        prevStepInner() {
            this.store.innerSelector > 0 ? this.store.innerSelector-- : this.store.innerSelector = this.store.innersArray.length - 1;
        },

        nextStepInner() {
            this.store.innerSelector < this.store.innersArray.length - 1 ? this.store.innerSelector++ : this.store.innerSelector = 0;
        },
    },
}
</script>

<template>
    <div>
        <appBanners />
        <appInners :innerSelector="this.store.innerSelector" :innersArray="this.store.innersArray"
            @btnPrevClicked="this.prevStepInner()" @btnNextClicked="this.nextStepInner()" />
        <pizzaSpecials />
        <pizzaBuilder />
        <testimonialSection />
        <partnerSection />
        <appProducts :pizzaProducts="this.store.pizzaProducts" />
        <pizzaDeals :arrayDeals="this.store.arrayDeals" />
        <appForm />
    </div>

</template>

<style lang="scss" scoped>

</style>