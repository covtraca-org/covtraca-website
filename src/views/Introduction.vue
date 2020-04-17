<template lang="pug">  
  section#introduction
    .container-fluid
        .row(v-if="!invert")
            .col-lg-6
                h1.title-cov Take 1 minute to report your health daily, even if you're well.
                ul.text-2
                    li Help slow the outbreak
                    li Join millions of people helping to fight COVID-19
                    li Help scientists identify high risk areas in the whole world open source published in all languages through out the globe free to use and this project will be live even after corona virus pandemic to be used by anybody through out the world
                img.title-image.phone-hidde-desktop(:class="{ 'to-right': !invert }", src='/images/iphone6.png', alt='iphone-mockup')
                .content-download
                    button.btn.btn-dark.btn-lg.download-button(type='button')
                        i.fab.fa-apple
                        |  Download
                    button.btn.btn-outline-light.btn-lg.download-button(type='button')
                        i.fab.fa-google-play
                        |  Download
            .col-lg-6.phone-hidde-mobile
                img.title-image(:class="{ 'to-right': !invert }", src='/images/iphone6.png', alt='iphone-mockup')
        .row(v-else)
            .col-lg-6.phone-hidde-mobile
                img.title-image(:class="{ 'to-left': invert }", src='/images/iphone6.png', alt='iphone-mockup')
            .col-lg-6
                h1.title-cov Take 1-minute to self-report daily, even if you are well.
                span Help our scientists identify
                ul.text-2
                    li High-risk areas in the whole world
                    li Who is most at risk, by better understanding symptoms linked to underlying health conditions
                    li How fast the virus is spreading in your area
                img.title-image.phone-hidde-desktop(:class="{ 'to-right': invert }", src='/images/iphone6.png', alt='iphone-mockup')
                .content-download
                    button.btn.btn-dark.btn-lg.download-button(type='button')
                        i.fab.fa-apple
                        |  Download
                    button.btn.btn-outline-light.btn-lg.download-button(type='button')
                        i.fab.fa-google-play
                        |  Download            
</template>

<script>
export default {
  props: {
    invert: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="sass">
@import 'bulma/sass/utilities/_all'

+touch
    .title-image
        width: 70%
        &.to-right
            right: -17%
        &.to-left
            left: -17%
        position: relative
    .phone-hidde-mobile
        display: none
    .title-cov
        font-size: 2rem
        line-height: 2rem
+desktop
    .title-image
        width: 100%
        &.to-right
            right: -10%
        &.to-left
            left: -10%
        position: absolute
    .phone-hidde-desktop
        display: none
    .title-cov
        font-size: 3rem
        line-height: 3rem
    .content-download
        grid-template-columns: repeat(2, 1fr)
        grid-column-gap: 30px
.title-image
    transform: rotate(-5deg)
    max-width: 400px
.title-cov
    font-weight: bold
    margin-bottom: 30px
.content-download
        display: grid
</style>
