<script>
import headerTop from './headerComps/headerTop.vue';
import headerJumbo from './headerComps/headerJumbo.vue';
import { store } from "../store";

export default {
    name: "appHeader",

    components: {
        headerTop,
        headerJumbo,
    },

    data() {
        return {
            store,
        }
    },

    methods: {
        prevStep() {
            this.store.pizzaSelector < this.store.pizzArray.length - 1 ? this.store.pizzaSelector++ : this.store.pizzaSelector = 0;
        },

        nextStep() {
            this.store.pizzaSelector > 0 ? this.store.pizzaSelector-- : this.store.pizzaSelector = this.store.pizzArray.length - 1;
        },
    }
}
</script>

<template>

    <header>

        <headerTop :arrayNav="store.navComponents" />
        <headerJumbo :pizza="store.pizzArray" :pizzaSelector="store.pizzaSelector" @btnPrevClicked="this.prevStep()"
            @btnNextClicked="this.nextStep()" />

    </header>

</template>

<style lang="scss" scoped>
header {
    // debug
    background-color: rgb(75, 75, 241);
    background-image: url("../assets/imgs/img/h3-rev-img-5.png");
    background-size: 500px cover;
    min-height: 700px;
    position: relative;
}
</style>