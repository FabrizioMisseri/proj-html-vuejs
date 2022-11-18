<script>
export default {
    name: "appInners",


}
</script>

<template>

    <section class="container">

        <div class="item-bg">

        </div>

        <div class="item">
            <p>
                1 FORGET THE TRENDY PIZZA SHOPS, THIS HIDDEN SPOT MAKES THE BEST NEW YORK-STYLES PIZZA SLICE IN NAPLES
            </p>
            <p class="small">
                WHASHINGTON POST 2018
            </p>
        </div>

    </section>

</template>

<style lang="scss" scoped>
@use "../../styles/partials/variables" as *;

.container {
    width: 100%;
    position: relative;

    .item-bg {
        width: 100%;
        background-image: url(../../assets/imgs/img/h3-rev-img-5.png);
        background-repeat: no-repeat;
        background-size: 30%;
        background-position: center;
        filter: opacity(0.20);
        // debug
        min-height: 300px;
    }

    .item {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-weight: 600;
        color: $color-inner;

        .small {
            font-size: $small-size;
            color: red;
        }

    }

    .item,
    .small {
        width: 50%;
        margin: .5rem auto;
        text-align: center;
    }
}
</style>