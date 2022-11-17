<script>
import headerTop from './headerComps/headerTop.vue';
import headerJumbo from './headerComps/headerJumbo.vue';

export default {
    name: "appHeader",

    components: {
        headerTop,
        headerJumbo,
    }
}
</script>

<template>

    <headerTop />
    <headerJumbo />

</template>

<style lang="scss" scoped>

</style>