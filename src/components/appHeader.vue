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
        prevStepJumbotron() {
            this.store.pizzaSelector < this.store.pizzArray.length - 1 ? this.store.pizzaSelector++ : this.store.pizzaSelector = 0;
        },

        nextStepJumbotron() {
            this.store.pizzaSelector > 0 ? this.store.pizzaSelector-- : this.store.pizzaSelector = this.store.pizzArray.length - 1;
        },
    },
}
</script>

<template>

    <header>

        <img src="../assets/imgs/img/h3-rev-img-5.png" class="background-logo">

        <div class="background-img"></div>

        <headerTop :arrayNav="this.store.navComponents" :arrayCart="this.store.cartComponents" />

        <headerJumbo :pizza="this.store.pizzArray" :pizzaSelector="this.store.pizzaSelector"
            @btnPrevClicked="this.prevStepJumbotron()" @btnNextClicked="this.nextStepJumbotron()" />

    </header>

</template>

<style lang="scss" scoped>
header {
    position: relative;
    min-height: 700px;

    .background-logo {
        position: absolute;
        max-width: 60%;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: -1;
        filter: opacity(.5);
    }

    .background-img {
        width: 100%;
        height: 100%;
        position: absolute;
        background-image: url(../assets/imgs/img/starway-to-heaven.jpg);
        background-repeat: repeat;
        background-size: contain;
        left: 0;
        top: 0;
        z-index: -2;
        filter: opacity(.9);
    }
}
</style>