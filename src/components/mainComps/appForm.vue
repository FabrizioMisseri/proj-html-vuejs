<script>
export default {
    name: "appForm",
}
</script>

<template>

    <section class="flex align-center">

        <div class="container">

            <!-- FORM -->
            <div class="form flex just-around">

                <!-- PERSON -->
                <div class="large-block">
                    <input type="number" placeholder="1 person">
                </div>
                <div class="small-block">
                    <span>FOR</span>
                </div>

                <!-- DATE -->
                <div class="large-block">
                    <input type="date">
                </div>
                <div class="small-block">
                    <span>AT</span>
                </div>

                <!-- CLOCK -->
                <div class="large-block">
                    <input type="time">
                </div>
                <div class="small-block">
                </div>

                <!-- BTN SUBMIT -->
                <div class="large-block">
                    <button class="btn" type="submit">BOOK A TABLE</button>
                </div>
            </div>
            <!-- / FORM -->

        </div>

    </section>

</template>

<style lang="scss" scoped>
@use "../../styles/partials/variables" as *;

section {
    margin: .3rem 0;
    background-image: url(../../assets/imgs/img/h3-background-img-3.jpg);
    background-size: cover;
    // debug 
    min-height: 150px;
}

.container {
    width: 70%;
    color: white;
    font-weight: 600;

    .large-block {
        width: calc((100% / 15) * 3);

        input,
        .btn {
            padding: .7rem;
        }

        input {
            width: 100%;
            color: gray;
        }

        .btn {
            width: 100%;
            color: inherit;
            font-weight: inherit;
            background-color: $color-btn-form;
            border: none;
            cursor: pointer;
        }
    }

    .small-block {
        width: calc(100% / 15);
        text-align: center;
        padding: .7rem 0;
    }
}
</style>