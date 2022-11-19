<script>
export default {
    name: "appFooter",
}
</script>

<template>
    <footer class="flex">

        <!-- SECTION SX -->
        <section class="sx small-size">
            <!-- BG-IMG -->
            <figure></figure>

            <!-- TOP CONTAINER-->
            <div class="container">

                <!-- COLUMN SX -->
                <div class="column">ciao</div>
                <!-- COLUMN SX -->

                <!-- COLUMN CENTER -->
                <div class="column">ciao</div>
                <!-- COLUMN CENTER -->

                <!-- COLUMN DX -->
                <div class="column">
                    <h3 class="big-size">
                        THE DON PEPPE CREW FIRST AND FOREMOST VALUES AN AUTHENTIC, WELL BACKED SLICE OF PIZZA.
                    </h3>
                </div>
                <!-- COLUMN DX -->

            </div>
            <!-- TOP CONTAINER-->

            <!-- BOTTOM -->
            <div class="container bottom">
                <span class="color-gold">
                    Created with love by
                </span>
                <span class="color-aqua ml-1">
                    Qode interactive
                </span>
            </div>
            <!-- BOTTOM -->

        </section>
        <!-- / SECTION SX -->




        <!-- SECTION DX -->
        <section class="dx">



        </section>
        <!-- / SECTION DX -->

    </footer>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

footer {
    width: 100%;
    // debug
    min-height: 600px;
    // debug
    color: white;

    .container {
        width: 90%;
        display: flex;

        &.bottom {
            padding: 3rem 0;
        }
    }

    .sx,
    .dx {
        width: 50%;
    }

    .sx figure,
    .dx {
        background-position: center;
        background-size: cover;
    }

    .dx {
        background-image: url(../assets/imgs/img/footer-img-1.jpg);
    }

    .sx {
        position: relative;
        padding-top: 5rem;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        justify-content: space-between;


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

        .column {
            width: calc(100% / 3);
            padding: 0 1rem;

        }
    }


}

.color-gold {
    color: $footer-gold;
}

.color-orange {
    color: $footer-orange;
}

.color-aqua {
    color: $footer-aqua;
}
</style>