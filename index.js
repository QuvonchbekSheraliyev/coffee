
const text1 = document.querySelectorAll('.text1')
const text2 = document.querySelectorAll('.text2')
const text3 = document.querySelectorAll('.text3')
const text33 = document.querySelectorAll('.text5')
const text34 = document.querySelectorAll('.text6')
const text35 = document.querySelectorAll('.text7')
const headerbtn = document.querySelector('.langbtne')
const modal = document.querySelector('.bmw')

const btns = document.querySelectorAll('.btnu')
const closem = document.getElementById('none')
const opened = document.querySelector('.momo')
const text4 = document.querySelector('.great')
const text5 = document.querySelector('.start')
const text6 = document.querySelector('.your')
const text7 = document.querySelector ('.light')
const text8 = document.querySelector('.lighte')
const text9 = document.querySelector('.lighta')
const text10 = document.querySelector('.lightu')
const text11 = document.querySelector('.why')
const text12 = document.querySelector('.large')
const text13 = document.querySelector('.best')
const text14 = document.querySelector('.an')
const text15 = document.querySelector('.besta')
const text16 = document.querySelector('.bestu')
const text17 = document.querySelector('.ana')
const text18 = document.querySelector('.anu')
const text19 = document.querySelector('.pick')
const text20 = document.querySelector('.picke')
const text21 = document.querySelector('.picka')
const text22 = document.querySelector('.Select')
const text23 = document.querySelector('.Selecte')
const text24 = document.querySelector('.Selecta')
const text25 = document.querySelector('.pickm')
const text26 = document.querySelector('.pickem')
const text27 = document.querySelector('.pickam')
const text28 = document.querySelector('.Selectm')
const text29 = document.querySelector('.Selectem')
const text30 = document.querySelector('.Selectam')
const text31 = document.querySelector('.salom')
const text32 = document.querySelector('.yourm')

opened.addEventListener('click' , () =>{
    modal.classList.toggle('hidden');

})
closem.addEventListener('click' , () =>{
    modal.classList.toggle('hidden');

})



btns.forEach(e => {
    e.addEventListener('click', () => {
        const til = e.getAttribute("lang")
        text1.textContent = translate[til].text1
        text2.textContent = translate[til].text2
        text3.textContent = translate[til].text3
        text4.textContent = translate[til].text4
        text5.textContent = translate[til].text5
        text6.textContent = translate[til].text6
        text7.textContent = translate[til].text7
        text8.textContent = translate[til].text8
        text9.textContent = translate[til].text9
        text10.textContent = translate[til].text10
        text11.textContent = translate[til].text11
        text12.textContent = translate[til].text12
        text13.textContent = translate[til].text13
        text14.textContent = translate[til].text14
        text15.textContent = translate[til].text15
        text16.textContent = translate[til].text16
        text17.textContent = translate[til].text17
        text18.textContent = translate[til].text18
        text19.textContent = translate[til].text19
        text20.textContent = translate[til].text20
        text21.textContent = translate[til].text21
        text22.textContent = translate[til].text22
        text23.textContent = translate[til].text23
        text24.textContent = translate[til].text24
        text25.textContent = translate[til].text25
        text26.textContent = translate[til].text26
        text27.textContent = translate[til].text27
        text28.textContent = translate[til].text28
        text29.textContent = translate[til].text29
        text30.textContent = translate[til].text30
        text31.textContent = translate[til].text31
        text32.textContent = translate[til].text32
        text33.textContent = translate[til].text33
    })
});

var translate = {
    UZ: {
        text1: "Uy",
        text2: 'Biz haqimizda',
        text3: 'Rejangizni yarating',
        text1: "Uy",
        text2: 'Biz haqimizda',
        text3: 'Rejangizni yarating',
        text4: "Ajoyib cofe odiy qilingan",
        text5: "Ertalabki dunyoning eng yaxshi qahvalari bilan boshlang. Bizni sinab ko'ring bizning eng yaxshi qovuruvchilarimizdan tayyorlangan hunarmand qahvalari Sizning jadvalingiz bo'yicha to'g'ridan-to'g'ri eshigingizga yetkazib beriladi.",
        text6: "Rejangizni yarating",
        text7: "Kuchli tajriba uchun kakao va qora murch bilan engil va xushbo'y aralash",
        text8: "To'yingan va baxmal tanasi, meva va yong'oqlarning ishoralari bilan braziliyalik quyuq qovurilgan",
        text9: "Qovurilgan bodom va quritilgan olcha notalarini o'z ichiga olgan yumshoq va silliq aralash",
        text10: "Efiopiya qo'lda yig'ib olingan aralashmasi jonli meva notalari bilan zich o'ralgan",
        text11: "Nega bizni tanlaysiz?",
        text12: "Bizning rolimizning katta qismi qaysi kofelar namoyish etilishini tanlashdir  bizning assortimentimizda. Bu berish uchun eng yaxshi qahva ishlab chiqaruvchilari bilan yaqindan ishlashni anglatadi  siz har bir darajada yanada ta'sirli tajribaga ega bo'lasiz.",
        text13: "Eng yaxshi sifat",
        text14: "Bizning qovuruvchilarimizdan dunyodagi eng yaxshi hunarmand qahvalarining cheksiz xilma-xilligini kashf eting.",
        text15: "Eksklyuziv imtiyozlar",
        text16:'Yetkazib berish bepul',
        text17:" Siz qachon maxsus takliflar va swag obuna bo'ling, shu jumladan 30% chegirma birinchi jo'natish. ",
        text18:'Biz xarajatlarni qoplaymiz va qahva tez yetkazib beriladi. Eng yuqori tazelik: kafolatlangan.',
        text19:"O'zingizni tanlang kofe",
        text20:'Chastotani tanlang  ',
        text21:'Qabul qiling va zavqlaning!',
        text22:"Bizning rivojlanayotgan hunarmand qahvalarimizdan tanlang. Bizning loviyalarimiz axloqiy jihatdan olinadi va biz ular uchun adolatli narxlarni to'laymiz. Siz sinab ko'rishingiz uchun har oy barcha profillarda yangi qahvalar mavjud.",
        text23:"Buyurtma chastotasi, miqdori, hatto qovurish uslubingiz va maydalash turini sozlang. Onlayn portalimiz orqali hech qanday majburiyatsiz obunangizni pauza qiling, o'tkazib yuboring yoki bekor qiling",
        text24:"Biz sizning paketingizni 48 soat ichida yangi qovurilgan holda jo'natamiz. Ortingizga oʻtiring va oʻziga xos taʼmni taʼminlash uchun tanlangan jahon darajasidagi kofelardan bahramand boʻling.",
        text25:"O'zingizni tanlang kofe",
        text26:"Chastotani tanlang",
        text27:"Qabul qiling va zavqlaning!",
        text28:"Bizning rivojlanayotgan hunarmand qahvalarimizdan tanlang. Bizning loviyalarimiz axloqiy jihatdan olinadi va biz ular uchun adolatli narxlarni to'laymiz. Siz sinab ko'rishingiz uchun har oy barcha profillarda yangi qahvalar mavjud.",
        text29:"Buyurtma chastotasi, miqdori, hatto qovurish uslubingiz va maydalash turini sozlang. Onlayn portalimiz orqali hech qanday majburiyatsiz obunangizni pauza qiling, o'tkazib yuboring yoki bekor qiling",
        text30:"Biz sizning paketingizni 48 soat ichida yangi qovurilgan holda jo'natamiz. Ortingizga oʻtiring va oʻziga xos taʼmni taʼminlash uchun tanlangan jahon darajasidagi kofelardan bahramand boʻling.",
        text31:"U qanday ishlaydi",
text32:"Rejangizni yarating",
text33:"Uy",
text34:"Biz haqimizda",
text35:"Rejangizni yarating",
    },
    ENG: {
        text1: 'Home',
        text2: 'About us',
        text3: 'Create your plan',
        text4: 'Great coffee made simple.',
        text5: 'Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule.',
    text6: 'Create your plan',
      text7: 'Light and flavorful blend with cocoa and black pepper for an intense experience',
       text8: 'Brazilian dark roast with rich and velvety body, and hints of fruits and nuts',
text9:'Mild and smooth blend featuring notes of toasted almond and dried cherry',
text10:'Ethiopian hand-harvested blend densely packed with vibrant fruit notes',
text11:'   Why choose us?',
text12:'   A large part of our role is choosing which particular coffees will be featured in our range. This means working closely with the best coffee growers to give you a more impactful experience on every level.',
text13:'  Best quality',
text14:'Discover an endless variety of the world’s best artisan coffee from each of our roasters.',
text15:' Exclusive benefits',
text16:' Free shipping',
text17:' Special offers and swag when you subscribe, including 30% off your first shipment.',
text18:'We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.',
text19:'Pick your coffee',
text20:'Choose the frequency',
text21:'Receive and enjoy!',
text22:'Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.',
text23:'Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.',
text24:'We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.',
text25:'Pick your coffee',
text26:'Choose the frequency',
text27:'Receive and enjoy!',
text28:'Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.',
text29:'Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.',
text30:'We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.',
text31:"    How it works",
text32: 'Create your plan',
text33:"Home",
text34:"About us",
text35:"Create your plan",

}}






