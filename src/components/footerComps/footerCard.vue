<script>
export default {
    name: "footerCard",

    props: {
        element: Object,
    },
}
</script>

<template>

    <section class="card">

        <!-- RESTAURANTS -->
        <ul v-if="element.id === 0" class="restaurants">
            <li>
                {{ element.street }}
            </li>

            <li>
                {{ element.city }}
            </li>

            <li>
                {{ element.cellPhone }}
            </li>
        </ul>
        <!-- / RESTAURANTS -->


        <!-- WORKING HOURS -->
        <ul v-if="element.id === 1">
            <li :class="element.titleColor">
                {{ element.title }}
            </li>

            <li :class="element.textColor">
                <span>
                    {{ element.text }}
                </span>
                <span v-if="element.star" :class="element.starColor">
                    {{ element.starText }}
                </span>
            </li>

        </ul>
        <!-- / WORKING HOURS -->

    </section>

</template>

<style lang="scss" scoped>
@use "../../styles/partials/variables" as *;


.card {
    ul {
        margin: 1rem 0;

        li {
            margin: .4rem 0;
            font-weight: 600;
        }
    }

    .restaurants {
        color: gray;
    }
}


// COLORS
.color-gold {
    color: $footer-gold;
}

.color-orange {
    color: $footer-orange;
}

.color-aqua {
    color: $footer-aqua;
}

.color-gray {
    color: gray;
}
</style>