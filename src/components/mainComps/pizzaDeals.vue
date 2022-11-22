<script>
export default {
    name: "pizzaDeals",

    props: {
        arrayDeals: Array,
    }
}
</script>

<template>

    <section>

        <div class="container flex align-start">
            <!-- SX -->
            <div class="box sx">
                <div class="item">

                    <!-- TITLE -->
                    <div class="title">
                        <span class="brown-font small-size">
                            MADE WITH LOVE
                        </span>
                        <h2>
                            DELISH PIZZA DEALS
                        </h2>
                    </div>
                    <!-- / TITLE -->

                    <!-- TEXT CONTENT -->
                    <div class="content">
                        <ul>

                            <li class="flex" v-for="(deal, index) in arrayDeals" :key="index">
                                <div class="data">
                                    <p class="huge-size brown-font">{{ deal.dayEvent }}</p>
                                    <p>{{ deal.monthEvent }}</p>
                                </div>
                                <div class="event">
                                    <p class="mb-1">
                                        {{ deal.nameEvent }}
                                    </p>
                                    <p class="brown-font small-size">
                                        <span><i class="fa-solid fa-location-dot"></i></span>
                                        <span>{{ deal.mapPoint }}</span>
                                    </p>
                                </div>
                            </li>

                        </ul>
                    </div>
                    <!-- / TEXT CONTENT -->

                </div>
            </div>
            <!-- / SX -->

            <!-- DX -->
            <div class="box dx">
                <img src="../../assets/imgs/img/h3-img-5a.jpg" alt="">
            </div>
            <!-- / DX -->


            <!-- useless icon -->
            <div class="useless-icon">
                <img src="../../assets/imgs/svg/svg-9.svg" alt="">
            </div>
            <!-- pizza useless icon -->
            <div class="pizza-useless-icon">
                <img src="../../assets/imgs/svg/svg-4.svg" alt="">
            </div>

        </div>
    </section>

</template>

<style lang="scss" scoped>
@use "../../styles/partials/variables" as *;

section {
    width: 100%;
    position: relative;
    min-height: 200px;


    .box {
        width: 50%;
        font-weight: 600;
        color: white;
    }

    .sx {
        padding: 2rem 0;
        display: flex;
        justify-content: center;
        background-image: url(../../assets/imgs/img/starway-to-heaven.jpg);
        background-size: cover;
        background-position: center;

        .item {
            margin: 0 auto;
            padding-top: 1.5rem;
            width: 70%;

            li {
                padding: 2rem 0;
                border-bottom: 1px dashed $color-gold;

                &:last-child {
                    border-bottom: 0;
                }
            }

            .data {
                width: 15%;
            }

            .event {
                width: 85%;
            }
        }
    }

    .useless-icon {
        position: absolute;
        top: 0;
        right: 0;
        width: 25px;
        height: 25px;
        background-color: white;
        text-align: center;
        line-height: 25px;

        img {
            max-width: 60%;
        }
    }

    .pizza-useless-icon {
        bottom: 25%;
    }
}

.brown-font {
    color: $color-pizzaDeals;

}
</style>