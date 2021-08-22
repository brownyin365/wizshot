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
              <h4 class="text-4xl text-white font-bold mb-3">About Us</h4>
              <br><br>
              <p class="text-gray-600 mb-8">WIZSHOT Production has specialized in affordable video production since our inception in 2018. Our expertise in pre-production, production, and post-production has led us to work with companies of every size and in every industry, customizing our approach to fit each client’s unique business needs. Whether you need an internal corporate video, an animated how-to video, or a marketing video for your website or social platforms, we can help you get it done quickly at an affordable price. we’re available no matter where you’re located.
                We’re a full-service video agency, deployed around the world at a moment’s notice to transform brand and business directives into compelling film work. We’re passionate about taking projects from start to finish, or plugging into any aspect of production as needed, for clients of all sizes
                </p>
            </div>
            <div class="w-full md:w-1/2">
              <img class="rounded-lg" src="../assets/images/background.jpeg" alt="Vortex" />
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
