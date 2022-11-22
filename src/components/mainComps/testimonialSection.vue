<script>
export default {
    name: "testimonialSection",
}
</script>

<template>
    <section>

        <div class="container flex">

            <div class="box">
                <img src="../../assets/imgs/img/h1-team-1a-700x700.jpg" alt="">
            </div>

            <div class="box">
                <img src="../../assets/imgs/img/h1-team-2a.jpg" alt="">
            </div>

            <div class="box">
                <img src="../../assets/imgs/img/h1-team-3a.jpg" alt="">
            </div>

            <div class="box">
                <img src="../../assets/imgs/img/h1-team-4a.jpg" alt="">
            </div>

        </div>


        <!-- pizza useless icon -->
        <div class="pizza-useless-icon">
            <img src="../../assets/imgs/svg/svg-4.svg" alt="">
        </div>
    </section>
</template>

<style lang="scss" scoped>
section {
    margin-top: .3rem;
    min-height: 300px;
    position: relative;


    .box {
        width: 25%;
    }


    .pizza-useless-icon {
        bottom: 5%;
    }
}
</style>