import { defineStore } from 'pinia';
import { gsap } from "gsap";

export const useFunctions = defineStore('functions', {
    state: () => ({
      info: false,
    }),
    getters: {
    },
    actions: {
      setIsInInfoRoute(value) {
        this.info = value;
        console.log(this.info)
      },
      
      animationCard() {
        if(!this.info){
          var tl = gsap.timeline();

          tl.to(".info-wrapper", {
            yPercent: 0,
          }).to(".button-wrapper.info", {
            yPercent: 0,
          })
        } else {

          var tl = gsap.timeline();
          
          tl.to(".info-wrapper", {
            yPercent: -100,
          }).to(".button-wrapper.info", {
            yPercent: 100,
          },'<')
        }
      },
    },
})