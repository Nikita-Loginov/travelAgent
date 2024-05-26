const swiper = new Swiper('.popular-swiper', {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 32,
    navigation: {
        nextEl: '.swiper-arrows__next',
        prevEl: '.swiper-arrows__prev',
    },
});

const autoCompleteJS = new autoComplete({
    placeHolder: "e.g Bali, Indonesia",
    data: {
        src: ["Herat",
        "Kabul",
        "Kandahar",
        "Molah",
        "Rana",
        "Shar",
        "Sharif",
        "Wazir Akbar Khan",
        "Elbasan",
        "Petran",
        "Pogradec",
        "Shkoder",
        "Tirana",
        "Ura Vajgurore",
        "Algiers",
        "Annaba",
        "Azazga",
        "Batna City",
        "Blida",
        "Bordj",
        "Bordj Bou Arreridj",
        "Bougara",
        "Cheraga",
        "Chlef",
        "Constantine",
        "Djelfa",
        "Draria",
        "El Tarf",
        "Hussein Dey",
        "Illizi",
        "Jijel",
        "Kouba",
        "Laghouat",
        "Oran",
        "Ouargla",
        "Oued Smar",
        "Relizane",
        "Rouiba",
        "Saida",
        "Souk Ahras",
        "Tamanghasset",
        "Tiaret",
        "Tissemsilt",
        "Tizi",
        "Tizi Ouzou",
        "Tlemcen"],
        cache: true,
    },
    resultItem: {
        highlight: true
    },
    events: {
        input: {
            selection: (event) => {
                const selection = event.detail.selection.value;
                autoCompleteJS.input.value = selection;
            }
        }
    }
});

const BodyHidden = document.querySelector('body')
const menuBtn = document.querySelector('.menu__burger')
const menu = document.querySelector('.menu')
menuBtn.addEventListener('click',function(item){
    menu.classList.toggle('menuBurgerActiv')
    BodyHidden.classList.toggle('open--menu')
})