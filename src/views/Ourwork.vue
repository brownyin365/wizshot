<template>
<div>
   <div class="responsive-image bg-fixed">
     <Nav/>
       <div class="container m-auto text-center px-6 opacity-100">
         <br><br>
      <router-link to="/startproject" class="font-bold rounded-full mt-48 py-4 px-8 shadow-lg uppercase tracking-wider hover:border-red hover:text-white hover:bg-red-600 bg-red-700 text-white">START YOUR PROJECT +</router-link>
    </div>
    <br><br>
  </div>      
  <br><br><br><br><br><br>
        <!-- Features -->
        <section class="container mx-auto px-6 p-10 bg-gray-900">
          <div class="flex items-center flex-wrap mb-20">
            <div class="w-full md:w-1/2 pr-10">
              <h4 class="text-4xl text-white font-bold mb-3">Our Work</h4>
              <br><br>
              <p class="text-gray-600 mb-8">
                  whether it’s social media content, internal communications or a full brand campaign, our films bring your stories to life. We love a challenge and offer everything from video production to motion graphics and immersive 360 experiences. Product launches, training films and live event coverage are all in a day’s – or night’s – work for us. As a specialist production company, our mission is to connect people through film. And we’ll work with you to find the best way to do that. Maybe you’re planning a product launch or social media campaign, or need to communicate a vital message to staff or customers. You know what you want to achieve, but what’s the next step? Whatever stage your brief is at, we’ll use our expertise in all areas of production to offer creative and practical solutions. If a beautifully shot and edited video is the answer, we’re onto it. If you need animated motion graphics, an eye-catching time-lapse sequence, dramatic drone footage – or a mix of all of those – we’ll provide them too We can arrange locations and actors, voiceovers and even source the perfect props. We pride ourselves on offering clear and straightforward pricing with no hidden costs. And because our team comes with its own kit, your budget goes on quality, not hire fees. Many of our clients come to us time and time again, building relationships that have lasted long. They know that we’ll understand what they need and will work with their strategy, timescale and budget to make it happen. We do our best work when we become part of your team – bringing your story to life and tracking the results as you connect with your audience
                </p>
            </div>
            <div class="w-full md:w-1/2">
              <img class="rounded-lg" src="../assets/images/what-we-do.jpeg" alt="Vortex" height="350px"/>
            </div>
          </div>
          <br><br><br>
        </section>
    <Footer />
</div>
</template>

<script>
import Nav from "@/components/Nav"
import Footer from "@/components/Footer"
export default {
  components: {Nav, Footer},
  name: 'Home',
}
</script>


<style scoped>
.responsive-image {
	background-image: url('../assets/images/background.jpeg');
	min-height: 200px;
	background-size: cover;
	background-position: 50% 50%;
	background-repeat: no-repeat;
}
</style>
