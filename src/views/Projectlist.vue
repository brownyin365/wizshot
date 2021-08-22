<template>
    <div>
      <div class="overflow-x-auto">
        <div class="min-w-screen min-h-screen bg-gray-100 flex items-center justify-center bg-gray-100 font-sans overflow-hidden">
            <div class="w-full lg:w-5/6">
            <div>
                <h1 class="text-xl">List of Projects Send Inn</h1>
            </div>
                <div class="bg-white shadow-md rounded my-6">
                    <table class="min-w-max w-full table-auto">
                        <thead>
                            <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                <th class="py-3 px-6 text-center">Name</th>
                                <th class="py-3 px-6 text-center">Email</th>
                                <th class="py-3 px-6 text-center">Phone</th>
                                <th class="py-3 px-6 text-center">Feed Back</th>
                                <!-- <th class="py-3 px-6 text-center">Action</th> -->
                            </tr>
                        </thead>
                        <tbody class="text-gray-600 text-sm font-light">
                            <tr class="border-b border-gray-200 hover:bg-gray-100" v-for="project in projects" :key="project"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                >
                                <td class="py-3 px-6 text-left whitespace-nowrap">
                                    <div class="flex items-center">
                                        <span class="font-medium">{{project.name}}</span>
                                    </div>
                                </td>
                                <td class="py-3 px-6 text-left">
                                    <div class="flex items-center">                                   
                                        <span>{{project.email}}</span>
                                    </div>
                                </td>
                                 <td class="py-3 px-6 text-center">
                                    <div class="flex item-center justify-center">
                                        {{project.phone}}
                                    </div>
                                </td>
                                 <td class="py-3 px-6 text-center">
                                    <div class="flex item-center justify-center">
                                        {{project.message}}
                                    </div>
                                </td>
                                <!-- <td class="py-3 px-6 text-center">
                                    <div class="flex item-center justify-center">
                                        <button class="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded" @click="deleteProjects(project)"> Delete</button>
                                    </div>
                                </td> -->
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import {db} from '../firebase'
import 'vuejs-noty/dist/vuejs-noty.css'

    export default {
      data() {
        return {
            project: []
         
        }
      },
      firestore () {
            return {
                // Collection
                projects: db.collection('projects'),
            }
        },

        // methods: {
        //     deleteProjects(project){
        //         db.collection("projects").doc(project.id).delete().then((response) => {
        //         this.$noty.success("Successfully Deleted ", response);
        //         }).catch((error) => {
        //             console.error("Error removing document: ", error); /* eslint-disable-line no-console */
        //         });
        //     }
         
        // }
       
}
</script>

<style lang="scss" scoped>

</style>
