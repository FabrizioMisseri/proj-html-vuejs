<script>
export default {
    name: "appFooter",
}
</script>

<template>
    <footer class="flex">

        <!-- SECTION DX -->
        <section class="sx">
            <!-- BG-IMG -->
            <figure></figure>

            <!-- TOP -->

            <!-- COLUMN SX -->
            <!-- COLUMN SX -->

            <!-- COLUMN CENTER -->
            <!-- COLUMN CENTER -->

            <!-- COLUMN DX -->
            <!-- COLUMN DX -->

            <!-- TOP -->

            <!-- BOTTOM -->
            <!-- BOTTOM -->

        </section>
        <!-- / SECTION DX -->


        <!-- SECTION SX -->
        <section class="dx"></section>
        <!-- / SECTION SX -->

    </footer>
</template>

<style lang="scss" scoped>
footer {
    width: 100%;
    // debug
    min-height: 600px;

    .sx,
    .dx {
        width: 50%;
    }

    .sx figure,
    .dx {
        background-position: center;
        background-size: cover;
    }

    .sx {
        position: relative;

        figure {
            width: 100%;
            height: 100%;
            z-index: -1;
            position: absolute;
            left: 0;
            top: 0;
            filter: opacity(80%);
            background-image: url(../assets/imgs/img/starway-to-heaven.jpg);

        }
    }

    .dx {
        background-image: url(../assets/imgs/img/footer-img-1.jpg);
    }

}
</style>