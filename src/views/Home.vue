<template>
<div class="bg-black">  
  <!-- <div class="bg-fixed responsive-image">   -->

<!--Nav-->
   <div>
      <Nav/>
     <video autoplay loop muted class="object-fill h-screen w-full">
          <source class="object-fill h-48 w-full" src="../assets/images/background.mp4" type="video/mp4" />
        </video>
       <div class="container m-auto text-center px-6 opacity-100">
         <br><br>
      <router-link to="/startproject" class="font-bold rounded-full mt-48 py-4 px-8 shadow-lg uppercase tracking-wider hover:border-red hover:text-white hover:bg-red-600 bg-red-700 no-underline text-white">START YOUR PROJECT +</router-link>
    </div>
  </div>      
  <br><br>
        <!-- Features -->
        <section class="container mx-auto px-6 p-10">
          <div class="flex items-center flex-wrap mb-20">
            <div class="w-full md:w-1/2 pr-10">
              <h4 class="text-4xl text-white font-bold mb-3">Who Are We?</h4>
              <br>
              <p class="text-white mb-8">We’re a modern specialist film production and animation company, currently based in Accra Ghana and working across the Globe. Our team includes expert producers, editors, camera operators, motion designers and drone pilots – all the skills needed to turn your brief into high-quality creative work.</p>
            </div>
            <div class="w-full md:w-1/2">
              <img class="rounded-lg" src="../assets/images/who-are-we-2.jpeg" alt="pic" />
            </div>
          </div>
          <br><br><br>
          <div class="flex items-center flex-wrap mb-20">
            <div class="w-full md:w-1/2">
              <img class="rounded-lg" src="../assets/images/what-we-do3.jpeg" alt="use the force" />
            </div>
            <div class="w-full md:w-1/2 pl-10">
              <h4 class="text-4xl text-white font-bold mb-3">What we Do</h4>
              <br>
              <p class="text-white mb-8">whether it’s social media content, internal communications or a full brand campaign, our films bring your stories to life. We love a challenge and offer everything from video production to motion graphics and immersive 360 experiences. Product launches, training films and live event coverage are all in a day’s – or night’s – work for us.
              As a specialist production company, our mission is to connect people through film. And we’ll work with you to find the best way to do that. Maybe you’re planning a product launch or social media campaign, or need to communicate a vital message to staff or customers. You know what you want to achieve, but what’s the next step?
              Whatever stage your brief is at, we’ll use our expertise in all areas of production to offer creative and practical solutions. If a beautifully shot and edited video is the answer, we’re onto it. If you need animated motion graphics, an eye-catching time-lapse sequence, dramatic drone footage – or a mix of all of those – we’ll provide them too
              We can arrange locations and actors, voiceovers and even source the perfect props. We pride ourselves on offering clear and straightforward pricing with no hidden costs. And because our team comes with its own kit, your budget goes on quality, not hire fees. Many of our clients come to us time and time again, building relationships that have lasted long. They know that we’ll understand what they need and will work with their strategy, timescale and budget to make it happen. We do our best work when we become part of your team – bringing your story to life and tracking the results as you connect with your audience
              </p>
            </div>
          </div>
          <br><br><br> 
          <div class="flex items-center flex-wrap mb-20">
            <div class="w-full md:w-1/2 pr-10">
              <h4 class="text-3xl text-white font-bold mb-3">Client Reviews</h4>
              <br>
              <p class="text-white mb-8">We had a client review a first draft of a video we were producing for them. “We were all in tears by the end of the video,” she told us. “How do you do that in only four minutes?
              Now we’re not in the business of intentionally making people cry. But we are in the business of moving viewers emotionally, We do that by mastering and utilizing the oldest video production technology there is—storytelling. No amount of high-tech camera, lighting, or sound equipment can make up for a poorly told story. 
              Stories are what grab viewers, keep them engaged, and move them to act, whether that’s contributing to your nonprofit or buying your product or service. 

              We come from documentary film backgrounds, where success and failure rest on the ability to tell a compelling story.  Our track record speaks for itself You don’t earn those kinds of honors unless viewers are highly engaged with your stories.
              </p>
            </div>
            <div class="w-full md:w-1/2">
            <Carousel />
            </div>
          </div>
        </section>
        <!-- Testimonials -->
        <section class="bg-fixed responsive-image1">
          <div class="container mx-auto px-6 py-20 h-screen">
            <br><br><br>
            <h2 class="text-4xl font-bold text-center text-white mb-8">Our Work</h2>
            <br><br>
            <div class="flex flex-wrap">
              <div class="w-full h-auto md:w-1/3 px-2 mb-14">
                <div class="flex flex-col justify-between h-full bg-white rounded shadow py-2">
                  <video autoplay loop muted class="object-fill">
                    <source src="../assets/images/frontV1.webm" type="video/mp4" />
                  </video>                </div>
              </div>
              
              <div class="w-full h-auto md:w-1/3 px-2 mb-14">
                <div class="flex flex-col justify-between h-full bg-white rounded shadow py-2">
                  <video autoplay loop muted class="object-fill">
                    <source src="../assets/images/frontV2.webm" type="video/mp4" />
                  </video>                </div>
              </div>         
              <div class="w-full h-auto md:w-1/3 px-2 mb-14">
                <div class="flex flex-col justify-between h-full bg-white rounded shadow py-2">
                  <video autoplay loop muted class="object-fill">
                    <source src="../assets/images/frontV.webm" type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </section>      
        <!--Call to Action-->
        <section class="responsive-image bg-fixed">
          <div class="container mx-auto px-6 text-center py-20 h-screen">
            <br><br><br><br>
            <h2 class="mb-6 text-4xl font-bold text-center text-white">
              WizSHOT Film are more than just very skilled video producers. They are video marketing professionals. You see it in the work they deliver. You ask 100%, but what you get is 110% - and working with them is fun. We will hire them again and again! <br><br>

              Kingleys, CEO - WizSHOT
            </h2>
            <!-- <h3 class="my-4 text-2xl text-white">Report to command center. Take it easy.</h3> -->
            <br><br><br>
            <router-link to="/startproject" class="font-bold rounded-full mt-48 py-4 px-8 shadow-lg uppercase tracking-wider hover:border-red hover:text-white hover:bg-red-600 bg-red-700 no-underline text-white">START YOUR PROJECT +</router-link>
          </div>
        </section>        
     
  <Footer/>
</div>
</template>

<script>
import Carousel from "@/components/Carousel"
import Nav from "@/components/Nav"
import Footer from "@/components/Footer"
export default {
  name: 'Home',
  components: {Carousel, Nav, Footer}
}
</script>


<style scoped>
*, *:before, *:after {
	box-sizing: border-box;
}

body {
	margin: 0;
	padding: 0;
}


.responsive-image1 {
	background-image: url('../assets/images/background1.jpeg');
	min-height: 200px;
	background-size: cover;
	background-position: 50% 50%;
	background-repeat: no-repeat;
}

.responsive-image {
	background-image: url('../assets/images/background.jpeg');
	min-height: 200px;
	background-size: cover;
	background-position: 50% 50%;
	background-repeat: no-repeat;
}
</style>
