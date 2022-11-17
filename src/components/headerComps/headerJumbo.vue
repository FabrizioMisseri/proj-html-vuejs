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
            <span>
                PREV
            </span>
        </div>

        <div>
            <img :src="getImageUrl(pizza[pizzaSelector])" alt="">
        </div>

        <div class="btn right" @click="$emit('btnNextClicked')">
            <span>
                NEXT
            </span>
        </div>

    </section>
</template>

<style lang="scss" scoped>
.container {
    width: 100%;
    padding: 2rem 0;
    // debug
    color: brown;

    .btn {
        cursor: pointer;
        position: absolute;
        background-color: white;
        padding: 1rem;
        border-radius: 100%;

        &.left {
            top: 50%;
            left: 0;
            transform: rotate(90deg);
        }

        &.right {
            top: 50%;
            right: 0;
            transform: rotate(270deg);
        }
    }
}
</style>