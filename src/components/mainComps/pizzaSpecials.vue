<script>
export default {
    name: "pizzaSpecials",

    props: {
        specialComponents: Array,
    }
}
</script>

<template>

    <section class="container flex">

        <!-- IMG SX BOX -->
        <div class="box-sx">

            <img src="../../assets/imgs/img/h1-img-7n.png" class="figure">

        </div>
        <!-- / IMG SX BOX -->


        <!-- TEXT DX BOX -->
        <div class="box-dx flex align-center">

            <div class="text-content">
                <h2>SPECIALS*</h2>
                <P>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos doloribus consequatur reiciendis
                    similique.
                </P>

                <!-- SPECIAL SMALL-ITEM -->
                <div class="small-item" v-for="(special, index) in specialComponents" :key="index">
                    <div class="price-tag">
                        <span>
                            {{ special.price }}
                        </span>
                    </div>
                    <div class="description-tag">
                        <h4>{{ special.name }}</h4>
                        <span class="small-size">
                            {{ special.text }}
                        </span>
                    </div>
                </div>
                <!-- / SPECIAL SMALL-ITEM -->

            </div>

        </div>
        <!-- / TEXT DX BOX -->

    </section>

</template>

<style lang="scss" scoped>
@use "../../styles/partials/variables" as *;

.container {
    width: 100%;
    padding: .3rem 0;
    min-height: 500px;

    .box-dx,
    .box-sx {
        width: 50%;
    }

    .box-sx {
        background-image: url(../../assets/imgs/img/h1-img-4.jpg);
        background-size: cover;
        background-repeat: no-repeat;
        position: relative;

        .figure {
            max-height: 50%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }

    .box-dx {
        .text-content {
            width: 60%;
            margin: 0 auto;

            p {
                color: $color-inner;
                margin: .5rem 0 1rem;
            }

            .small-item {
                width: 100%;
                display: flex;
                margin-bottom: 1rem;

                .price-tag,
                .description-tag {
                    color: $color-inner;
                    min-width: 15%;

                    h4 {
                        color: black;
                        margin-bottom: .25rem;
                    }
                }

                .price-tag {
                    color: $color-prices;
                    font-weight: 800;
                }
            }
        }
    }
}
</style>