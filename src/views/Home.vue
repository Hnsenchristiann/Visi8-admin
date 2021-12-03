<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div class="text-pink-500 mt-5"> Apex Chart Realtime Looping </div>
    <div class="grid grid-cols-3 gap-4">
      <div v-for="item in ApexChart" :key="item.id">
          <div class="px-12">
              <p>{{item.title}}</p>
              <apex-chart />
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import ApexChart from '../components/ApexChart.vue'
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    ApexChart
    // HelloWorld
  },
  data () {
    return {
      ApexChart: [
        {title : 'chart 1'},
        {title : 'chart 2'},
        {title : 'chart 3'},
        {title : 'chart 4'},
        {title : 'chart 5'},
        {title : 'chart 6'},
      ]
    }
  }
}
</script>
