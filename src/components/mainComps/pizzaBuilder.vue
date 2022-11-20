<script>
export default {
    name: "pizzaBuilder",
}
</script>

<template>

    <section class="container">

        <div class="item">
            <h2>
                GO AHEAD AND BUILD YOUR OWN PIZZA WE WON'T JUDGE!
            </h2>
        </div>

    </section>

</template>

<style lang="scss" scoped>
.container {
    width: 100%;
    color: white;
    position: relative;
    background-image: url(../../assets/imgs/img/h3-background-img.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    height: 400px;

    .item {
        position: absolute;
        top: 20%;
        left: 25%;
        width: 20%;
        max-height: 60%;
        font-size: 1.5rem;
    }

}
</style>