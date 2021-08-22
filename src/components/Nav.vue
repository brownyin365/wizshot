<template>
    <nav class="flex items-center justify-between flex-wrap p-6">
      
      <div class="flex items-center flex-shrink-0 text-dark md:text-right mr-6">
        <span class="font-semibold text-xl tracking-tight hover:text-green-800 text-white"><a>WizSHOT <router-link to="/" class="text-yellow-500 text-4xl"> Production 🎥</router-link> </a></span>
      </div>
      <div class="block lg:hidden">
        <!-- <button id="nav-toggle" class="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800 hover:border-teal-500 appearance-none focus:outline-none">
				<svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
          </svg>
        </button> -->
      </div> 
    <div id="nav-content" class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block pt-6 pr-24 lg:pt-0 md:text-right">
      <div class="text-sm lg:flex-grow">
          <router-link to="/" class="block mt-1 text-xl lg:inline-block lg:mt-0 text-white hover:text-teal-800 mr-4 no-underline">HOME</router-link>
          <router-link to="/about" class="block mt-4 text-xl lg:inline-block lg:mt-0 text-white hover:text-teal-800 mr-4 no-underline">ABOUT US</router-link>
          <router-link to="/ourwork" class="block mt-4 text-xl lg:inline-block lg:mt-0 text-white hover:text-teal-800 mr-4 no-underline">OUR WORK</router-link>
          <router-link to="/job" class="block mt-4 text-xl lg:inline-block lg:mt-0 text-white hover:text-teal-800 mr-4 no-underline">JOB</router-link>
          <router-link to="/startproject" class="block mt-4 text-xl lg:inline-block lg:mt-0 text-white hover:text-teal-800 mr-4 no-underline">GET IN TOUCH</router-link>
       </div>
     </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style>

</style>