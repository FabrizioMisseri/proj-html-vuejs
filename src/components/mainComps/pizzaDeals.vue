<script>
export default {
    name: "pizzaDeals",
}
</script>

<template>

    <section class="container flex">
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
                        <!-- 1 block -->
                        <li class="flex">
                            <div class="data">
                                <p class="huge-size brown-font">02</p>
                                <p>NOV</p>
                            </div>
                            <div class="event">
                                <p class="mb-1">
                                    TERRAZZA PATIO DINING SPACE OPENING THIS WEEKEND
                                </p>
                                <p class="brown-font small-size">
                                    <span><i class="fa-solid fa-location-dot"></i></span>
                                    <span>204 pizzetta Tommasino ecc...</span>
                                </p>
                            </div>
                        </li>

                        <!-- 2 block -->
                        <li class="flex">
                            <div class="data">
                                <p class="huge-size brown-font">02</p>
                                <p>NOV</p>
                            </div>
                            <div class="event">
                                <p class="mb-1">
                                    TERRAZZA PATIO DINING SPACE OPENING THIS WEEKEND
                                </p>
                                <p class="brown-font small-size">
                                    <span><i class="fa-solid fa-location-dot"></i></span>
                                    <span>204 pizzetta Tommasino ecc...</span>
                                </p>
                            </div>
                        </li>

                        <!-- 3 block -->
                        <li class="flex">
                            <div class="data">
                                <p class="huge-size brown-font">02</p>
                                <p>NOV</p>
                            </div>
                            <div class="event">
                                <p class="mb-1">
                                    TERRAZZA PATIO DINING SPACE OPENING THIS WEEKEND
                                </p>
                                <p class="brown-font small-size">
                                    <span><i class="fa-solid fa-location-dot"></i></span>
                                    <span>204 pizzetta Tommasino ecc...</span>
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
                <!-- / TEXT CONTENT -->

            </div>
        </div>
        <!-- / SX -->


        <div class="box dx">
            <img src="../../assets/imgs/img/h3-img-5a.jpg" alt="">
        </div>

    </section>

</template>

<style lang="scss" scoped>
@use "../../styles/partials/variables" as *;

.container {
    width: 100%;

    .box {
        width: 50%;
        font-weight: 600;
        color: white;
    }

    .sx {
        padding-top: 2rem;
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
                border-bottom: 1px dashed $color-pizzaDeals;

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
}

.brown-font {
    color: $color-pizzaDeals;

}
</style>