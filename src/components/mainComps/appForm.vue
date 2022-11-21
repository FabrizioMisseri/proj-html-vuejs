<script>
import { clientsBookingStore } from "../../clientsBookingStore";

export default {
    name: "appForm",

    data() {
        return {
            clientsBookingStore,
        }
    },

    methods: {
        saveOrder() {
            this.clientsBookingStore.clientReservation.reservationName = prompt("Prenotazione a nome di: ");
            this.clientsBookingStore.bookingArray.push(this.clientsBookingStore.clientReservation);
            this.clientsBookingStore.clientReservation = {
                reservationName: "",
                personNumber: 0,
                date: "",
                clock: "",
            };
            this.thankCustomer();
        },

        thankCustomer() {
            alert("Grazie per aver prenotato con noi");
        },
    }
}
</script>

<template>

    <section class="flex align-center">

        <div class="container">

            <!-- FORM -->
            <div class="form flex just-around">

                <!-- PERSON -->
                <div class="large-block">
                    <input type="number" placeholder="1 person"
                        v-model="this.clientsBookingStore.clientReservation.personNumber">
                </div>
                <div class="small-block">
                    <span>FOR</span>
                </div>

                <!-- DATE -->
                <div class="large-block">
                    <input type="date" v-model="this.clientsBookingStore.clientReservation.date">
                </div>
                <div class="small-block">
                    <span>AT</span>
                </div>

                <!-- CLOCK -->
                <div class="large-block">
                    <input type="time" v-model="this.clientsBookingStore.clientReservation.clock">
                </div>
                <div class="small-block">
                </div>

                <!-- BTN SUBMIT -->
                <div class="large-block">
                    <button class="btn" type="submit" @click="this.saveOrder()">BOOK A TABLE</button>
                </div>
            </div>
            <!-- / FORM -->

            <p class="small-size">
                powered by me*
            </p>

        </div>

    </section>

</template>

<style lang="scss" scoped>
@use "../../styles/partials/variables" as *;

section {
    margin: .3rem 0;
    background-image: url(../../assets/imgs/img/h3-background-img-3.jpg);
    background-size: cover;
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
            height: 50px;
            padding: .6rem;
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
        line-height: 50px;
    }
}
</style>