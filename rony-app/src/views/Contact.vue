<template>
  <div data-aos="slide-up" data-aos-offset="200" data-aos-easing="ease-in-sine" class="contact">
    <section class="section">
    <div class="container has-text-centered">
      <h1 class="title is-size-3 is-size-5-mobile">Fill The Form Below To Create Proposal</h1>
      <h2 class="subtitle">
        I will get back to you as soon as I receive your proposal!
      </h2>
    </div>
    <div class="form">
	    <div class="container has-text-centered">
	    <b-field label="Business Name">
	            <b-input placeholder="What Your Business / Personal Name?" v-model="proposal.businessname"></b-input>
	        </b-field>
	        <b-field label="Email">
	            <b-input v-model="proposal.email" placeholder="How Can I get Back To You?" type="email"
	         maxlength="30">
	            </b-input>
	        </b-field>
	        <b-field label="Project Summary">
	            <b-input v-model="proposal.summary" placeholder="Tell Me A Little About Your Project" maxlength="200" type="textarea"></b-input>
	        </b-field>
	        <div class="buttons">
            <b-button type="is-black" @click="sendproposal" :loading="loading" outlined expanded><strong>Submit Proposal</strong></b-button>
        </div>
	    </div>
	</div>
  </section>
  </div>
</template>

<script>
import axios from 'axios';

export default {
	data(){
		return {
			proposal: {
				businessname:'',
				email:'',
				summary:''
			},
			loading:false
		}
	},
	methods: {
		sendproposal() {

			console.log(this.proposal)

			this.loading = true

			axios.post('/freelance/proposal',this.proposal).then(response => {

				console.log(response.data)

				if (response.data.title === "Sent"){

					this.loading = false

					this.$router.push({ path: '/' })

					this.$buefy.notification.open({
			                    duration: 5000,
			                    message: response.data.title,
			                    type: 'is-success'
			                })
				}


			})
		}
	}
}

</script>

<style scoped>

.form{
	padding-top:25px;
}
</style>
