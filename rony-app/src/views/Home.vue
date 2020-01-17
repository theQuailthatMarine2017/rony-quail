<template>
  <div class="home">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    	<section class="hero is-medium is-black" data-aos="slide-up" data-aos-offset="200" data-aos-easing="ease-in-out">
		  <div class="hero-body">
		    <div class="container has-text-centered">
		      <h1 class="title is-size-2 is-size-4-mobile">
		        I'm Rony Marine Quail
		      </h1>
		      <vue-typed-js class="has-center" :loopCount="4" :fadeOut="true" :backDelay="delay" :typeSpeed="50" :startDelay="1500" :loop="true" :strings="['I Develop Fullstack MEVN Web Applications']">
				  <h1 class="subtitle is-size-2 is-size-5-mobile"><span class="typing"></span></h1>
				</vue-typed-js>
				
		    </div>
		    <div class="has-text-centered">
		    <b-button type="is-white" is-large outlined v-scroll-to="'#stack'"><strong>View More</strong></b-button>
		</div>
		  </div>
		</section>
		<section class="section" id="stack" data-aos="flip-right" data-aos-offset="200" data-aos-easing="ease-in-out">
			<h1 class="subtitle is-2 is-size-2-mobile has-text-centered">What is MEVN Stack?</h1>
			 <nav class="level">
			 			<div class="level-item has-text-centered">
						    <div>
						    	<figure class="image is-80x80">
								  <img class="is-rounded img-height" src="../../public/img/mongo.png">
								</figure>
						      <p class="subtitle is-3">MongoDB</p>
						    </div>
						  </div>
						  <div class="level-item has-text-centered">
						    <div>
						    	<figure class="image is-80x80">
								  <img class="is-rounded img-height" src="../../public/img/express.png">
								</figure>
						      <p class="subtitle is-3">ExpressJS</p>
						    </div>
						  </div>
						  <div class="level-item has-text-centered">
						    <div>
						    	<figure class="image">
								  <img class="is-rounded img-height" src="../../public/img/vuejs-logo.png">
								</figure>
						      <p class="subtitle is-3">VueJS</p>
						    </div>
						  </div>
						  <div class="level-item has-text-centered">
						    <div>
						    	<figure class="image is-80x80">
								  <img class="is-rounded img-height" src="../../public/img/node.png">
								</figure>
						      <p class="subtitle is-3">NodeJS</p>
						    </div>
						  </div>
						</nav>
			

				
				    <div class="container has-text-centered">
						
				      <h2 class="subtitle is-size-6">
				        <strong>MEVN Stack</strong> is a powerful and popular web development stack used for developing the next generation of web applications.<br/>The stack uses <strong>VueJS</strong> to serve up front end pages that users interact with, <strong>NodeJS using ExpressJS</strong> to create servers with functions that control the main application and <strong>MongoDB</strong> to store and retrieve data.
				      </h2>
				    </div>
				    <div class=" mevn has-text-centered">
		    <b-button type="is-black" is-large outlined v-scroll-to="'#portfolio'"><strong>View More</strong></b-button>
		</div>
			
		  </section>

		  <section id="portfolio" class="section portfolio" data-aos="zoom-in-up" data-aos-offset="200" data-aos-easing="ease-in-sine">
		    <div class="container has-text-centered">
		      <h1 class="subtitle is-2 is-size-2-mobile">Portfolio</h1>
		      <h2 class="subtitle">
		        Some of my work using the MEVN Stack.
		      </h2>
		    </div>

		    <div class="row">

		    	<div class="columns works">

				  <div class="column">
				  	<md-card>
				      <md-card-media>
				        <img class="img-height-1" src="../../public/img/placeholder.jpg" alt="People">
				      </md-card-media>

				      <md-card-header>
				        <div class="md-title">Jenga Docs</div>
				        <div class="md-subhead">Online Receipt & Invoice Generator.</div>
				        <div class="md-subhead"><a>jenga-docs.herokuapp.com</a></div>
				      </md-card-header>

				      <md-card-expand>
				        <md-card-actions md-alignment="space-between">

				          <md-card-expand-trigger>
				            <md-button class="md-icon-button">
				              <md-icon class="fa fa-arrow-down"></md-icon>
				            </md-button>
				          </md-card-expand-trigger>
				        </md-card-actions>

				        <md-card-expand-content>
				          <md-card-content>
				            Jenga Docs lets users register an account which they can send receipts or invoices. A user registers an account and existing account users can log in, fill out a form in the form of steps which compiles the inputs given and generates a pdf document of either a recipt or an invoice. Future plans include CV, Professional Letter documents and mpesa payment for accounts subscriptions. 
				          </md-card-content>
				        </md-card-expand-content>
				      </md-card-expand>
				    </md-card>
				  </div>

				  <div class="column">
					  	
					  		<md-card>
				      <md-card-media>
				        <img class="img-height-1" src="../../public/img/placeholder1.jpeg" alt="People">
				      </md-card-media>

				      <md-card-header>
				        <div class="md-title">Rony Quail</div>
				        <div class="md-subhead">Portfolio Website and Automated Email Server.</div>
				        <div class="md-subhead"><a>rony-quail.herokuapp.com</a></div>
				      </md-card-header>

				      <md-card-expand>
				        <md-card-actions md-alignment="space-between">

				          <md-card-expand-trigger>
				            <md-button class="md-icon-button">
				              <md-icon class="fa fa-arrow-down"></md-icon>
				            </md-button>
				          </md-card-expand-trigger>
				        </md-card-actions>

				        <md-card-expand-content>
				          <md-card-content>
				            This website is a portfolio website showcasing my skills using the stack. If you click the 'Get In Touch' button it will take you to a contacts page where you fill a form and submit. Once submitting the form is sent to the server that creates an automated email to my email account where I can then get back to my customers. No MongoDB included.
				          </md-card-content>
				        </md-card-expand-content>
				      </md-card-expand>
				    </md-card>
					  	

				  </div>

	

				  
				</div>

				<div class="columns works">

				  <div class="column">
				  	<md-card>
				      <md-card-media>
				        <img class="img-height-1" src="../../public/img/placeholder3.jpg" alt="People">
				      </md-card-media>

				      <md-card-header>
				        <div class="md-title">Freelancer Kenya</div>
				        <div class="md-subhead">Online Project Management Tool.</div>
				        <div class="md-subhead"><strong>Early Stages Development</strong></div>
				      </md-card-header>

				      <md-card-expand>
				        <md-card-actions md-alignment="space-between">

				          <md-card-expand-trigger>
				            <md-button class="md-icon-button">
				              <md-icon class="fa fa-arrow-down"></md-icon>
				            </md-button>
				          </md-card-expand-trigger>
				        </md-card-actions>

				        <md-card-expand-content>
				          <md-card-content>
				            Freelancer Kenya is a powerful online project management tool targeting freelancers who need a platform they can access from anywhere and any device to manage projects, create tasks and timelines for tasks, create official standard invoices and receipts for clients, add client and staff accounts who can access the portal and the admins projects. To be a paid account in the future. 
				          </md-card-content>
				        </md-card-expand-content>
				      </md-card-expand>
				    </md-card>
				  </div>

				  <div class="column">
					  	
					  		<md-card>
				      <md-card-media>
				        <img class="img-height-1" src="../../public/img/placholder4.jpg" alt="People">
				      </md-card-media>

				      <md-card-header>
				        <div class="md-title">Kenya Fruitcake Company</div>
				        <div class="md-subhead">Online Bakery Order System.</div>
				        <div class="md-subhead"><strong>Final Stages of Development</strong></div>
				      </md-card-header>

				      <md-card-expand>
				        <md-card-actions md-alignment="space-between">

				          <md-card-expand-trigger>
				            <md-button class="md-icon-button">
				              <md-icon class="fa fa-arrow-down"></md-icon>
				            </md-button>
				          </md-card-expand-trigger>
				        </md-card-actions>

				        <md-card-expand-content>
				          <md-card-content>
				            Kenya Fruitcake Company specialize in making homemade fruitcakes in Kenya and this MEVN Stack application has to portals, one for clients to view avaiable cakes and place an order plus an admin section where the admins can manage cakes and orders. 
				          </md-card-content>
				        </md-card-expand-content>
				      </md-card-expand>
				    </md-card>
					  	

				  </div>

	

				  
				</div>



			</div>

		  </section>


		 


  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
   data(){
        return {
            carousels: [
                { text: 'Slide 1', color: 'primary' },
                { text: 'Slide 2', color: 'info' },
                { text: 'Slide 3', color: 'success' },
                { text: 'Slide 4', color: 'warning' },
                { text: 'Slide 5', color: 'danger' }
            ],
            delay:1600
        }
    },
    methods:{
    	scrollstack(){
    		
    		this.goto('stack')
    	}
    }
}
</script>

<style scoped>

.img-height{
	height:120px;
	width:120px;
}

.img-height-1{
	height:320px;
}

.portfolio{
	background-color:#f5f5f5;
}

.works{
	padding:30px;
}

.carousel-height{
	height:20px;
	padding:20px;
}.

.footer{
	position:fixed;
}

.has-center{
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  margin-bottom:25px;
}

.mevn {
	margin-top:50px;
}

</style>
