<template>
  <section class="container">
    <div class="settings">
      Number of bars: {{numBars.num}}  <button class="add-btn" @click="addBar(data); numBars.num++;numBars.numFor.push(1) ">Add</button>
      <input class="percentage" type="text" v-model="data.data.datasets[0].data[i]" v-for="(item, i) in numBars.numFor" :key="i" @change="changeValue(data, i)">
      <!-- <input type="text" v-model="numBars" @change="update(data)" /> -->
    </div>
    <div class="preview">
      <img v-bind:src="graphSrc" width="500" />
    </div>
  </section>
</template>

<script>
import QuickChartHandler from "../service/quickchart";
export default {
  name: "ProgressBarSettings",
  props: {
    // type: String,
  },
  data() {
    return {
      numBars:{
        num: 1,
        numFor: [1]
      },
      graphSrc: "",
      graphType: "progressBar",
      data:{
        type:'progressBar',
        data:{
          datasets:[
            {
              data:[50]
             }
            ]
          }
      }
    };
  },
  methods: {
    preview(data) {
      // const data = `{type:'${this.graphType}',data:{datasets:[{data:[50,${this.porcentaje}]}]}}`;
       const dataReady = JSON.stringify(data);
      const chartService = new QuickChartHandler();
      const chart = chartService.getChart(dataReady);
      console.log("PNG obtenidoooo: ");
      chart.then((e) => {
        let urlBlob = URL.createObjectURL(e);
        this.graphSrc = urlBlob;
      });
    },
    addBar(dataa){
      const dataRaw = JSON.stringify(dataa);
      const data =  JSON.parse(dataRaw);
      data.data.datasets[0].data.push(50)
      this.data = data;
      this.preview(this.data);
    },
    changeValue(dataa ,index){
      const dataRaw = JSON.stringify(dataa);
      const data =  JSON.parse(dataRaw);
      data.data.datasets[0].data[index] = data.data.datasets[0].data[index];
      // .data.data.datasets[0].data.push(20)
      this.data = data;
      this.preview(this.data);
    }
  },
  mounted() {
      this.preview(this.data);
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  .settings {
    height: 100vh;
    width: 40%;
    //background-color: royalblue;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 70px;

    .add-btn{
      margin-bottom: 20px;
      padding: 5px 15px;
      border-radius: 5px;
      outline: none;
      border: none;
      margin-top: 10px;
      background-color: rgb(168, 168, 168);
      color: #fff;
    }
    .percentage{
      width: 50px;
      padding: 10px;
      text-align: center;
      margin-bottom: 10px;
      outline: none;
    }
  }
  .preview {
    height: 100vh;
    width: 60%;
    background-color: rgb(212, 212, 212);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
</style>