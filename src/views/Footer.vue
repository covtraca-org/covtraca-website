<template lang="pug">
   footer.container-fluid
        .row
            .col-12.col-md.content-icon-cov
                img.d-inline-block.align-top.icon-cov(src='/images/1.png', height='38rem', width='38rem', style='margin-top: unset;', alt='')
            .col-6.col-md
                h5 Features
                ul.list-unstyled.text-small
                    li
                        a.text-muted(href='#') Cool stuff
                    li
                        a.text-muted(href='#') Random feature
                    li
                        a.text-muted(href='#') Team feature
                    li
                        a.text-muted(href='#') Stuff for developers
                    li
                        a.text-muted(href='#') Another one
                    li
                        a.text-muted(href='#') Last time
            .col-6.col-md
                h5 Resources
                ul.list-unstyled.text-small
                    li
                        a.text-muted(href='#') Resource
                    li
                        a.text-muted(href='#') Resource name
                    li
                        a.text-muted(href='#') Another resource
                    li
                        a.text-muted(href='#') Final resource
            .col-6.col-md
                h5 Resources
                ul.list-unstyled.text-small
                    li
                        a.text-muted(href='#') Business
                    li
                        a.text-muted(href='#') Education
                    li
                        a.text-muted(href='#') Government
                    li
                        a.text-muted(href='#') Gaming
            .col-6.col-md
                h5 About
                ul.list-unstyled.text-small
                    li
                        a.text-muted(href='#') Team
                    li
                        a.text-muted(href='#') Locations
                    li
                        a.text-muted(href='#') Privacy
                    li
                        a.text-muted(href='#') Terms
        .align-center
            .social-networks
                a.social-icon(href="")
                    i.fab.fa-facebook-f
                a.social-icon(href="")
                    i.fab.fa-twitter
                a.social-icon(href="")
                    i.fab.fa-instagram
                a.social-icon(href="")
                    i.fas.fa-envelope
            p © Copyright 2020 CovTraca
</template>
<style lang="sass">
@import 'bulma/sass/utilities/_all';

+touch
    .content-icon-cov
        text-align: center
        .icon-cov
            margin-bottom: 50px

.social-networks
    display: grid
    grid-template-columns: repeat(4, 50px)
    margin: auto
    margin-top: 20px
    .social-icon
        color: #4f4f4f
</style>
