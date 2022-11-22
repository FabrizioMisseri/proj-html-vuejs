<script>
export default {
    name: "appProducts",

    props: {
        pizzaProducts: Array,
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

        <!-- TITLE BOX -->
        <div class="title-box container">
            <p class="flavour-text small-size mb-1">
                CHOOSE YOUR FLAVOUR
            </p>
            <h2>
                THE BEST PIZZA MENU IN TOWN
            </h2>
            <p class="text-content">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum tempora veniam nostrum
                exercitationem
                molestiae molestias hic.
            </p>
        </div>
        <!-- / TITLE BOX -->

        <!-- PRODUCTS -->
        <div class="slider-products flex">

            <div class="product" v-for="(product, index) in pizzaProducts" :key="index">

                <div>
                    <img :src="getImageUrl(product.imgPath)" alt="">
                </div>
                <p class="color-gold small-size">
                    {{ product.name }}
                </p>
                <p class="color-prices small-size">
                    {{ product.price }}
                </p>

            </div>

        </div>
        <!-- / PRODUCTS -->


        <!-- useless icon -->
        <div class="useless-icon">
            <img src="../../assets/imgs/svg/svg-10.svg" alt="">
        </div>
        <!-- pizza useless icon -->
        <div class="pizza-useless-icon">
            <img src="../../assets/imgs/svg/svg-4.svg" alt="">
        </div>

    </section>
</template>

<style lang="scss" scoped>
@use "../../styles/partials/variables" as *;

section {
    padding: 3rem 0;
    text-align: center;
    position: relative;
    min-height: 500px;

    // TITLE-BOX
    .title-box {

        width: 30%;
        margin-bottom: 5rem;

        .flavour-text {
            color: $color-btns-prev-next;
        }

        h2 {
            font-size: 1.55rem;
            margin-bottom: .75rem;
        }

        .text-content {
            color: $color-inner;
        }
    }

    // SLIDER PRODUCTS
    .slider-products {
        margin-top: 3rem;
        font-weight: 600;

        .product {
            width: calc(100% / 6);
            padding: 0 2rem;


            img {
                width: 100%;
            }
        }
    }

    .useless-icon {
        position: absolute;
        bottom: 0;
        right: 0;
        width: 25px;
    }


    .pizza-useless-icon {
        top: 30%;
    }
}

//typography
.color-gold {
    color: $color-gold;
}

.color-prices {
    color: $color-prices;
}
</style>