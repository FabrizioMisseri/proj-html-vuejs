<script>
export default {
    name: "partnerSection",

}
</script>

<template>
    <section>
        <div class="container flex align-center">

            <div class="box">
                <img src="../../assets/imgs/img/h1-clients-img-1.png" alt="">
            </div>

            <div class="box">
                <img src="../../assets/imgs/img/h1-clients-img-2.png" alt="">
            </div>

            <div class="box">
                <img src="../../assets/imgs/img/h1-clients-img-3.png" alt="">
            </div>

            <div class="box">
                <img src="../../assets/imgs/img/h1-clients-img-4.png" alt="">
            </div>

            <div class="box">
                <img src="../../assets/imgs/img/h1-clients-img-5.png" alt="">
            </div>

        </div>

    </section>
</template>

<style lang="scss" scoped>
@use "../../styles/partials/variables" as *;

section {
    background-color: $color-bg-partners;

    .container {
        width: 70%;
        min-height: 250px;


        .box {
            width: 20%;
        }
    }

}
</style>