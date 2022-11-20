import { reactive } from "vue";

export const clientsBookingStore = reactive({

    clientReservation: {
        reservationName: "",
        personNumber: 0,
        date: "",
        clock: "",
    },

    bookingArray: [],
});