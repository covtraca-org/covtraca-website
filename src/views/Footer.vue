<template lang="pug">
   footer.container-fluid
        .row
            .col-12.col-md.content-icon-cov
                img.d-inline-block.align-top.icon-cov(src='/images/logo.svg', height='38rem', width='38rem', style='margin-top: unset;', alt='')                
            .col-6.col-md
                h5 Options
                ul.list-unstyled.text-small                    
                    li
                        router-link.item-foot(to="/report") {{ $t('reportButton') }}
                    li
                        router-link.item-foot(to='/map') {{ $t('viewMapButton') }}                    
            .col-6.col-md
                h5 Download
                ul.list-unstyled.text-small
                    li
                        a.item-foot(href='#') Google Play
                    li
                        a.item-foot(href='#') App Store
            .col-6.col-md
                h5 About
                ul.list-unstyled.text-small.social
                    li
                        a.item-foot(href="https://github.com/covtraca-org", target="_blank")
                            .social-icon
                                i.fab.fa-github
                            span Github
                    li
                        a.item-foot(href="https://facebook.com/covtraca", target="_blank")
                            .social-icon
                                i.fab.fa-facebook-f
                            span Facebook
                    li
                        a.item-foot(href="https://twitter.com/covTraca/", target="_blank")
                            .social-icon
                                i.fab.fa-twitter
                            span Twitter
                    li
                        a.item-foot(href="https://instagram.com/covtraca", target="_blank")
                            .social-icon
                                i.fab.fa-instagram
                            span Instragram        
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
