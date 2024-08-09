<script  setup>
import { onMounted, reactive, ref } from 'vue';

import BurgerMenu from './components/BurgerMenu.vue';
import {useCounterStore} from "./stores/counter"

const baseUrl = import.meta.env.VITE_BASE
const store = useCounterStore()
const contacts = ref(null)
const formValue = reactive({
  name:"",
  email:"",
  serviceType:"",
  budged:0,
  task:""
})


async function sendEmail(){
  if(!checkValid) return

  await fetch(`${baseUrl}/mail`, {
    method:"POST",
    mode:"cors",
    body:JSON.stringify({
      name:formValue.name,
      email:formValue.email,
      serviceType:formValue.serviceType,
      budged:formValue.budged.toString(),
      task:formValue.task
    })
  })
}
function checkValid(){
  for(let item in formValue){
    if(formValue[item] == "") return false
  }
  return true
}

function goTo(url){
  document.location = url
}

onMounted(() => {
  console.log(baseUrl)
})


</script>

<template>
  <BurgerMenu />
   <header class="header nav-header">
      <div class="container">
        <nav class="nav">
          <div class="nav-logo">
            <img src="./assets/img/logo.svg" alt="Logo" />
          </div>
          <div class="nav-menu">
            <a href="#main" class="nav-menu-item">Главная</a>
            <a href="#aboutus" class="nav-menu-item">О нас</a>
            <a href="#portfolio" class="nav-menu-item">Портфолио</a>
            <a href="#contact" class="nav-menu-item">Обратиться</a>
          </div>
          <div class="nav-order">
            <button class="nav-order-button" @click="contacts.scrollIntoView()">Сделать заказ</button>
          </div>
          <div class="nav-burger" @click="store.burgerMenu = !store.burgerMenu">
            <div class="nav-burger-line"></div>
            <div class="nav-burger-line"></div>
            <div class="nav-burger-line"></div>
          </div>
        </nav>
      </div>
    </header>
    <main class="main" >
      <div class="container" id="main">
        <div class="main-info">
          <div class="main-info-text">
            <h1 class="main-info-title">
              <span class="main-info-title-first">FullStack</span>
              -разработка от
              <span class="main-info-title-last">профи</span>
            </h1>
            <div class="main-info-subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              tempor sapien augue, a sollicitudin nibh hendrerit in.
            </div>
          </div>
          <div class="main-proposal">
            <button class="main-proposal-button" @click="contacts.scrollIntoView()">Заказать</button>
            <a href="#aboutus" class="main-proposal-details">
              <div class="main-proposal-details-text">Подробнее</div>
              <img src="./assets/img/header/Arrow 1.svg" alt="" />
            </a>
          </div>
        </div>
        <div class="main-additionally">
          <img src="./assets/img/header/12.png" alt="img" />
        </div>
      </div>
      <div class="elipse-illusion">
        <img
          src="./assets/img/header/elelipse1.png"
          alt=""
          class="elipse-illusion-obj"
        />
      </div>
      <div class="about container" id="aboutus">
        <h2 class="about-title">О нас</h2>
        <div class="about-main-part">
          <div class="about-description">
            <div class="about-description-text">
              <div class="about-description-title">
                WebMonsters -
                <span class="about-description-title-blue">амбициозная</span
                ><br />
                <span class="about-description-title-line"
                  >студия разработки</span
                >
              </div>
              <div class="about-description-info">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                tempor sapien augue, a sollicitudin nibh hendrerit in. Fusce sed
                leo nec risus accumsan euismod. Integer faucibus lectus neque.
                Aenean pellentesque fermentum mauris non ultrices. Fusce
                pellentesque congue quam vitae vestibulum. Ut semper at nibh in
                lobortis. Sed auctor tellus ut tortor fermentum ultrices.
              </div>
            </div>
            <div class="about-description-img">
              <img src="./assets/img/about/new-ear-elipse.png" alt="ellipse" />
            </div>
          </div>
          <div class="about-stats">
            <div class="about-stats-text-gr">
              <div class="about-stats-text">
                Вот небольшая статистическая сводка нашей студии
              </div>
              <img src="./assets/img/about/Arrow-about.svg" alt="" />
            </div>
            <div class="about-stats-date">
              <div class="about-state">
                <div class="about-state-date">0+</div>
                <div class="about-state-name">Выполнено работ</div>
              </div>
              <div class="about-state">
                <div class="about-state-date">0$</div>
                <div class="about-state-name">Средний чек</div>
              </div>
              <div class="about-state">
                <div class="about-state-date">0</div>
                <div class="about-state-name">Участников</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="portfolio" id="portfolio">
        <div class="container">
          <h2 class="about-title">Портфолио</h2>
          <div class="portfolio-items">
            <div class="portfolio-item" @click="goTo('https://mskofficial.ru/msk_voronezh ')">
              <img src="./assets/img/portfolio-1.jpg" alt="img" />
              <div class="portfolio-item-text">
                <div class="potfolio-item-client">Client name</div>
                <div class="potfolio-item-name">Name</div>
              </div>
              <div class="portfolio-item-price">
                <div class="portfolio-item-txt">
                  <div class="portfolio-item-txt-price">Цена</div>
                  <div class="portfolio-item-txt-tern">Срок выполнения</div>
                </div>
                <div class="portfolio-item-date">
                  <div class="portfolio-item-date-price">500$</div>
                  <div class="portfolio-item-date-tern">0 дней</div>
                </div>
              </div>
            </div>
            <div class="portfolio-item" @click="goTo('https://yt.com.ru/')">
              <img src="./assets/img/portfolio-2.jpg" alt="img" />
              <div class="portfolio-item-text">
                <div class="potfolio-item-client">Client name</div>
                <div class="potfolio-item-name">Name</div>
              </div>
              <div class="portfolio-item-price">
                <div class="portfolio-item-txt">
                  <div class="portfolio-item-txt-price">Цена</div>
                  <div class="portfolio-item-txt-tern">Срок выполнения</div>
                </div>
                <div class="portfolio-item-date">
                  <div class="portfolio-item-date-price">500$</div>
                  <div class="portfolio-item-date-tern">0 дней</div>
                </div>
              </div>
            </div>
            <div class="portfolio-item" @click="goTo('https://clled.ru/')">
              <img src="./assets/img/portfolio-3.jpg" alt="img" />
              <div class="portfolio-item-text">
                <div class="potfolio-item-client">Client name</div>
                <div class="potfolio-item-name">Name</div>
              </div>
              <div class="portfolio-item-price">
                <div class="portfolio-item-txt">
                  <div class="portfolio-item-txt-price">Цена</div>
                  <div class="portfolio-item-txt-tern">Срок выполнения</div>
                </div>
                <div class="portfolio-item-date">
                  <div class="portfolio-item-date-price">500$</div>
                  <div class="portfolio-item-date-tern">0 дней</div>
                </div>
              </div>
            </div>
           
          </div>
          <!-- <div class="portfolio-other">
            <div class="portfolio-other-ellipses">
              <div class="portfolio-other-ellips"></div>
              <div class="portfolio-other-ellips"></div>
              <div class="portfolio-other-ellips"></div>
              <div class="portfolio-other-ellips"></div>
            </div>
          </div> -->
        </div>
      </div>
      <div class="link" id="contact" ref="contacts">
        <div class="container">
          <h2 class="about-title">Обратиться к нам</h2>
          <div class="link-part">
            <div class="link-dates">
              <h3 class="link-dates-title">Оставьте заявку</h3>
              <div class="link-dates-subtitle">
                Мы свяжемся с вами по указанной электронной почте
              </div>
              <div class="link-dates-name-object link-dates-object">
                <div class="link-dates-name-text link-dates-text">
                  Как к вам обращаться
                </div>
                <input type="text" class="link-dates-name" placeholder="Имя" v-model="formValue.name"/>
              </div>
              <div class="link-dates-email-object link-dates-object">
                <div class="link-dates-email-text link-dates-text">Email</div>
                <input
                  type="text"
                  class="link-dates-email"
                  placeholder="person@example.com"
                  v-model="formValue.email"
                />
              </div>
              <div class="link-dates-name-object link-dates-object">
                <select name="pets" id="pet-select" class="link-dates-type" v-model="formValue.serviceType">
                  <option value="">Тип услуги</option>
                  <option value="Разработка сайтов">Разработка сайта</option>
                  <option value="Разработка бота">Разработка бота</option>
                </select>
              </div>
              <div class="link-dates-budget-object link-dates-object">
                <div class="link-dates-budget-text link-dates-text">Бюджет</div>
                <input
                  type="text"
                  class="link-dates-budget"
                  placeholder="1,000.00"
                  v-model="formValue.budged"
                />
              </div>
              <div class="link-dates-task-object link-dates-object">
                <div class="link-dates-task-text link-dates-text">
                  Техническое задание
                </div>
                <textarea name="" class="link-dates-task" id="" v-model="formValue.task" />
              </div>
              <button class="link-dates-buttons" @click="sendEmail">Send message</button>
            </div>
            <img
              src="./assets/img/contact-us.png"
              alt="img"
              class="link-img-decoration"
            />
          </div>
        </div>
      </div>
    </main>
    <footer class="footer"></footer>
    <div class="container">
      <div class="footer-info">
        <div class="footer-info-about">
          WebMonsters - студия fullstack разработки.
        </div>
        <div class="footer-info-c">2024, All rights reserved</div>
      </div>
    </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
