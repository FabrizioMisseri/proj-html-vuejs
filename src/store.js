import { reactive } from "vue";

export const store = reactive({

    pizzaSelector: 0,

    innerSelector: 0,

    pizzArray: [
        "../../assets/imgs/img/h3-rev-img-2.png",
        "../../assets/imgs/img/h3-rev-img-4.png",
        "../../assets/imgs/img/h3-rev-img-6.png",
    ],

    innersArray: [

        {
            id: 0,
            text: "1 FORGET THE TRENDY PIZZA SHOPS, THIS HIDDEN SPOT MAKES THE BEST NEW YORK-STYLES PIZZA SLICE IN NAPLES",
            dailyBugle: "WHASHINGTON POST 2018",
        },

        {
            id: 1,
            text: "2 FORGET THE TRENDY PIZZA SHOPS, THIS HIDDEN SPOT MAKES THE BEST NEW YORK-STYLES PIZZA SLICE IN NAPLES lorem ipsum",
            dailyBugle: "WHASHINGTON POST 2020",
        },

        {
            id: 2,
            text: "3 FORGET THE TRENDY PIZZA SHOPS, THIS HIDDEN SPOT MAKES THE BEST NEW YORK-STYLES PIZZA SLICE IN NAPLES ipsum lorem",
            dailyBugle: "WHASHINGTON POST 2022",
        },
    ],

    navComponents: [
        {
            text: "HOME",
            imgContent: true,
            textContent: true,
            imgPath: "../../assets/imgs/svg/svg-0-mustBianco.svg",
            smallImg: true,
        },
        {
            text: "PAGES",
            imgContent: false,
            textContent: true,
            imgPath: "",
        },
        {
            text: "MENU",
            imgContent: false,
            textContent: true,
            imgPath: "",
        },
        {
            text: "",
            imgContent: true,
            imgPath: "../../assets/imgs/img/h5-logo-divided-header.png",
            textContent: false,
            smallImg: false,
        },
        {
            text: "EVENT",
            imgContent: false,
            textContent: true,
            imgPath: "",
        },
        {
            text: "BLOG",
            imgContent: false,
            textContent: true,
            imgPath: "",
        },
        {
            text: "LANDING",
            imgContent: false,
            textContent: true,
            imgPath: "",
        },
    ],

    cartComponents: [
        {
            id: 0,
            text: "CART",
            class: "small-img",
            imgPath: "../../assets/imgs/svg/svg-1.svg",
        },
        {
            id: 1,
            text: "SEARCH",
            classStyle: "search-len small-size",
            classIcon: "fa-solid fa-magnifying-glass",
        },
    ],

    arrayRestaurants: [
        {
            id: 0,
            street: "1614 E.bell #104rD",
            city: "Salerno, AZ 85022",
            cellPhone: "(602) 867-1010",
        },
        {
            id: 0,
            street: "204 E. Pizzetta Tommaso",
            city: "Sorrento, AZ 85022",
            cellPhone: "(358) 867-1234",
        },
        {
            id: 0,
            street: "Viale Puglia 54",
            city: "Torre del Greco AZ 43566",
            cellPhone: "(112) 789-4563",
        },
        {
            id: 0,
            street: "Corso Itali AA",
            city: "Naples AZ 23667",
            cellPhone: "(989) 456-1209",
        },
    ],

    workingHours: [
        {
            id: 1,
            title: "MONDAY",
            titleColor: "color-gold",
            text: "kitchen closed",
            textColor: "color-orange",
        },
        {
            id: 1,
            title: "TUESDAY UNTIL FRIDAY",
            titleColor: "color-gold",
            text: "9:00 - 22:00",
            textColor: "color-gray",
        },
        {
            id: 1,
            title: "SATURDAY",
            titleColor: "color-gold",
            text: "saturday 11am to midnight",
            textColor: "color-gray",
            star: true,
            starText: "*",
            starColor: "color-orange"
        },
        {
            id: 1,
            title: "SUNDAY",
            titleColor: "color-gold",
            text: "9:00 - 22:00",
            textColor: "color-gray",
        },
    ],

});