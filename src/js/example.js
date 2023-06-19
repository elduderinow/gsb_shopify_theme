const { gsap } = require('gsap')
const { ScrollTrigger } = require('gsap/dist/ScrollTrigger')

const onInit = () => {
   gsap.registerPlugin(ScrollTrigger)

   const useEffect = () => {
      const container = document.getElementsByClassName('image-with-text-custom')[0];
      const target = container.getElementsByClassName('title')[0]
      console.log(target)
      gsap.to(target, {
         scrollTrigger: {
            trigger: target,
            start: "top 60%",
            scrub: false,
            markers: true,
         },
         translateY: "100px"
      });
      console.log('done')
   }

   document.addEventListener('DOMContentLoaded', useEffect)
}

onInit()