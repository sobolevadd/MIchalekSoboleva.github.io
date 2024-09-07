// Countdown Timer
const weddingDate = new Date("Sep 21, 2024 13:00:00").getTime();

const x = setInterval(function() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "We're Married!";
    }
}, 1000);

// Language Selector
const translations = {
    cs: {
        names: "Matěj & Dáša",
        date: "21 Září 2024",
        saveTheDate: "Datum Svatby",
        weddingPlan: "Plán Svatby",
        arriving: "13:00 Příjezd hostů",
        ceremony: "13:15 Svatební obřad",
        photo: "13:30 Skupinové svatební fotografie",
        lunch: "14:00 Oběd",
        activity: "15:00 Tajná aktivita",
        dessert: "16:30 Dezert",
        firstDance: "17:30 První tanec",
        ourLocation: "Místo konání",
        details: "Poznámka Od Nás",
        detailsText: "Jsme rádi, že s námi přijdete oslavit tento výjimečný den. Vaše přítomnost nám udělá obrovskou radost. Děkujeme, že si uděláte čas a oslavíte s námi tento okamžik. Už se nemůžeme dočkat oslavy!",
        contactUs: "Kontaktujte Nás",
        phone: "Telefon Matěj: +420 604 993 035",
        email: "Telefon Dáša : +420 604 837 582",
        countdownTitle: "Čas Do Naší Svatby"
    },
    en: {
        names: "Matěj & Dáša",
        date: "September 21, 2024",
        saveTheDate: "Save the Date",
        weddingPlan: "Wedding Plan",
        arriving: "13:00 Arrival of guests",
        ceremony: "13:15 Wedding ceremony",
        photo: "13:30 Group wedding photos",
        lunch: "14:00 Lunch",
        activity: "15:00 Secret activity",
        dessert: "16:30 Dessert",
        firstDance: "17:30 First dance",
        ourLocation: "Our Location",
        details: "A Little Note From Us",
        detailsText: "We’re glad you’ll be with us to celebrate this special day. Your presence will bring us so much joy. Thank you for taking the time to be here and share this moment with us. We can’t wait for the celebration!",
        contactUs: "Contact Us",
        phone: "Phone Matěj: +420 604 993 035",
        email: "Phohe Dáša : +420 604 837 582",
        countdownTitle: "Time Until Our Wedding"
    },
    ru: {
        names: "Матей & Даша",
        date: "21 Сентября 2024",
        saveTheDate: "Дата Свадьбы",
        weddingPlan: "План Свадьбы",
        arriving: "13:00 Прибытие гостей",
        ceremony: "13:15 Свадебная церемония",
        photo: "13:30 Групповые свадебные фотографии",
        lunch: "14:00 Обед",
        activity: "15:00 Секретное занятие",
        dessert: "16:30 Десерт",
        firstDance: "17:30 Первый танец",
        ourLocation: "Место",
        details: "Небольшое примечание oт нас",
        detailsText: "Мы рады, что вы будете с нами и придёте отпраздновать этот особенный день. Ваше присутствие принесёт нам огромное удовольствие. Спасибо, что найдёте время и разделите с нами этот момент. С нетерпением ждём праздника!",
        contactUs: "Свяжитесь с нами",
        phone: "Телефон Матей: +420 604 993 035",
        email: "Телефон Даша : +420 604 837 582",
        countdownTitle: "До Нашей Свадьбы Осталось"
    }
};

function changeLanguage(language) {
    document.getElementById("names").textContent = translations[language].names;
    document.getElementById("date").textContent = translations[language].date;

    document.querySelector('.calendar-section h2').textContent = translations[language].saveTheDate;
    document.querySelector('.plan-section h2').textContent = translations[language].weddingPlan;

    const timelineItems = document.querySelectorAll('.timeline li');
    timelineItems[0].textContent = translations[language].arriving;
    timelineItems[1].textContent = translations[language].ceremony;
    timelineItems[2].textContent = translations[language].photo;
    timelineItems[3].textContent = translations[language].lunch;
    timelineItems[4].textContent = translations[language].activity;
    timelineItems[5].textContent = translations[language].dessert;
    timelineItems[6].textContent = translations[language].firstDance;

    document.querySelector('.location-section h2').textContent = translations[language].ourLocation;
    document.querySelector('.details-section h2').textContent = translations[language].details;
    document.querySelector('.details-section p').textContent = translations[language].detailsText;

    document.querySelector('.contact-section h2').textContent = translations[language].contactUs;

    const contactSectionParagraphs = document.querySelectorAll('.contact-section p');
    contactSectionParagraphs[0].textContent = translations[language].phone;
    contactSectionParagraphs[1].textContent = translations[language].email;

    document.querySelector('.countdown-section h2').textContent = translations[language].countdownTitle;
}

// Slideshow functionality
let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.querySelectorAll('.slide-image');
    if (slides.length === 0) return;

    slides.forEach((slide, index) => {
        slide.style.display = 'none';
        slide.classList.remove('active');
        if (index === slideIndex) {
            slide.style.display = 'block';
            slide.classList.add('active');
        }
    });
}

function plusSlides(n) {
    const slides = document.querySelectorAll('.slide-image');
    slideIndex = (slideIndex + n + slides.length) % slides.length;
    showSlides();
}