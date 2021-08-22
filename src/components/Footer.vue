<template>
    <!--Footer-->
    <div>
      <br><br><br><br><br><br><br><br><br><br>
        <footer class="bg-gray-900">
            <span class="font-semibold text-xl tracking-tight hover:text-green-800 text-white"><a>WizSHOT <a class="text-yellow-500 text-4xl"> Production 🎥</a> </a></span>
          <hr/>
          <div class="container mx-auto px-6 pt-64 pb-48">
            <div class="flex flex-wrap">
              <div class="w-full md:w-1/4 text-center md:text-left">
                <h5 class="uppercase mb-6 font-bold text-1xl text-white no-underline">CONTACT WizSHOT Production</h5>
                <hr class="w-12"/>
                <ul class="mb-4">
                  <li class="mt-2">
                    <a href="#" class="hover:underline text-white hover:text-orange-500 text-2xl no-underline">02440000000</a>
                  </li>
                  <li class="mt-2">
                    <a href="#" class="hover:underline text-white hover:text-orange-500 text-2xl no-underline">info@wizshot.com</a>
                  </li>
                  <li class="mt-2">
                    <a href="#" class="hover:underline text-white hover:text-orange-500 text-2xl no-underline">facebook messenger</a>
                  </li>
                   <li class="mt-2">
                    <a href="#" class="hover:underline text-white hover:text-orange-500 text-2xl no-underline">Whatsapp messenger</a>
                  </li>
                </ul>
              </div>
              <div class="w-full md:w-1/4 text-center md:text-left">
                <h5 class="uppercase mb-6 font-bold text-1xl text-white">Links</h5>
                <hr class="w-12"/>
                <ul class="mb-4">
                  <li class="mt-2">
                    <router-link to="/" class="hover:underline text-white hover:text-orange-500 text-2xl no-underline">Home</router-link>
                  </li>
                  <li class="mt-2">
                    <router-link to="/about" class="hover:underline text-white hover:text-orange-500 text-2xl no-underline">About Us</router-link>
                  </li>
                   <li class="mt-2">
                    <router-link to="/ourwork" class="hover:underline text-white hover:text-orange-500 text-2xl no-underline">Our Work</router-link>
                  </li>
                  <li class="mt-2">
                    <router-link to="#" class="hover:underline text-white hover:text-orange-500 text-2xl no-underline">Jobs</router-link>
                  </li>
                </ul>
              </div>
              <div class="w-full md:w-1/4 text-center md:text-left ">
                <h5 class="uppercase mb-6 font-bold text-1xl text-white">Social</h5>
                <hr class="w-12"/>
                <ul class="mb-4">
                  <li class="mt-2">
                    <a href="#" class="hover:underline text-white hover:text-orange-500 text-2xl no-underline">Facebook</a>
                  </li>
                  <li class="mt-2">
                    <a href="#" class="hover:underline text-white hover:text-orange-500 text-2xl no-underline">Twitter</a>
                  </li>
                  <li class="mt-2">
                    <a href="#" class="hover:underline text-white hover:text-orange-500 text-2xl no-underline">Instagram</a>
                  </li>
                   <li class="mt-2">
                    <a href="#" class="hover:underline text-white hover:text-orange-500 text-2xl no-underline">Youtube</a>
                  </li>
                </ul>
              </div>
              <div class="w-full md:w-1/4 text-center md:text-left ">
                <h5 class="uppercase mb-6 font-bold text-1xl text-white">Looking to start a Project?</h5>
                <hr class="w-12"/>
                <ul class="mb-4">
                  <li class="mt-2">
                    <p class="text-white">Our expert team are on hand to help you achieve your goals through the power of video. Fill out our quick and simple form to get started...</p>
                  </li>
                  <br><br>
                 <li class="mt-2">
                   <router-link to="/startproject" class="font-bold rounded-full mt-48 py-4 px-8 shadow-lg uppercase tracking-wider hover:border-red hover:text-white hover:bg-red-600 text-white no-underline bg-red-700">START YOUR PROJECT +</router-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
    </div>
</template>