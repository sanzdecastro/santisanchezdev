<script>
import { RouterLink, RouterView } from 'vue-router'
import gsap from 'gsap';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { FreeMode, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

export default {
  name: 'App',
  components: {
      Swiper,
      SwiperSlide,
  },
  setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        modules: [FreeMode, Autoplay, Pagination],
      };
    },
  data() {
    return {
      duplication: 30,
      duplicationMotion: 50
    }
  },
  mounted() {
    this.animateIntro();
    // this.animationLine();
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
        },"-=2");
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
      <div class="phrase" v-for="n in duplicationMotion" >Santi Sánchez</div>
    </div>
    <div class="intro grid md:grid-cols-12 grid-cols-5">
      <div class="phrase" v-for="n in duplicationMotion" >Digital-first Designer</div>
    </div>
    <div class="intro grid md:grid-cols-12 grid-cols-5">
      <div class="phrase" v-for="n in duplicationMotion" >Frontend Developer</div>
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
    <swiper
      :modules="modules"
      :slidesPerView="'auto'"
      :space-between="0"
      :free-mode="true"
      :loop="true"
      :speed="5000"
      :on_free-mode-no-momentum-release="false"
      :autoplay="{ delay: 1, disableOnInteraction: false }"
    >
      <swiper-slide>
        <video playsinline muted autoplay loop>
        <source src="./assets/media/counter.mp4" type="video/mp4">
        </video>
      </swiper-slide>
      <swiper-slide>
        <video playsinline muted autoplay loop>
          <source src="./assets/media/24-36.mp4" type="video/mp4">
        </video>
      </swiper-slide>
      <swiper-slide>
        <video playsinline muted autoplay loop>
          <source src="./assets/media/marina-circle.mp4" type="video/mp4">
        </video>
      </swiper-slide>
      <swiper-slide>
        <video playsinline muted autoplay loop>
          <source src="./assets/media/old.mp4" type="video/mp4">
        </video>
      </swiper-slide>
      <swiper-slide>
        <video playsinline muted autoplay loop>
          <source src="./assets/media/marina-colors.mp4" type="video/mp4">
        </video>
      </swiper-slide>
      <swiper-slide>
        <video playsinline muted autoplay loop>
          <source src="./assets/media/marina_pointer.mp4" type="video/mp4">
        </video>
      </swiper-slide>
      <swiper-slide>
        <video playsinline muted autoplay loop>
          <source src="./assets/media/intro-2436.mp4" type="video/mp4">
        </video>
      </swiper-slide>
    </swiper>
  </div>
  <div class="button-wrapper">
    <a class="button" href="mailto:sanzdecastro@gmail.com">Contact</a>
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

.button-wrapper {
  font-family: 'Atlas';
  @apply
  bottom-0
  left-0
  w-full
  p-2
  fixed;
  .button {
    font-family: 'Atlas';
    letter-spacing: -.1px;
    font-size: clamp(18px, 20px, 70px);
    line-height: clamp(24px, 20px, 70px);
    @apply
    bg-white
    backdrop-blur-lg
    bg-opacity-30
    text-white
    rounded-full
    flex
    justify-center
    items-center
    px-4
    md:pt-3
    py-2;
    @media (min-width: 1024px) {
        height: auto;
        width: auto;
    }
    &:hover{
      @apply
      bg-opacity-100
      text-black;
    }
    &:active {
      @apply
      bg-opacity-100
      bg-yellow-500
      text-black;
    }
  }
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
      h-56
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
    mb-3;
  }
  span {
    font-family: "Inter", sans-serif;
    font-optical-sizing: auto;
    font-weight: 600;
    font-style: normal; 
    letter-spacing: -1px;
  }
}

.swiper-wrapper {
  .swiper-slide {
    
    @apply
    flex
    justify-center
    items-center;
    video {
      height: 80vw;
      @media (min-width: 1024px) {
        height: 30vw;
      }
      
    }
  }
}
.swiper-wrapper {
  -webkit-transition-timing-function:linear!important; 
  -o-transition-timing-function:linear!important;
  transition-timing-function:linear!important; 
}

@media (min-width: 1024px) {

}
</style>
