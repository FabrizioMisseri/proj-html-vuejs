<script>
export default {
    name: "headerJumbo",

    props: {
        pizza: Array,
        pizzaSelector: Number,
    },

    methods: {
        getImageUrl(url) {
            return new URL(url, import.meta.url).href;
        },
    }
}

</script>

<template>
    <section class="container flex just-center">

        <div class="btn left" @click="$emit('btnPrevClicked')">
            PREV
        </div>

        <div>
            <img :src="getImageUrl(pizza[pizzaSelector])" alt="">
        </div>

        <div class="btn right" @click="$emit('btnNextClicked')">
            NEXT
        </div>

    </section>
</template>

<style lang="scss" scoped>
.container {
    width: 100%;
    padding: 2rem 0;
    // debug
    color: brown;
    font-size: 2rem;

    .btn {
        cursor: pointer;
        position: absolute;

        &.left {
            top: 50%;
            left: 0;
        }

        &.right {
            top: 50%;
            right: 0;
        }
    }
}
</style>