<template lang="pug">
    #intro-cov
        .bg-cov-intro
        header-cov
        section.section-home
            .container-fluid
                .row
                    .col-lg-6
                        .content-hour-people
                            img.people-phone.phone-hidde-mobile(src="/images/people-phone.svg")
                            img.people-phone.phone-hidde-desktop(src="/images/people-phone-mobile.svg")
                            .hour {{ hour }}
                                .day {{ day }}
                    .col-lg-6
                        .content-title-description
                            .title-cov Help stop the spread of COVID-19
                            .title-cov Take 1 minute each day
                        .content-download.full
                            button.btn.btn-dark-xd.btn-lg.download-button(type='button')
                                i.fas.fa-paper-plane
                                |  Report now
                        .content-download
                            button.btn.btn-dark.btn-lg.download-button(type='button')
                                i.fab.fa-apple
                                |  Download
                            button.btn.btn-outline-dark.btn-lg.download-button(type='button')
                                i.fab.fa-google-play
                                |  Download
</template>

<script>
import moment from "moment";
import HeaderCov from "@/views/Header.vue";
export default {
  components: {
    HeaderCov
  },
  computed: {
    hour() {
      return `${moment().hour()}:${moment().minutes()}`;
    },
    day() {
      return moment().format("MMM Do dddd");
    }
  }
};
</script>

<style lang="sass">
@import 'bulma/sass/utilities/_all'

+touch
    .content-title-description
        margin-top: 30px
    .content-download
        &.full
            button
                color: #fff
                font-weight: bold
        .btn-dark
            background-color: #fff
            color: #343a40
            border-color: #fff
        .btn-outline-dark
            color: #fff
            border-color: #fff
    .hour
        font-size: 22px
        top: 16px
        left: 64px
        width: 71px
        .day
            font-size: 8px
    .people-phone, .content-hour-people
        width: 270px
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
        color: #fff
+desktop
    .section-home
        display: flex
        align-items: center
    .content-title-description
        margin-top: 100px
    .hour
        font-size: 44px
        top: 26px
        left: 99px
        width: 130px
        .day
            font-size: 14px
    .people-phone, .content-hour-people
        width: 500px
    #intro-cov
        height: 100vh
        &::before
            background-size: 70%
            background-position: 100% center
            width: 110%
            height: 130%
        &::after
            background-image: url(/images/burble-right.svg)
            top: -210px
            right: -170px
            width: 440px
            height: 480px
            background-size: contain
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
        font-size: 35px
        line-height: 35px
        text-align: right
    .content-download
        grid-template-columns: repeat(2, 1fr)
        grid-column-gap: 30px
        &.full
            grid-template-columns: none
            button
                color: #009cde
                font-weight: bold
    .section-home
        height: calc(100vh - 60px)
+fullhd
    #intro-cov
        &::before
            background-size: 80%
            background-position: 120% -60%
            width: 110%
            height: 160%

.download-button
    display: flex
    align-items: center
    justify-content: center
    svg
        margin-right: 10px
.hour
    position: absolute
    color: #fff
    transform: skewX(13deg) skewY(1deg)
    text-align: center
    display: flex
    flex-direction: column
    .day
        width: 100%
        max-width: 100%
.title-image
    transform: rotate(-5deg)
    max-width: 400px
.title-cov
    font-weight: bold
    position: relative
.content-download
    display: grid
    margin-top: 20px
#intro-cov
    position: relative
    overflow: hidden
    .bg-cov-intro
        position: absolute
        width: 100%
        height: 100%
        top: -1px
        left: 0
        background-color: #009cde
        z-index: -2
    &::before, &::after
        content: ''
        position: absolute
        background-repeat: no-repeat
    &::before
        top: -70px
        left: 0
        background-image: url(/images/curve.svg)
        z-index: -1
</style>
