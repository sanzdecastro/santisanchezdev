<script>
import { RouterLink, RouterView } from 'vue-router'
import gsap from 'gsap';


export default {
  name: 'App',
  data() {
    return {
      duplication: 21,
      duplicationMotion: 50
    }
  },
  mounted() {
    this.animateIntro();
    this.animationLine();
  },
  methods: {

    animationLine() {
      let line = document.querySelector(".line-media")

      var tl = gsap.timeline({
        repeat: -1,
        yoyo: true,
      });

      tl.to(line, {
        xPercent: -100,
        duration: 80,
      })
    },
    animateIntro() {

      function animateIntro(introElement) {
        let phrase = introElement.querySelectorAll(".phrase");

        var tl = gsap.timeline();

        gsap.set(introElement, { autoAlpha: 1 });
        gsap.set(phrase, { autoAlpha: 0 });

        tl.to(phrase, { 
          autoAlpha: 1, 
          stagger: .05 
        }).to(phrase, 
        { autoAlpha: 0, 
          stagger: .05 
        }).to(introElement, {
          autoAlpha: 0,
          onComplete: function() {
            introElement.classList.add("ended");
            
            // Verificar si este es el último elemento .intro y reiniciar desde el primero si es necesario
            let nextIntro = document.querySelector(".intro:not(.ended)");
            if (!nextIntro) {
              // Si no hay más elementos .intro sin animar, reinicia desde el primero
              let firstIntro = document.querySelector(".intro");
              if (firstIntro) {
                // Eliminar la clase .ended para permitir que la animación se ejecute nuevamente
                document.querySelectorAll(".intro").forEach(el => el.classList.remove("ended"));
                animateIntro(firstIntro);
              }
            } else {
              // Si hay otro elemento .intro sin animar, continúa con él
              animateIntro(nextIntro);
            }
          }
        });
      }

      // Iniciar la animación con el primer elemento .intro:not(.ended)
      let firstIntro = document.querySelector(".intro:not(.ended)");

      if (firstIntro) {
        animateIntro(firstIntro);
      }
      
    }
  }
}
</script>

<template>
  <header>

    <!-- <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div> -->
  </header>

  <!-- <RouterView /> -->

  <div class="intro-wrapper">
    <div class="intro grid md:grid-cols-12 grid-cols-5">
      <div class="phrase title" v-for="n in duplication" >Digital-first Designer <br><span>&</span> Frontend Developer</div>
    </div>
    <div class="intro grid md:grid-cols-12 grid-cols-5">
      <div class="phrase" v-for="n in duplicationMotion" >Web design</div>
    </div>
    <div class="intro grid md:grid-cols-12 grid-cols-5">
      <div class="phrase" v-for="n in duplicationMotion" >Web development</div>
    </div>
    <div class="intro grid md:grid-cols-12 grid-cols-5">
      <div class="phrase" v-for="n in duplicationMotion" >Motion Graphics</div>
    </div>
    <div class="intro grid md:grid-cols-12 grid-cols-5">
      <div class="phrase" v-for="n in duplicationMotion" >Video Editing</div>
    </div>
    <div class="intro grid md:grid-cols-12 grid-cols-5">
      <div class="phrase" v-for="n in duplicationMotion" >Branding</div>
    </div>
  </div>

  <div class="media-wrapper">
    <div class="line-media">
      <video muted autoplay loop>
      <source src="./assets/media/counter.mp4" type="video/mp4">
      </video>
      <video muted autoplay loop>
        <source src="./assets/media/24-36.mp4" type="video/mp4">
      </video>
      <video muted autoplay loop>
        <source src="./assets/media/marina-circle.mp4" type="video/mp4">
      </video>
      <video muted autoplay loop>
        <source src="./assets/media/old.mp4" type="video/mp4">
      </video>
      <video muted autoplay loop>
        <source src="./assets/media/marina-colors.mp4" type="video/mp4">
      </video>
      <video muted autoplay loop>
        <source src="./assets/media/marina_pointer.mp4" type="video/mp4">
      </video>
      <video muted autoplay loop>
        <source src="./assets/media/intro-2436.mp4" type="video/mp4">
      </video>
    </div>
    
  </div>
   

</template>

<style>
body {
  width: 100vw;
  height: 100vh;
  @apply
  fixed
  p-4
  overflow-hidden;
}

.media-wrapper {
  width: 100vw;
  height: 100vh;
  @apply
  fixed
  top-0
  left-0
  flex
  justify-center
  items-center;
  @apply
  mix-blend-difference;
  .line-media {
    @apply
    flex;
    video, img {
      @apply
      md:h-96
    }
  }
  
}

.intro-wrapper {
  width: 100vw;
  height: 100vh;
  @apply
  relative
  bg-black
  text-white
  object-left-top
  overflow-hidden;

  .intro {
    transform-origin: left top;
    @apply
    gap-x-3
    opacity-0
    bg-black
    w-full
    top-0
    left-0
    absolute
    scale-150
    md:scale-125;
  }
}

.phrase {
  @apply
  md:col-span-4
  col-span-2
  text-nowrap
  mb-2;
  &.title {
    @apply
    mb-6;
  }
}
@media (min-width: 1024px) {

}
</style>
