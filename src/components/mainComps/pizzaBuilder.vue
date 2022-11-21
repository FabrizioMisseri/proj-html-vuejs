<script>
export default {
    name: "pizzaBuilder",
}
</script>

<template>
    <section class="flex">
        <!-- TITLE -->
        <h2 class="title">
            GO AHEAD AND BUILD YOUR OWN PIZZA WE WON'T JUDGE!
        </h2>

        <!-- ROW -->
        <div class="small-item top sx"></div>
        <div class="big-item top ct"></div>
        <div class="small-item top dx"></div>

        <!-- ROW -->
        <div class="small-item central sx"></div>
        <div class="big-item central ct"></div>
        <div class="small-item central dx"></div>

        <!-- ROW -->
        <div class="small-item bottom sx"></div>
        <div class="big-item bottom ct"></div>
        <div class="small-item bottom dx"></div>

    </section>

</template>

<style lang="scss" scoped>
section {
    color: white;
    position: relative;
    width: 100%;
    height: 300px;

    .title {
        position: absolute;
        top: 15%;
        left: 25%;
        width: 15%;
        font-size: 1.5rem;
        z-index: 100;
    }

    .small-item {
        width: 7.5%;

        &.top.sx {
            background-image: url(../../assets/imgs/img/h3-background-img.jpg);
            background-size: 1000%;
            background-position: right 0% bottom 0%;
        }

        &.top.dx {
            background-image: url(../../assets/imgs/img/h3-background-img.jpg);
            background-size: 1000%;
            background-position: left 0% bottom 0%;
        }

        &.central.sx {
            background-image: url(../../assets/imgs/img/h3-background-img.jpg);
            background-size: 1000%;
            background-position: right 0% top 20%;
        }

        &.central.dx {
            background-image: url(../../assets/imgs/img/h3-background-img.jpg);
            background-size: 1000%;
            background-position: left 0% top 20%;
        }

        &.bottom.sx {
            background-image: url(../../assets/imgs/img/h3-background-img.jpg);
            background-size: 1000%;
            background-position: right 0% top 0%;
        }

        &.bottom.dx {
            background-image: url(../../assets/imgs/img/h3-background-img.jpg);
            background-size: 1000%;
            background-position: left 0% top 0%;
        }
    }

    .big-item {
        width: 85%;

        &.top.ct {
            background-image: url(../../assets/imgs/img/h3-background-img.jpg);
            background-size: 100%;
            background-position: left 7.5% bottom 0%;
        }

        &.central.ct {
            background-image: url(../../assets/imgs/img/h3-background-img.jpg);
            background-size: 100%;
            background-position: left 7.5% top 20%;
        }

        &.bottom.ct {
            background-image: url(../../assets/imgs/img/h3-background-img.jpg);
            background-size: 100%;
            background-position: left 7.5% top 80%;
        }
    }

    .central {
        height: 60%;
    }

    .bottom,
    .top {
        height: 20%;
    }



}
</style>


<!-- background-image: url(../../assets/imgs/img/h3-background-img.jpg);
    background-size: cover;
    background-repeat: no-repeat; -->