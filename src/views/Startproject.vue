<template>
  <div class="bg-gray-900">
      <Nav/> 
    <b-container>
      <b-row class="justify-content-md-center mt-4">
        <b-col col md="6">
          <b-card 
          header="Booking"
          header-bg-variant="dark"
          header-text-variant="white"
          >
            <b-card-text>
              <b-form @submit="sendProject">
                <b-form-group label="First Name">
                  <b-form-input v-model="project.firstName" placeholder="Enter First Name" required></b-form-input>
                </b-form-group>
                 <b-form-group label="Email">
                  <b-form-input v-model="project.email" type="email" placeholder="Enter Email" required></b-form-input>
                </b-form-group> 
                <b-form-group label="Company">
                  <b-form-input v-model="project.company" type="text" placeholder="Enter Company" required></b-form-input>
                </b-form-group>      
                 <b-form-group label="Phone">
                  <b-form-input v-model="project.phone" type="tel" name="phone" id="phone" pattern="[0-9]{4}-[0-9]{3}-[0-9]{3}" placeholder="0244-000-000" required></b-form-input>
                </b-form-group>
                <b-form-group label="Message">
                  <b-form-textarea v-model="project.message" type="text" row="10" placeholder="Enter Email" required></b-form-textarea>
                </b-form-group>   
                <br>
                <b-form-group>
                  <b-button type="submit" variant="outline-primary">Submit</b-button>
                </b-form-group>
              </b-form>
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
     <Footer/>
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
      project: {
        name: null,
        company: null,
        email: null,
        phone: null,
        message: null
      },

    }
  },

firestore () {
    return {
        // Collection
        projects: db.collection('projects'),
    }
  },

  methods: {
    sendProject() {
       this.$firestore.projects.add(this.project)
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