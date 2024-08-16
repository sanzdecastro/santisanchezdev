<script >
import { mapState } from 'pinia';
import { mapActions } from 'pinia';
import { useFunctions } from '@/stores/functions.js'

import soundFile from '@/assets/sounds/sound.mp3'; 
export default {
  name: 'info',
  data() {
    return {
      audioSrc: soundFile,
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
  },
}
</script>

<template>
  <div class="info-wrapper">
    <div class="info">
      <div>
        <p class="mt-3 mb-3">Detail-oriented Frontend Developer and Digital Designer
        with over 9 years of experience in web development,
        UI/UX design, and motion graphics.</p>
        <p class="mb-1">🌐 Web Design and Development</p>
        <p>👾 Video Editing and Motion Graphics</p>
      </div>
      
      <div class="flex flex-col gap-2">
        <a class="button" href="mailto:sanzdecastro@gmail.com">Email me</a>
        <router-link class="button" to="/" @click="playSound();">
        Back</router-link>
        <audio ref="audioElm" :src="audioSrc"></audio> 
      </div>
      
    </div>
  </div>
</template>

<style >

.info-wrapper {
  width: 100vw;
  height: 70dvh;
  @apply
  rounded-xl
  absolute 
  left-0
  p-3
  pb-20
  text-white
  bg-black;
  .info {
    @apply
    
    h-full
    flex
    justify-between
    flex-col;
    p{
      font-size: clamp(16px, 3vw, 70px);
      line-height: clamp(20px, 3.6vw, 78px);
    }
  }

}
</style>
