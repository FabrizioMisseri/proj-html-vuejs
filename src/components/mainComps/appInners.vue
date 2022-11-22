<script>
export default {
    name: "appInners",

    props: {
        innerSelector: Number,
        innersArray: Array,
    }
}
</script>

<template>
    <section>

        <!-- BTNS PREV NEXT -->
        <span class="btn left small-size" @click="$emit('btnPrevClicked')">
            PREV
        </span>
        <span class="btn right small-size" @click="$emit('btnNextClicked')">
            NEXT
        </span>
        <!-- / BTNS PREV NEXT -->

        <!-- img bg -->
        <div class="item-bg flex align-center just-center">
            <img src="../../assets/imgs/img/h3-rev-img-5.png" alt="">
        </div>
        <!-- / img bg -->


        <!-- INNER SLIDER -->
        <div class="item flex just-center">
            <div>
                <span class="double-apex">,,</span>
            </div>

            <div class="dynamic-item" v-for="(inner, index) in innersArray" :key="index">
                <p v-if="innerSelector === index">
                    {{ inner.text }}
                </p>
                <p v-if="innerSelector === index" class="small small-size">
                    {{ inner.dailyBugle }}
                </p>
            </div>

            <div>
                <span v-for="n in 3" class="dot" :class="(innerSelector + 1) === n ? 'active' : ''"></span>
            </div>
        </div>
        <!-- / INNER SLIDER -->



    </section>

</template>

<style lang="scss" scoped>
@use "../../styles/partials/variables" as *;

section {
    z-index: 0;
    background-color: $color-inners-bg;
    position: relative;
    width: 100%;
    height: 300px;

    .item-bg {
        position: absolute;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        filter: opacity(0.2);

        img {
            width: 30%;
        }
    }

    .btn {
        cursor: pointer;
        background-color: white;
        position: absolute;
        bottom: 50%;
        padding: 0.5rem 1rem 2rem;
        border-top-left-radius: 50%;
        border-top-right-radius: 50%;
        color: $color-btns-prev-next;
        font-weight: 600;
        z-index: 2;

        &.left {
            left: 0;
            transform: rotate(90deg) translate(-50%, +50%);
            transform-origin: bottom left;
        }

        &.right {
            right: 0;
            transform: rotate(-90deg) translate(+50%, +50%);
            transform-origin: bottom right;
        }
    }



    //SLIDER
    .item {
        width: 100%;
        height: 100%;
        font-weight: 600;
        color: $color-inner;
        z-index: 2;

        .small {
            color: red;
        }

        .dot {
            display: inline-block;
            width: 8px;
            height: 8px;
            border-radius: 100%;
            background-color: $color-dark-gray;
            margin: 0 .2rem;

            &.active {
                background-color: $color-gold;
            }
        }

        .double-apex {
            font-size: 4rem;
            color: $color-gold;
            position: relative;
            transform: rotate(90deg);
        }
    }

    .item,
    .small {
        width: 50%;
        margin: .5rem auto;
        text-align: center;
    }

    //SLIDER


}
</style>