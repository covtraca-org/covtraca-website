<template lang="pug">
   footer.container-fluid
        .row
            .col-12.col-md.content-icon-cov
                img.d-inline-block.align-top.icon-cov(src='/images/logo.svg', height='38rem', width='38rem', style='margin-top: unset;', alt='')                
            .col-6.col-md
                h5 {{ $t('optionsText') }}
                ul.list-unstyled.text-small.social
                    li
                        router-link.item-foot(to="/report")
                            .social-icon
                                i.fas.fa-paper-plane
                            span {{ $t('reportButton') }}
                    li
                        router-link.item-foot(to='/map')
                            .social-icon
                                i.fas.fa-map-marked-alt
                            span {{ $t('viewMapButton') }}
            .col-6.col-md
                h5 {{ $t('downloadText') }}
                ul.list-unstyled.text-small.social
                    li
                        a.item-foot(href='#')
                            .social-icon
                                i.fab.fa-google-play
                            span {{ $t('getIOSApp') }}
                    li
                        a.item-foot(href='#')
                            .social-icon
                                i.fab.fa-apple
                            span {{ $t('getAndroidApp') }}
            .col-6.col-md
                h5 {{ $t('followText') }}
                ul.list-unstyled.text-small.social
                    li
                        a.item-foot(href="https://github.com/covtraca-org", target="_blank")
                            .social-icon
                                i.fab.fa-github
                            span {{ $t('socialGI') }}
                    li
                        a.item-foot(href="https://facebook.com/covtraca", target="_blank")
                            .social-icon
                                i.fab.fa-facebook-f
                            span {{ $t('socialFB') }}
                    li
                        a.item-foot(href="https://twitter.com/covTraca/", target="_blank")
                            .social-icon
                                i.fab.fa-twitter
                            span {{ $t('socialTW') }}
                    li
                        a.item-foot(href="https://instagram.com/covtraca", target="_blank")
                            .social-icon
                                i.fab.fa-instagram
                            span {{ $t('socialIN') }}
            .col-6.col-md
                h5 {{ $t('legalText') }}
                ul.list-unstyled.text-small.social
                    li
                        a.item-foot(href="/docs/PrivacyNotice.pdf", target="_blank")
                            .social-icon
                                i.fas.fa-balance-scale-right
                            span {{ $t('privacy') }}
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getLang"])
  }
};
</script>
<style lang="sass" scoped>
@import 'bulma/sass/utilities/_all';

+touch
    .content-icon-cov
        text-align: center
        .icon-cov
            margin-bottom: 50px
.item-foot
    color: #fff
.social
    .item-foot
        display: flex
        .social-icon
            width: 20px
            text-align: center
            margin-right: 10px
footer
    color: #fff
h5
    font-weight: bold
</style>
