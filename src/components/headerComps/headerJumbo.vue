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
    <section>

        <div class="container flex just-center">

            <small class="btn left small-size" @click="$emit('btnPrevClicked')">
                PREV
            </small>

            <div>
                <img :src="getImageUrl(pizza[pizzaSelector])" alt="">
            </div>

            <small class="btn right small-size" @click="$emit('btnNextClicked')">
                NEXT
            </small>

        </div>
    </section>
</template>

<style lang="scss" scoped>
@use "../../styles/partials/variables" as *;

section {
    width: 100%;
    padding: 2rem 0;

    .btn {
        cursor: pointer;
        background-color: white;
        position: absolute;
        top: 30%;
        padding: 0.5rem 1rem 2rem;
        border-top-left-radius: 50%;
        border-top-right-radius: 50%;
        color: $color-btns-prev-next;
        font-weight: 600;



        &.left {
            left: 0;
            transform: rotate(90deg) translate(+50%, +50%);
            transform-origin: bottom left;
        }

        &.right {
            right: 0;
            transform: rotate(-90deg) translate(-50%, +50%);
            transform-origin: bottom right;
        }
    }
}
</style>

