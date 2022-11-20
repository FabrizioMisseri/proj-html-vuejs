<script>
export default {
    name: "appProducts",

}
</script>

<template>
    <section>

        <div class="container">
            <p class="flavour-text small-size mb-1">
                CHOOSE YOUR FLAVOUR
            </p>
            <h2>
                THE BEST PIZZA MENU IN TOWN
            </h2>
            <p class="text-content">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum tempora veniam nostrum exercitationem
                molestiae molestias hic.
            </p>

            <!-- PIZZE CHE GIRANO -->

        </div>

    </section>
</template>

<style lang="scss" scoped>
@use "../../styles/partials/variables" as *;

section {
    padding: 3rem 0;
}

.container {
    width: 30%;
    text-align: center;

    .flavour-text {
        color: $color-btns-prev-next;
    }

    h2 {
        font-size: 1.55rem;
        margin-bottom: .75rem;
    }

    .text-content {
        color: $color-inner;
    }
}
</style>