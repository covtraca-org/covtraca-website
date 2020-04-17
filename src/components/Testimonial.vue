<template lang="pug">
    section#press.container-fluid
        .testimonial-carousel
            carousel(:perPage="1", paginationActiveColor="yellow")
                slide.slide-testimonial(v-for="(testimonial, index) in testimonials", :key="index")
                    h2.testimonial-title {{ testimonial.title }}
                    img.testimonial-image(:src='testimonial.image', :alt='testimonial.title')
                    em {{ testimonial.description }}                
        section.press-container
            carousel(:perPage="1",
                    :perPageCustom="[[768, 3]]",
                    paginationActiveColor="yellow",
                    :paginationEnabled="false")
                slide.slide-press(v-for="(press, index) in presses", :key="index")
                    img.press-logo(:src='press.image', alt='Press')
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
export default {
  components: {
    Carousel,
    Slide
  },
  data() {
    return {
      presses: [
        { image: "/images/tnw.png" },
        { image: "/images/bizinsider.png" },
        { image: "/images/mashable.png" }
      ],
      testimonials: [
        {
          title: "Title testimonial",
          image: "/images/holder.jpg",
          description: "Description testimonial"
        },
        {
          title: "Title testimonial",
          image: "/images/holder.jpg",
          description: "Description testimonial"
        },
        {
          title: "Title testimonial",
          image: "/images/holder.jpg",
          description: "Description testimonial"
        },
        {
          title: "Title testimonial",
          image: "/images/holder.jpg",
          description: "Description testimonial"
        }
      ]
    };
  }
};
</script>

<style lang="sass">
@import 'bulma/sass/utilities/_all'

+touch
    .testimonial-title
        font-size: 2rem
+desktop
    .testimonial-title
        font-size: 3rem
.testimonial-image
    width: 70px
    border-radius: 50%
    margin: 20px
.slide-testimonial, .slide-press
    display: flex
    align-items: center
    flex-direction: column
.testimonial-title, em
    color: #fff
.testimonial-title
    line-height: 1.5
.press-logo
    max-height: 40px
.press-container
    margin: 20px 0
    padding: 20px
    background: white
    border-radius: 10px
    box-shadow: 16px 20px 9px rgba(0, 0, 0, 0.22)
</style>
