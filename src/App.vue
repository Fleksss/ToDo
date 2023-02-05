<template>

  <div
    class="parallax-bg bg-gradient-to-br from-pink-400 to-transparent w-screen h-screen flex justify-center items-center">
    <swiper :effect="'coverflow'" :grabCursor="true" :centeredSlides="true" :slidesPerView="2" :coverflowEffect="{
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
    }" :mousewheel="true" :modules="modules" :speed="600" :parallax="true" class="mySwiper">

      <swiper-slide class="w-[400px] h-[500px]">
        <!-- inputs -->
        <Inputs @giveInfo="getInfo" />
      </swiper-slide>
      <swiper-slide class="w-[400px] h-[500px]">
        <!-- list -->
        <div class=" w-full h-[500px] bg-slate-200 border rounded-xl shadow-md  
          p-5 flex flex-col gap-y-5 overflow-y-scroll backdrop-blur-md bg-opacity-25">
          <User v-for="(item, index) in users" :key="item" :user="item" @delete="remove(index)"
            @edit="edit(item, index)" />
        </div>
      </swiper-slide>
    </swiper>
    <div class="glass w-[150px] h-[150px] backdrop-blur-md bg-opacity-25 bg-white rounded-3xl absolute top-10 left-44">
    </div>
    <div
      class="glass w-[100px] h-[100px] backdrop-blur-md bg-opacity-25 bg-white rounded-3xl absolute bottom-36 left-44">
    </div>
    <ThePopup :editingUser="editingUser" @close="isPopupOpen = false" v-if="isPopupOpen" />
  </div>
</template>

<script>
import User from './components/UserCard.vue';
import Inputs from './components/Inputs.vue';
// 
import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectCoverflow, Mousewheel, Parallax } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import ThePopup from './components/ThePopup.vue';
// 

export default {
  components: {
    User,
    Swiper,
    SwiperSlide,
    Inputs,
    ThePopup
  },
  data() {
    return {
      modules: [EffectCoverflow, Mousewheel, Parallax],
      users: [],
      userInfo: {
        name: null,
        surname: null
      },
      editingUser: {
        name: '',
        surname: ''
      },
      isPopupOpen: false,
    }
  },
  methods: {
    getInfo(name, surname) {
      this.users.push(
        {
          name,
          surname,
        }
      )
      this.userInfo.name = name
      this.userInfo.surname = surname
    },
    remove(index) {
      this.users.splice(index, 1)
    },
    edit(item, index) {
      this.editingUser = item
      this.editingUser.id = index
      this.isPopupOpen = true
    }
  }
}

</script>

<style>
#app {
  height: 100%;
}

html,
body {
  position: relative;
  height: 100%;
}

body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.swiper {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
}
</style>