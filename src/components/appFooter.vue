<script>
import footerCard from './footerComps/footerCard.vue';
import { store } from "../store";

export default {
    name: "appFooter",

    components: {
        footerCard,
    },

    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <footer class="flex">

        <!-- SECTION SX -->
        <section class="sx">
            <!-- BG-IMG -->
            <figure></figure>

            <!-- TOP CONTAINER-->
            <div class="container just-between">

                <!-- COLUMN SX -->
                <div class="column">
                    <h4 class="color-gold">
                        FIND OUR RESTAURANTS
                    </h4>
                    <footerCard v-for="(restaurant, index) in this.store.arrayRestaurants" :key="index"
                        :element="restaurant" class="small-size" />
                </div>
                <!-- COLUMN SX -->

                <!-- COLUMN CENTER -->
                <div class="column">
                    <h4 class="color-gold">
                        WORKING HOURS
                    </h4>
                    <footerCard v-for="(turn, index) in this.store.workingHours" :key="index" :element="turn"
                        class="small-size" />
                    <p class="follow-us small-size">
                        <span class="color-gold">FOLLOW US: </span>
                        <span>
                            <i class="fa-brands fa-twitter"></i>
                            <i class="fa-brands fa-facebook"></i>
                            <i class="fa-brands fa-instagram"></i>
                            <i class="fa-brands fa-whatsapp"></i>
                        </span>
                    </p>
                </div>
                <!-- COLUMN CENTER -->

                <!-- COLUMN DX -->
                <div class="column">
                    <h3>
                        THE DON PEPPE CREW FIRST AND FOREMOST VALUES AN AUTHENTIC, WELL BACKED SLICE OF PIZZA.
                    </h3>
                </div>
                <!-- COLUMN DX -->

            </div>
            <!-- TOP CONTAINER-->

            <!-- BOTTOM -->
            <div class="container bottom flex just-between align-end">
                <!-- sx -->
                <div>
                    <span class="color-gold">
                        Created with love by
                    </span>
                    <span class="color-aqua ml-1">
                        Qode interactive
                    </span>
                </div>

                <!-- dx -->
                <div>
                    <img src="../assets/imgs/img/h5-logo-divided-header.png" alt="">
                </div>
            </div>
            <!-- BOTTOM -->

        </section>
        <!-- / SECTION SX -->




        <!-- SECTION DX -->
        <section class="dx">


        </section>
        <!-- / SECTION DX -->

    </footer>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

footer {
    width: 100%;
    min-height: 600px;
    color: white;

    .container {
        width: 90%;
        display: flex;

        &.bottom {
            padding: 3rem 0;

            img {
                max-width: 120px;
            }
        }
    }

    .sx,
    .dx {
        width: 50%;
    }

    .sx figure,
    .dx {
        background-position: center;
        background-size: cover;
    }

    .dx {
        background-image: url(../assets/imgs/img/footer-img-1.jpg);
    }

    .sx {
        position: relative;
        padding-top: 5rem;
        padding-right: 1.5rem;
        padding-left: 1.5rem;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        justify-content: space-between;


        figure {
            width: 100%;
            height: 100%;
            z-index: -1;
            position: absolute;
            left: 0;
            top: 0;
            filter: opacity(90%);
            background-image: url(../assets/imgs/img/starway-to-heaven.jpg);

        }

        .column {
            width: calc((100% / 3) - 30px);

            .follow-us {
                margin-top: 1.8rem;
                font-weight: 600;

                i {
                    margin: 0 .15rem;
                }
            }
        }
    }


}


// COLORS
.color-gold {
    color: $footer-gold;
}

.color-orange {
    color: $footer-orange;
}

.color-aqua {
    color: $footer-aqua;
}

.color-gray {
    color: gray;
}
</style>