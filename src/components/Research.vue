<template lang="pug">
    section#research.container-fluid
        h2.title-research Research updates
            p Description...
        .card-deck.row
            .card
                img.card-img-top(src='images/image.jpg', alt='...')
                .card-body
                    h5.card-title Card title
                    p.card-text
                    | Some quick example text to build on the card title and make up the bulk of the card's content.
                    a.btn.btn-primary.som(href='#') Go somewhere
            .card
                img.card-img-top(src='images/image.jpg', alt='...')
                .card-body
                    h5.card-title Card title
                    p.card-text
                    | Some quick example text to build on the card title and make up the bulk of the card's content.
                    a.btn.btn-primary.som(href='#') Go somewhere
            .card
                img.card-img-top(src='images/image.jpg', alt='...')
                .card-body
                    h5.card-title Card title
                    p.card-text
                    | Some quick example text to build on the card title and make up the bulk of the card's content.
                    a.btn.btn-primary.som(href='#') Go somewhere
        
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

<style lang="sass" scoped>
@import 'bulma/sass/utilities/_all'

+touch
    .card-deck
        padding: 0 20px
    .title-research
        font-size: 2em
+desktop
    .title-research
        font-size: 3em

.title-research
    font-weight: bold
    text-align: center
    margin-bottom: 30px
    p
        font-weight: 100
        font-size: 20px
.btn
  width: 100%
  margin-top: 15px
.card
  box-shadow: 16px 20px 9px rgba(0, 0, 0, 0.18)
</style>
