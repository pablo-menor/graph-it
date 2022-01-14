<template>
  <section class="container">
    <img v-bind:src="graphSrc" width="200" @click="selected()"/>
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
  methods:{
      selected(){
         this.$emit('typeSelected');
      }
  },
    mounted() {
    const data = `{type:'${this.graphType}',data:{labels:[2012,2013,2014,2015,2016],datasets:[{label:'Users',data:[120,60,50,180,120]}]}}`;
    const chartService = new QuickChartHandler();
    const chart = chartService.getChart(data);
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