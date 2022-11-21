<script>
export default {
    name: "headerTop",

    props: {
        arrayNav: Array,
        arrayCart: Array,
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
                    <span v-show="item.imgContent" class="central-nav-img">
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
                <li v-for="(item, index) in arrayCart" :key="index">
                    <a href="">
                        <span v-if="item.id === 0">
                            <img :src="getImageUrl(item.imgPath)" :class="item.class" alt="">
                        </span>
                        <span v-if="item.id === 1" :class="item.classStyle">
                            <i :class="item.classIcon"></i>
                        </span>
                        <span>
                            {{ item.text }}
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
    width: 90%;
    max-width: 1250px;
    color: white;
    padding: 1rem 0;

    .lateral-box {
        width: 20%;

        &.dx {
            li {
                margin-left: .75rem;
            }
        }
    }

    .central-box {
        width: 60%;
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

@media screen and (max-width: 920px) {
    .central-box {
        .central-nav-img {
            display: none;
        }

        ul.just-between {
            justify-content: space-around;
        }
    }
}
</style>