<template>
  <section class="container">
    <div class="settings">
      <input type="text" v-model="numBars" @change="preview()" />
    </div>
    <div class="preview">
      <img v-bind:src="graphSrc" width="400" />
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
      numBars: 20,
      graphSrc: "",
      graphType: "progressBar",
    };
  },
  methods: {
    preview() {
        console.log(this.numBars);
      const data = `{type:'${this.graphType}',data:{datasets:[{data:[50,${this.numBars}]}]}}`;
      const chartService = new QuickChartHandler();
      const chart = chartService.getChart(data);
      console.log("PNG obtenidoooo: ");
      chart.then((e) => {
        let urlBlob = URL.createObjectURL(e);
        this.graphSrc = urlBlob;
      });
    },
  },
  mounted() {
      this.preview()
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  .settings {
    height: 100vh;
    width: 40%;
    background-color: royalblue;
  }
  .preview {
    height: 100vh;
    width: 60%;
    background-color: rgb(65, 225, 113);
  }
}
</style>