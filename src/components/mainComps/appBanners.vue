<script>
import { def } from '@vue/shared';

export default {
    name: "appBanners",

}
</script>

<template>

    <section class="container flex just-between">

        <div class="box">
            <img src="../../assets/imgs/img/h3-img-1.jpg" alt="">
        </div>

        <div class="box">
            <img src="../../assets/imgs/img/h3-img-2.jpg" alt="">
        </div>

        <div class="box">
            <img src="../../assets/imgs/img/h3-img-3.jpg" alt="">
        </div>

        <div class="box">
            <img src="../../assets/imgs/img/h3-img-4.jpg" alt="">
        </div>

    </section>

</template>

<style lang="scss" scoped>
.container {
    width: 100%;
    padding: .3rem 0;

    .box {
        width: calc((100% / 4) - (0.9rem / 4));

        img {
            display: block;
        }
    }
}
</style>