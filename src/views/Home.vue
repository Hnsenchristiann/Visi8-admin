<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <div class="text-pink-500 mt-5"> Apex Chart Realtime Looping </div>
    <div class="grid grid-cols-3 gap-4">
      <div v-for="item in ApexChart" :key="item.id">
          <div class="px-12">
              <p>{{item.title}}</p>
              <apex-chart />
          </div>
      </div>
    </div> -->
    <div class="mt-3 ml-16 mr-5 pb-3" style="background-color: #e8e6e1;">
      <div class="flex grid-cols-4">
        <card class="ml-5" title="Total Water Usage" subtitle="110.76 m^3"/>
        <card title="Average Water Flow" subtitle="110.76 m^3"/>
        <card title="Daily Water Saving" subtitle="110.76 m^3"/>
        <card title="Water Sensors" subtitle="110.76 m^3"/>
      </div>

      <div class="p-3">
        <data-tables />
      </div>

      <div class="p-3">
        <google-map />
      </div>

    </div>
  </div>
</template>

<script>
// import ApexChart from '../components/ApexChart.vue'
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Card from '../components/Card.vue'
import DataTables from '../components/DataTables.vue'
import GoogleMap from '../components/GoogleMap.vue'

export default {
  name: 'Home',
  components: {
    // ApexChart
    // HelloWorld
    Card,
    DataTables,
    GoogleMap,
  },
  data () {
    return {
      // ApexChart: [
      //   {title : 'chart 1'},
      //   {title : 'chart 2'},
      //   {title : 'chart 3'},
      //   {title : 'chart 4'},
      //   {title : 'chart 5'},
      //   {title : 'chart 6'},
      // ]
    }
  }
}
</script>
