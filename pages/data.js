import {BsInstagram, BsTelegram, BsFacebook } from 'react-icons/bs';

import img1 from "../assets/slider/3.jpg"
import img2 from "../assets/slider/2.jpg"
import img3 from "../assets/slider/1.jpg"

import lavash2 from "../assets/fastfood/lavash2.png"
import lavash3 from "../assets/fastfood/lavash3.png"
import lavash4 from "../assets/fastfood/lavash4.png"
import lavash5 from "../assets/fastfood/lavash5.png"

import pizza1 from "../assets/fastfood/pizza1.png"
import pizza2 from "../assets/fastfood/pizza2.png"
import pizza3 from "../assets/fastfood/pizza3.png"
import pizza4 from "../assets/fastfood/pizza4.png"
import pizza5 from "../assets/fastfood/pizza5.png"
import pizza6 from "../assets/fastfood/pizza6.png"

import burger1 from "../assets/fastfood/burger1.png"
import burger2 from "../assets/fastfood/burger2.png"
import burger3 from "../assets/fastfood/burger3.png"
import burger4 from "../assets/fastfood/burger4.png"
import burger5 from "../assets/fastfood/burger5.png"

import clab1 from "../assets/fastfood/clab1.png"

import salad1 from "../assets/fastfood/salad1.png"
import salad2 from "../assets/fastfood/salad2.png"

import refresh1 from "../assets/fastfood/refresh1.png"
import refresh2 from "../assets/fastfood/refresh2.png"
import refresh3 from "../assets/fastfood/refresh3.png"
import refresh4 from "../assets/fastfood/refresh4.png"
import refresh5 from "../assets/fastfood/refresh5.png"
import refresh6 from "../assets/fastfood/refresh6.png"
import refresh7 from "../assets/fastfood/refresh7.png"

import sweet1 from "../assets/fastfood/sweet1.png"
import sweet2 from "../assets/fastfood/sweet2.png"
import sweet3 from "../assets/fastfood/sweet3.png"


// HEADER top

export const network = [
  {
    icon: <BsInstagram />,
    href: 'http://instagram.com/rashidovdev',
  },
  {
    icon: <BsFacebook />,
    href: 'http://github.com/rashidovDev',
  },
  {
    icon: <BsTelegram />,
    href: 'http://t.me/anvar_rashidov',
  },
  
]

export const navigation = [
    {
      name: 'Главная',
      href: '/',
      case: false
    },
    {
      name: 'Филиалы',
      href: 'branches',
      case: true
    },
    {
      name: 'О нас',
      href: 'about',
      case: true
    },
    {
      name: 'Контакты',
      href: 'contact',
      case: true
    }
  ];


  // HEADER bottom

  export const foodModes = [ 
    {
     name: 'Лаваши',
     href: "lavash"
    },
    {
      name: 'Cладости',
      href: "sweetness"
     },
     {
      name: 'Пиццы',
      href: "pizzas"
     },
     {
      name: 'Клабы',
      href: "clabs"
     },
     {
      name: 'Бургеры',
      href: "burger"
     },
     {
      name: 'Салаты',
      href: "salads"
     },
     {
      name: 'Напитки',
      href: "refreshments"
     },  
]

// SLIDER

export const slider = [
  {
    image: img1,
    title:'image1'
  },
  {
    image: img2,
    title:'image2'
  },
  {
    image: img3,
    title:'image3'
  },
]

export const fast = [
  { 
    id:1,
    name:"Лаваш с сыром",
    image:lavash4,
    type:'lavash',
    title:'Тонкий хлеб-лаваш, огурцы, помидоры, чипсы, говядина, красный соус, майонез, сыр.',
    price: 26000
  },
  { 
    id: 2,
    name:"Оригинальный лаваш",
    image:lavash5,
    type:'lavash',
    title:'Тонкий хлеб-лаваш, огурцы, помидоры, чипсы, говядина, красный соус, майонез.',
    price: 23000
  },
  { 
    id: 3,
    name:"Халапеньоли лаваш",
    image:lavash3,
    type:'lavash',
    title:'Тонкий хлеб-лаваш, огурцы, помидоры, халапеньо, чипсы, говядина, красный соус, майонез.',
    price: 24000
  },
  { 
    id: 4,
    name:"Тандырный лаваш",
    image:lavash2,
    type:'lavash',
    title:"Тонкий хлеб-лаваш, огурцы, помидоры, чипсы, говядина, красный соус, майонез, кунжут, запекается в печи.",
    price: 24000
  },
  { 
    id: 5,
    name:"Шаурма",
    image:burger1,
    type:'burger',
    title:"Хлеб из тандыра «Пита», говядина, огурцы, помидоры, красный , кольца сладкого лука Брунсвик",
    price: 19000
  },
  { 
    id: 6,
    name:"Большой чизбургер",
    image:burger2,
    type:'burger',
    title:"Сдобная булочка, фирменный соус, айсберг, солёные огурцы, две говяжьи котлеты, помидоры, сыр, кольца сладкого лука «Брунсвик»",
    price: 32000
  },
  { 
    id: 7,
    name:"Большой бургер",
    image:burger3,
    type:'burger',
    title:'Сдобная булочка, фирменный соус, айсберг, солёные огурцы, две говяжьи котлеты, помидоры, кольца сладкого лука «Брунсвик».',
    price: 27000
  },
  { 
    id: 8,
    name:"Чизбургер",
    image:burger4,
    type:'burger',
    title:'Сдобная булочка, фирменный соус, айсберг, солёные огурцы, говяжья котлета, помидоры, сыр, кольца сладкого лука «Брунсвик»',
    price: 21000
  },
  { 
    id: 9,
    name:"Гамбургер",
    image:burger5,
    type:'burger',
    title:'Сдобная булочка, фирменный соус, айсберг, солёные огурцы, говяжья котлета, помидоры, кольца сладкого лука «Брунсвик»',
    price: 19000
  },
  { 
    id: 10,
    name:"Клaбный сендвич",
    image:clab1,
    type:'clabs',
    title:'Тостерный хлеб, фирменный соус, огурцы, помидоры, куриное филе, латук, сыр, картофель фри',
    price: 24000
  },
  { 
    id: 11,
    name:"Ассорти пиццы",
    image:pizza1,
    type:'pizzas',
    title:'Белый соус, оливки, шампиньоны, болгарский перец, помидоры, копченная индейка, копченная колбаса, говядина, сосиски, сыр Моцарелла и Акбел.',
    price: 74000
  },
  { 
    id: 12,
    name:"Пицца пепперони",
    image:pizza2,
    type:'pizzas',
    title:'Томатный соус “OQTEPA”, копченная колбаса, сыр Моцарелла и Акбел.',
    price: 65000
  },
  { 
    id: 13,
    name:"Пицца с кази",
    image:pizza3,
    type:'pizzas',
    title:'Томатный соус “OQTEPA”, кольца сладкого лука “Брунсвик”, казы, сыр Моцарелла и Акбел',
    price: 76000
  },
  { 
    id: 14,
    name:"Грибная пицца",
    image:pizza4,
    type:'pizzas',
    title:'Томатный соус OQ TEPA, грибы, чесночное масло, орегано, крупная паприка.',
    price: 64000
  },
  { 
    id: 15,
    name:"Мясная пицца",
    image:pizza5,
    type:'pizzas',
    title:'Томатный соус “OQTEPA”, куриное мясо, болгарский перец, говядина, помидоры, сыр Моцарелла и Акбел',
    price: 75000
  },
  { 
    id: 16,
    name:"Мужской каприз",
    image:salad1,
    type:'salads',
    title:'Копченная колбаса, индейка, казы, сыр, майонез.',
    price: 19500
  },
  { 
    id: 17,
    name:"Цезарь",
    image:salad2,
    type:'salads',
    title:'Куринное филе, помидоры, айсберг, сыр, крутоны, чесночный соус.',
    price: 19000
  },
  { 
    id: 18,
    name:"Вишневый торт",
    image:sweet1,
    type:'sweetness',
    title:'Black Cherry',
    price: 14000
  },
  { 
    id: 19,
    name:"Чизкейк",
    image:sweet2,
    type:'sweetness',
    title:'Чизкейк..',
    price: 14000
  },
  { 
    id: 20,
    name:"Медовый торт",
    image:sweet3,
    type:'sweetness',
    title:'Медовик',
    price: 14000
  },
  { 
    id: 21,
    name:"Пепси 1,5л",
    image:refresh1,
    type:'refreshments',
    title:'Pepsi',
    price:14000 
  },
  { 
    id: 22,
    name:"Ice Tea 0,7л",
    image:refresh2,
    type:'refreshments',
    title:'Ice Tea',
    price:14000 
  },
  { 
    id: 23,
    name:"Пепси 0,5л",
    image:refresh3,
    type:'refreshments',
    title:'Pepsi',
    price:7000
  },
  { 
    id: 24,
    name:"Газированная вода 0,5л",
    image:refresh4,
    type:'refreshments',
    title:'Вода с газом 0,5л',
    price:2000
  },
  { 
    id: 25,
    name:"Пепси 0,4л",
    image:refresh5,
    type:'refreshments',
    title:'Pepsi',
    price:7000
  },
  { 
    id: 26,
    name:"Вода негазированная 0,5л",
    image:refresh6,
    type:'refreshments',
    title:'Вода 0,5л',
    price:2000
  },
  { 
    id: 27,
    name:"Мохито 0,7л",
    image:refresh7,
    type:'refreshments',
    title:'Мохито 0.7L',
    price:15000 
  },
  { 
    id: 28,
    name:"Пепси 1,5л",
    image:refresh1,
    type:'refreshments',
    title:'Pepsi',
    price:14000 
  }
]

export const branch = [ 
  {
    location : "Magic city",
    address : "Махалла Бещкургон",
    workTime : "Ежедневно: 10:00 - 03:00"
  },
  {
    location : "Юнусабад",
    address : "Улица Амир Темура",
    workTime : "Ежедневно: 10:00 - 01:00"
  },
  {
    location : "Алгоритм",
    address : "19-квартал",
    workTime : "Ежедневно: 10:00 - 01:00"
  },
  {
    location : "Magic city",
    address : "Махалла Бещкургон",
    workTime : "Ежедневно: 10:00 - 03:00"
  },
  {
    location : "Юнусабад",
    address : "Улица Амир Темура",
    workTime : "Ежедневно: 10:00 - 02:00"
  },
  {
    location : "Алгоритм",
    address : "19-квартал",
    workTime : "Ежедневно: 10:00 - 03:00"
  },
]

export const about = [
  {
    title: "О нас",
    text: `Сеть кафе быстрого питания Oqtepa Lavash работает на быстрорастущем рынке Узбекистана и ориентирована на удовлетворение спроса на доступную еду быстрого приготовления среди населения.
    Бренд <<Zo'r Fastfood>> является одним из самых узнаваемых среди своего сегмента и высоко ценится среди потребителей. Доказательством этого служит ряд побед, в частности премии Meal & Drinks Choice Award 2019 в категории «Лучшее заведение быстрого питания».
    Наша история началась более 12 лет назад, когда два брата Бегзод и Фарход Гулямовы начали воплощать свою давнюю мечту, стать лучшими в сфере общепита, а именно в готовке Лавашей. Так, в 2010 году появился первый филиал Oqtepa Lavash. На сегодняшний день открыты более 40 кафе быстрого питания по всему Узбекистану.
    Мы увлечены нашей едой, начиная от добавления более сбалансированных вариантов наших лавашей, до подачи свежих чизбургеров, которые готовятся только после поступления заказа. Мы всегда находим способы показать нашу приверженность нашим клиентам и нашей еде.
    В Oqtepa Lavash мы заботимся о том, чтобы обслуживание было безопасным каждый день, а еда качественной. Мы работаем над собой. Это означает, что мы используем 100% настоящие говяжьи вертелы и котлеты, приправленные только щепоткой соли и перца. Это означает, что наши Лаваш и Тандыр лаваш сделаны из говядины свежего забоя по всем правилам шариата. Это означает, что наши Клаб сэндвичи сделаны из свежего куриного мяса. Проще говоря, это означает натуральные, качественные ингредиенты и работа над собой, что важно для вас.
    Наши специалисты по еде - не просто профи в их ремесле. Это люди, которые заботятся о еде, которую вы едите, и привносят инновации в наши кухни. Мы заботимся о том, откуда берутся наши ингредиенты. Вот почему у нас имеется собственная пекарня свежих булочек, и мы сами изготавливаем салаты. Именно поэтому, мы используем качественно выращенные ингредиенты из сообщества проверенных фермеров Oqtepa Lavash.`
  }
]

//CONTACT

export const contact = [ 
  { 
    type : 'contactserver',
    city : "Ташкент",
    number : '+998(78) 150-00-30'
  },
  {
    type : 'contactserver',
    city : "Наманган",
    number : '+998(78) 150-30-30'
  },
  {
    type : 'contactserver',
    city : "Алмалык",
    number : '+998(78) 150-00-30'
  },
  {
    type : 'supportclient',
    email : "info@zo'rfastfood.uz",
    number : '+998(93) 501-07-70'
  },
  {
    type : 'copyrightholders',
    text:`По вопросам, возникшим в связи с предположительным неправомерным
     использованием товарных знаков, логотипов и иных материалов, 
    просим обращаться по е-мейлу с приложением подтверждающих документов`,
    email : "info@zo'rfastfood.uz",
  },
]