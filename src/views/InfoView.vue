<script >
import { mapState } from 'pinia';
import { mapActions } from 'pinia';
import { useFunctions } from '@/stores/functions.js'

import soundFile from '@/assets/sounds/sound.mp3'; 
import soundMail from '@/assets/sounds/mail.mp3'; 

export default {
  name: 'info',
  data() {
    return {
      audioSrc: soundFile,
      audioMail: soundMail,
    }
  },
  mounted() {
    if(this.info === true) {
      console.log(this.info)
      this.animationCard();
    }
  },
  computed: {
        ...mapState(useFunctions, ['info'])
  },
  methods: {
    ...mapActions(useFunctions, ['animationCard']),
    playSound(event) {
      // event.preventDefault();
      this.$refs.audioElm.play();
      // window.location.href = event.target.getAttribute('href');
    },
    playMail(event) {
      event.preventDefault();
      this.$refs.audioElmMail.play();
      window.location.href = event.target.getAttribute('href');
    },
  },
}
</script>

<template>
  <div class="info-wrapper">
    <div class="info">
      <div>
        <p class="desc mt-3 mb-3">Detail-oriented Frontend Developer and Digital Designer
        with over 9 years of experience in Web Development,
        UI/UX Design, and Motion Graphics.</p>
        <p class="mb-1">🌐 Web Design and Development</p>
        <p>👾 Video Editing and Motion Graphics</p>
      </div>
      
      <div class="flex flex-col gap-2">
        <a class="button" href="mailto:sanzdecastro@gmail.com" @click="playMail($event);">Email</a>
        <audio ref="audioElmMail" :src="audioMail"></audio> 
        <a class="button" target="_blank" href="https://www.instagram.com/santisanchez.dev/">Instagram</a>
        <router-link class="button secondary" to="/" @click="playSound();">
        Back</router-link>
        <audio ref="audioElm" :src="audioSrc"></audio> 
      </div>
      
    </div>
  </div>
</template>

<style >

.info-wrapper {
  width: 100vw;
  height: 65dvh;
  @apply
  rounded-xl
  absolute 
  left-0
  p-3
  pb-20
  md:pb-6
  text-white
  bg-black;
  
  .info {
    @apply
    
    h-full
    flex
    justify-between
    flex-col;
    p {
      @apply
      md:pb-1;
      @media (min-width: 1024px) {
        font-size: clamp(18px, 20px, 70px);
        line-height: clamp(24px, 20px, 70px);
        max-width: 80%;
      }
    }
    p.desc {
      font-size: clamp(18px, 3vw, 70px);
      line-height: clamp(24px, 3.6vw, 70px);
      @apply
      md:pb-3;
    }
  }

}
</style>
