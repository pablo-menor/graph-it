<template>
  <div class="home">
    <!-- <GraphSettings/> -->
    <h2>Select the type of graph you want to create</h2>
    <section class="graph-types-panel">
      <TypeSample graphType="line" class="graph" />
      <TypeSample graphType="bar" class="graph" />
      <TypeSample graphType="pie" class="graph" />
      <TypeSample graphType="radialGauge" class="graph" />
      <TypeSample graphType="progressBar" class="graph" />
      <TypeSample graphType="doughnut" class="graph" />
    </section>

    <!-- <img v-bind:src="graphSrc" /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import QuickChartHandler from "../service/quickchart";
import GraphSettings from "@/components/GraphSettings.vue";
import TypeSample from "@/components/TypeSample.vue";

export default {
  name: "Home",
  components: {
    GraphSettings,
    TypeSample,
  },
  data() {
    return {
      graphSrc: "",
    };
  },
  methods: {},
  // mounted() {
  //   const chartService = new QuickChartHandler();
  //   const chart = chartService.getChart('bar');
  //   console.log("PNG obtenido: ");
  //   // chart.then(e=> console.log(e))
  //   chart.then((e) => {
  //     let urlBlob = URL.createObjectURL(e);
  //     this.graphSrc = urlBlob;
  //   });
  // },
};
</script>

<style lang="scss" scoped>
.graph-types-panel {
  margin: auto;
    width: 70vw;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;

    .graph{
      margin-top:70px ;
    }
}
</style>
