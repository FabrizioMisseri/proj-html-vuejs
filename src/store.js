import { reactive } from "vue";

export const store = reactive({

    pizzaSelector: 0,
    pizzArray: [
        "../../assets/imgs/img/h3-rev-img-2.png",
        "../../assets/imgs/img/h3-rev-img-4.png",
        "../../assets/imgs/img/h3-rev-img-6.png",
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

});