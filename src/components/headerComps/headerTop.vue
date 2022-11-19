<script>
export default {
    name: "headerTop",

    props: {
        arrayNav: Array,
    },

    methods: {
        getImageUrl(url) {
            return new URL(url, import.meta.url).href;
        }
    }
}
</script>

<template>
    <section class="container flex align-center">

        <!-- BTN -->
        <div class="lateral-box flex just-start">
            <a class="btn">
                ORDER ONLINE
            </a>
        </div>
        <!-- / BTN -->

        <!-- BODY TOP -->
        <nav class="central-box">
            <ul class="flex just-between align-center">
                <li v-for="(item, index) in arrayNav" :key="index">
                    <span v-show="item.imgContent">
                        <img :src="getImageUrl(arrayNav[index].imgPath)" :class="item.smallImg ? 'small-img' : ''">
                    </span>

                    <span v-show="arrayNav[index].textContent">
                        <a href="">
                            {{ item.text }}
                        </a>
                    </span>
                </li>
            </ul>
        </nav>
        <!-- /BODY TOP -->

        <!-- CART/SERCH -->
        <div class="lateral-box dx flex just-end align-center">
            <ul class="flex just-end">
                <li>
                    <a href="">
                        <span>
                            <img src="../../assets/imgs/svg/svg-1.svg" class="small-img" alt="">
                        </span>
                        <span>
                            CART
                        </span>
                    </a>
                </li>

                <li>
                    <a href="">
                        <span class="search-len small-size">
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </span>
                        <span>
                            SEARCH
                        </span>
                    </a>
                </li>
            </ul>
        </div>
        <!-- / CART/SERCH -->

    </section>
</template>

<style lang="scss" scoped>
@use "../../styles/partials/variables" as *;

.container {
    width: 80%;
    color: white;
    padding: 1rem 0;

    .lateral-box {
        width: 25%;

        &.dx {
            li {
                margin-left: .75rem;
            }
        }
    }

    .central-box {
        width: 50%;
    }

    ul {
        width: 100%;
    }

    img {
        max-width: 150px;

        &.small-img {
            width: 20px;
        }
    }

    a {
        color: inherit;

        &.btn {
            display: inline-block;
            background-color: $btn-color-orange;
            padding: .5rem 1.5rem;
        }
    }



}
</style>