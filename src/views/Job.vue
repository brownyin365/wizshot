<template>
<div>
   <div class="responsive-image bg-fixed">
     <Nav/>
       <div class="container m-auto text-center px-6 opacity-100">
         <br><br>
      <router-link to="/startproject" class="font-bold no-underline rounded-full mt-48 py-4 px-8 shadow-lg uppercase tracking-wider hover:border-red hover:text-white hover:bg-red-600 bg-red-700 text-white">START YOUR PROJECT +</router-link>
    </div>
    <br><br>
  </div>      
  <br><br><br><br><br><br>
        <!-- Features -->
        <section class="container mx-auto px-6 p-10 bg-gray-900">
          <div class="flex items-center flex-wrap mb-20">
            <div class="w-full md:w-1/2">
              <img class="rounded-lg" src="../assets/images/what-we-do.jpeg" alt="Vortex" height="550px"/>
            </div>
                
             <div class="w-full md:w-1/2 pr-8">
              <h4 class="text-4xl text-white font-bold mb-3">Our Work</h4>
              <br><br>
               <b-card-text class="p-12">
                    <b-form @submit="sendJob">
                        <b-form-group class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" label="FULL NAME">
                        <b-form-input v-model="job.fullName" placeholder="Full Name" required></b-form-input>
                        </b-form-group>
                        <b-form-group class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" label="EMAIL">
                        <b-form-input v-model="job.email" type="email" placeholder="Email" required></b-form-input>
                        </b-form-group> 
                        <b-form-group class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" label="CITY">
                        <b-form-input v-model="job.city" type="text" placeholder="City" required></b-form-input>
                        </b-form-group>  
                          <b-form-group class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" label="STATE">
                        <b-form-input v-model="job.state" type="text" placeholder="State" required></b-form-input>
                        </b-form-group>    
                        <b-form-group class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" label="PHONE">
                        <b-form-input v-model="job.phone" type="tel" name="phone" id="phone" pattern="[0-9]{4}-[0-9]{3}-[0-9]{3}" placeholder="0244-000-000" required></b-form-input>
                        </b-form-group>
                        <!-- <b-form-group class="text-white" label="Position">
                        <b-form-input v-model="job.position" type="text" placeholder="Position" required></b-form-input>
                        </b-form-group>   -->
                          <b-form-group class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" label="START DATE">
                        <b-form-input v-model="job.startDate" type="text" placeholder="Start Date" required></b-form-input>
                        </b-form-group> 
                        <br>
                          <div class="mb-4">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                            Position
                          </label>
                        <div class="relative">
                          <select v-model="job.position" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                            <option>Multimedia Animator</option>
                            <option>Cinematographer</option>
                            <option>ScreenWritter</option>
                            <option>Video Editor</option>
                            </select>
                          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                          </div>
                        </div>
                      </div>
                        <b-form-group>
                        <b-button type="submit" variant="outline-primary">Submit</b-button>
                        </b-form-group>
                    </b-form>
            </b-card-text>
            </div>

          </div>
          <br><br><br>
        </section>
    <Footer />
</div>
</template>


<script>
import { db } from "../firebase";
import 'vuejs-noty/dist/vuejs-noty.css'
import Nav from "@/components/Nav"
import Footer from "@/components/Footer"

export default {
  components: {Nav, Footer},
  data() {
    return {
      job: {
              fullName: null,
              email: null,
              city: null,
              phone: null,
              state: null,
              position: null,
              startDate: null

          },

    }
  },

firestore () {
    return {
        // Collection
       jobs: db.collection('jobs'),
    }
  },

  methods: {
    sendJob() {
       this.$firestore.jobs.add(this.job)
        .then((response) =>{
         // console.log("Document successfully written!"); // eslint-disable-line no-console
           this.$noty.show("Message Send Successfully ", response)
            })
            .catch((error) =>{
            console.error("Error writing document: ", error); // eslint-disable-line no-console
              });
            this.$router.replace('/');
          }
     }
};
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