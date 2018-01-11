<template>
  <div class="hello">
    <p>引进CSV.js,将我们的数据解析成csv所需的格式</p>
    <p>该npm包为comma-separated-values</p>
    <p>默认头部为数字1，数字2</p>
    <p>所需数据格式为{{arr}}</p>
    <button @click='load'>生成csv文件</button>
  </div>
</template>

<script>
  import CSV from "comma-separated-values";
  import exportCsv from "@/util/export-csv";
  export default {
    name: 'HelloCSV',
    data() {
      return {
        arr: [
          [11, 22],
          [33, 44]
        ],
        result: ''
      }
    },
    mounted() {
      let data = JSON.stringify(this.arr)
      this.result = new CSV(data, {
        header: ["数字1", "数字2"]
      }).encode();
    },
    methods: {
      load() {
        exportCsv.download('test.csv', this.result);
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
