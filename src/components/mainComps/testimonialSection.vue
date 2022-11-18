<script>
export default {
    name: "testimonialSection",
}
</script>

<template>
    <section class="container flex">

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

    </section>
</template>

<style lang="scss" scoped>
.container {
    margin-top: .3rem;
    // debug
    height: 300px;

    .box {
        width: 25%;
    }
}
</style>