<template>
  <section class="container">
    <img v-bind:src="graphSrc" width="200"/>
    <p>{{graphType.toUpperCase()}}</p>
  </section>
</template>

<script>
import QuickChartHandler from "../service/quickchart";
export default {
  name: "TypeSample",
  props: {
    graphType: "",
  },
  data() {
    return {
      graphSrc: "",
    };
  },
    mounted() {
    const chartService = new QuickChartHandler();
    const chart = chartService.getChart(this.graphType);
    console.log("PNG obtenido: ");
    chart.then((e) => {
      let urlBlob = URL.createObjectURL(e);
      this.graphSrc = urlBlob;
    });
  },
};
</script>

<style scoped lang="scss" >
.container {
  width: 200px;
  display: flex;
  flex-direction:column ;
  justify-content: center;
  align-items: center;

    img{
        //border: 1.5px solid rgb(179, 179, 179);
        box-shadow: 0 0 4px rgb(145, 145, 145);
        cursor: pointer;

        &:hover{
        box-shadow: 0 0 5px rgb(51, 52, 53);

        }
    }
    p{
        margin-top: 20px;
    }

}

</style>