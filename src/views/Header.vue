<template lang="pug">
    nav.navbar.navbar-expand-lg.navbar-light.bg-light
        a.navbar-brand(href='./')
            img.icon-nav-cov(src='images/1.png', alt='CovTraca icon')
            .title-app
                strong COVTRACA
                span  Symptom Tracker
        button.navbar-toggler(type='button', data-toggle='collapse', data-target='#navbarTogglerDemo02')
            span.navbar-toggler-icon
        #navbarTogglerDemo02.collapse.navbar-collapse
            ul.navbar-nav.ml-auto
                li.nav-item
                    a.nav-link(href='#footer') Contact
                li.nav-item
                    a.nav-link(href='#pricing') Pricing
                li.nav-item
                    a.nav-link(href='#cta') Download
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
.navbar-brand
    display: flex
.title-app
    display: flex
    flex-direction: column
    line-height: 15px
.icon-nav-cov
    height: 30px
    width: 30px
    margin-right: 10px
</style>
