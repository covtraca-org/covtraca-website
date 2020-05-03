<template lang="pug">
	section.is-blue.container-curve
		.container-fluid
			h2.title-section(:class="{ 'no-margin' : sended }") {{ !sended ? $t('joinTeam') : $t('messageSended') }}
			form(v-if="!sended")
				.row.justify-content-center
					.col-md-6
						.form-group
							input.form-control(type='text', :placeholder="$t('yourName') + '*'", v-model='fields.name')
						.form-group
							input.form-control(type='text', :placeholder="$t('yourEmail') + '*'", v-model='fields.email')
						.form-group
							textarea.form-control(:placeholder="$t('yourMessage') + '*'", v-model='fields.message', style='width: 100%; height: 150px;')
						.form-group
							.content-button-nav.full
								button(type='button', @click.prevent="sendMail") {{ !loading ? $t('sendMessage') : $t('sending') }}
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      fields: {
        name: "",
        email: "",
        message: ""
      },
      loading: false,
      sended: false
    };
  },
  methods: {
    sendMail() {
      let vm = this;
      vm.loading = !vm.loading;
      axios
        .post("https://covtraca-backend.test/v1/join_team", vm.fields)
        .then(res => {
          console.log(res);
          vm.sended = true;
        })
        .catch(err => {
          console.log(err);
          vm.sended = false;
        })
        .then(() => {
          vm.loading = !vm.loading;
        });
    }
  }
};
</script>

<style lang="sass" scoped>
.no-margin
	margin: 0 !important
.title-section
	text-align: center
	margin-bottom: 60px
.form-control, .content-button-nav
	font-weight: bold
	font-size: 1.2em
	height: calc(2.5em + 0.75rem + 2px)
.form-control
	&:focus
		outline: none
		color: #009cde
		border-color: inherit
		box-shadow: none
.form-group
	button
		background: #009cde
		color: #fff
		box-shadow: 4px 5px 0px #0a729e
</style>
