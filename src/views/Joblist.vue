<template>
    <div>
      <div class="overflow-x-auto">
        <div class="min-w-screen min-h-screen bg-gray-100 flex items-center justify-center bg-gray-100 font-sans overflow-hidden">
            <div class="w-full lg:w-5/6">
            <div>
                <h1 class="text-xl">Curent Job Seekers</h1>
            </div>
                <div class="bg-white shadow-md rounded my-6">
                    <table class="min-w-max w-full table-auto">
                        <thead>
                            <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                <th class="py-3 px-6 text-center">Full Name</th>
                                <th class="py-3 px-6 text-center">Email</th>
                                <th class="py-3 px-6 text-center">Phone</th>
                                <th class="py-3 px-6 text-center">City</th>
                                <th class="py-3 px-6 text-center">Position</th>
                                <th class="py-3 px-6 text-center">Start Date</th>
                            </tr>
                        </thead>
                        <tbody class="text-gray-600 text-sm font-light">
                            <tr class="border-b border-gray-200 hover:bg-gray-100" v-for="job in jobs" :key="job"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                >
                                <td class="py-3 px-6 text-left whitespace-nowrap">
                                    <div class="flex items-center">
                                        <span class="font-medium">{{job.fullName}}</span>
                                    </div>
                                </td>
                                <td class="py-3 px-6 text-left">
                                    <div class="flex items-center">                                   
                                        <span>{{job.email}}</span>
                                    </div>
                                </td>
                                 <td class="py-3 px-6 text-left">
                                    <div class="flex items-center">                                   
                                        <span>{{job.city}}</span>
                                    </div>
                                </td>
                                 <td class="py-3 px-6 text-center">
                                    <div class="flex item-center justify-center">
                                        {{job.phone}}
                                    </div>
                                </td>
                                 <td class="py-3 px-6 text-center">
                                    <div class="flex item-center justify-center">
                                        {{job.position}}
                                    </div>
                                </td>
                                <td class="py-3 px-6 text-center">
                                    <div class="flex item-center justify-center">
                                        {{job.startDate}}
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
            job: []
         
        }
      },
      firestore () {
            return {
                // Collection
                jobs: db.collection('jobs'),
            }
        },

    
       
}
</script>

<style lang="scss" scoped>

</style>
