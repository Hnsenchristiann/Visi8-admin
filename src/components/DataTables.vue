<template>

  <v-client-table class="tables p-3" :data="rows" :columns="columns" :options="options" />
</template>

<script>
export default {
    name: 'DataTables',
    data(){
        return{
            columns: [ 'state', 'name','owner','daily_water','total_water', 'current_flow', 'total_flow', 'update'],
            rows:[
                {state:"online", name:"John",owner:"Visi 8", daily_water:"100 m^3", total_water:"150 m^3/h", current_flow: "125 m^3", total_flow:"173 m^3/h", update:  "14.00"},
                {state:"online", name:"jane",owner:"Visi 8", daily_water:"100 m^3", total_water:"150 m^3/h", current_flow: "125 m^3", total_flow:"173 m^3/h", update:  "14.00"},
                {state:"online", name:"ramos",owner:"Visi 8", daily_water:"100 m^3", total_water:"150 m^3/h", current_flow: "125 m^3", total_flow:"173 m^3/h", update:  "14.00"},
                {state:"online", name:"kevin",owner:"Visi 8", daily_water:"100 m^3", total_water:"150 m^3/h", current_flow: "125 m^3", total_flow:"173 m^3/h", update:  "14.00"},
                {state:"online", name:"clara",owner:"Visi 8", daily_water:"100 m^3", total_water:"150 m^3/h", current_flow: "125 m^3", total_flow:"173 m^3/h", update:  "14.00"}
            ],
            options: {
                filterByColumn: true,
                perPage:10,
                texts: {
                    filter: "Filter:",
                    filterBy: 'Filter {column}',
                    count:' '
                },
                dateColumns:['birth'],
                dateFormat: 'YYYY-MM-DD',
                datepickerOptions: {
                    showDropdowns: true,
                    autoUpdateInput: true,
                },
                pagination: { chunk:10,dropdown:false },
                filterable:['name','daily_water'],
                headings: {
                    state: 'Sensor State',
                    name: 'Sensor Name',
                    owner: 'Owner',
                    daily_water: 'Daily Water Flow',
                    total_water: 'Total Water Flow',
                    current_flow: 'Current Flow Capacity',
                    total_flow: 'Total Flow Capacity',
                    update: 'Last Update',
                },
            }
        }            
    }
    
}
</script>

<style>
    .tables{
    padding: 6px;
    border-radius: 4px;
    cursor: pointer;
    }

    #people {
  text-align: center;
  width: 95%;
  margin: 0 auto;
}

h2 {
  margin-bottom: 30px;
}

th, td {
  text-align: center;
  border: solid gray;
}

th:nth-child(n+2),
td:nth-child(n+2) {
  text-align: center;
  padding: 10px;
}


</style>