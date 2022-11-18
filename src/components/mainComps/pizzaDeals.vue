<script>
export default {
    name: "pizzaDeals",
}
</script>

<template>

    <section class="container flex">

        <div class="box sx">
            <div class="item">

                <span class="brown-font small-size">
                    MADE WITH LOVE
                </span>

                <h2>
                    DELISH PIZZA DEALS
                </h2>

            </div>
        </div>

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
    }

    .sx {
        .item {
            margin: 0 auto;
            padding-top: 1.5rem;
            width: 70%;
        }
    }
}

.brown-font {
    color: $color-pizzaDeals;
    font-weight: 600;
    ;
}

.small-size {
    font-size: $small-size;
}
</style>