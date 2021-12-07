<template>
  <div class="home">
    <div class="mt-3 ml-16 mr-5 pb-3" style="background-color: #e8e6e1;">
         <div class="ml-5 pt-3">
            <h3 class="text-left">Location Overview (Jalan Medokan Sawah Timur Segoro Tambak Sedati, Medokan Ayu)</h3>
        </div>

        <div class="flex grid-cols-4">
            <card class="ml-2" title="Daily Yield" subtitle="176 m^3"/>
            <card title="Total Energy From Grid" subtitle="109 m^3/h"/>
            <card title="Today Energy To Grid" subtitle="0 m^3/h"/>
            <card title="Today Consumption" subtitle="285 m^3/h"/>
        </div>

        <div class="m-4 bg-white">
            <apex-chart />
        </div>
    </div>
  </div>
</template>

<script>
import ApexChart from '../components/ApexChart.vue'
// import ApexChart from '../components/ApexChart.vue'
// @ is an alias to /src
import Card from '../components/Card.vue'

export default {
  name: 'Home',
  components: {
    // ApexChart
    // HelloWorld
    Card,
    ApexChart,
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
