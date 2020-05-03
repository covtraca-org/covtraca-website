<template lang="pug">
	.about-section
		section.section-fully.first.is-blue.container-curve
			.container-fluid
				.row
					.col-lg-6.flex-center
						h2.title-section About CovTraca.org
						.description-section(v-html="$t('aboutCovtraca')")
					.col-lg-6.flex-center
						.image-description.is-colaborate
		section.section-fully
			.container-fluid
				h2.title-section.center Our Story
				.row.margin
					.col-lg-6.flex-center.hidde-in-touch
						.image-description.is-open
							span Open Comunity
					.col-lg-6.flex-center
						.description-section.with-bg.to-left(v-html="$t('ourStoryOne')")
					.col-lg-6.flex-center.hidde-in-desktop
						.image-description.is-open
							span Open Comunity
				.row.margin
					.col-lg-6.flex-center
						.description-section.with-bg.to-right(v-html="$t('ourStoryTwo')")
					.col-lg-6.flex-center
						.image-description.is-open
							span Open Source
</template>

<style lang="sass">
.is-blue
	background-color: white
	.title-section
		color: #009cde
.title-section
	color: #fff
	font-weight: bold
	width: 100%
	&.center
		text-align: center
.description-section
	color: #1f1f1f
	position: relative
	&.with-bg
		padding: 20px
		background: #fff
		border-radius: 10px
		box-shadow: 0 10px 24px rgba(8, 15, 26, 0.16)
		&::before
			content: ''
			position: absolute
			width: 0
			height: 0
.image-description
	height: 300px
	background-size: contain
	background-repeat: no-repeat
	background-position: center
	margin: 20px 0
	position: relative
	width: 100%
	span
		position: absolute
		top: 50%
		left: 50%
		font-size: 1.5rem
		font-weight: bold
		color: #fff
		width: 100%
		transform: translate(-50%, -50%)
		text-align: center
		max-width: 65%
	&.is-open
		background-image: url(/images/figure-curves.svg)
	&.is-colaborate
		background-image: url(/images/collaborate.svg)
</style>
